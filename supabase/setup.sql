-- Run this ONCE in Supabase → SQL Editor.
-- 1) Replace the email below with the email you will log in with.
-- ─────────────────────────────────────────────────────────────
create table if not exists public.items (
  id          uuid primary key default gen_random_uuid(),
  kind        text not null check (kind in
              ('profile','project','experience','education','certification','skill','service')),
  data        jsonb not null default '{}'::jsonb,
  sort_order  int  not null default 0,
  visible     boolean not null default true,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);
create unique index if not exists one_profile on public.items(kind) where kind = 'profile';
create index if not exists items_kind_sort on public.items(kind, sort_order);

create or replace function public.touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;
drop trigger if exists items_touch on public.items;
create trigger items_touch before update on public.items
  for each row execute function public.touch_updated_at();

-- Who is the admin?  >>> CHANGE THIS EMAIL <<<
create or replace function public.is_admin() returns boolean
language sql stable as $$
  select lower(coalesce(auth.jwt() ->> 'email','')) = lower('YOUR_ADMIN_EMAIL@example.com')
$$;

alter table public.items enable row level security;
drop policy if exists "public read visible" on public.items;
drop policy if exists "admin insert" on public.items;
drop policy if exists "admin update" on public.items;
drop policy if exists "admin delete" on public.items;
create policy "public read visible" on public.items for select using (visible or public.is_admin());
create policy "admin insert" on public.items for insert with check (public.is_admin());
create policy "admin update" on public.items for update using (public.is_admin()) with check (public.is_admin());
create policy "admin delete" on public.items for delete using (public.is_admin());

-- Image / file storage (public read, admin write)
insert into storage.buckets (id, name, public) values ('portfolio','portfolio', true)
  on conflict (id) do update set public = true;
drop policy if exists "portfolio admin insert" on storage.objects;
drop policy if exists "portfolio admin update" on storage.objects;
drop policy if exists "portfolio admin delete" on storage.objects;
create policy "portfolio admin insert" on storage.objects for insert
  with check (bucket_id = 'portfolio' and public.is_admin());
create policy "portfolio admin update" on storage.objects for update
  using (bucket_id = 'portfolio' and public.is_admin());
create policy "portfolio admin delete" on storage.objects for delete
  using (bucket_id = 'portfolio' and public.is_admin());
