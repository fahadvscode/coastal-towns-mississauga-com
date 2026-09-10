create table if not exists south_banks_coastal_towns_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  is_broker boolean not null default false,
  site_source text not null,
  consent boolean not null default false,
  consent_timestamp timestamptz,
  page_path text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text
);

alter table south_banks_coastal_towns_leads enable row level security;

create policy "anon can insert south_banks_coastal_towns_leads"
  on south_banks_coastal_towns_leads for insert
  to anon
  with check (true);

create index if not exists south_banks_coastal_towns_leads_site_source_idx on south_banks_coastal_towns_leads (site_source);
create index if not exists south_banks_coastal_towns_leads_created_at_idx on south_banks_coastal_towns_leads (created_at desc);
