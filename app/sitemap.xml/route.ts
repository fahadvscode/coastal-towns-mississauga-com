import { LAST_UPDATED_ISO, SITEMAP_PATHS, SITE_URL } from "@/lib/content";

function loc(path: (typeof SITEMAP_PATHS)[number]): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function sitemapXml(): string {
  const urls = SITEMAP_PATHS.map((path) => {
    const changefreq = path === "/" ? "weekly" : "monthly";
    const priority = path === "/" ? "1.0" : "0.7";
    return `  <url>
    <loc>${loc(path)}</loc>
    <lastmod>${LAST_UPDATED_ISO}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const headers = {
  "Content-Type": "application/xml; charset=utf-8",
  "Content-Disposition": "inline",
  "Cache-Control": "public, max-age=0, must-revalidate",
};

export function GET() {
  return new Response(sitemapXml(), { status: 200, headers });
}

export function HEAD() {
  return new Response(null, { status: 200, headers });
}
