/**
 * SEO básico gerado no build (não roda em `npm run dev`).
 *  • Completa o <head> do index.html com o que faltar: canonical, Open Graph
 *    (prévia do link no WhatsApp/Instagram), Twitter card e JSON-LD (dados
 *    estruturados do negócio). Tags que já existem no HTML não são repetidas.
 *  • Gera dist/sitemap.xml e acrescenta a linha `Sitemap:` no robots.txt.
 * Título e descrição vêm do próprio index.html (<title> e meta description).
 * A URL pública vem do ambiente de build (Netlify: URL; Vercel:
 * VERCEL_PROJECT_PRODUCTION_URL) ou de `siteUrl`. Sem URL, só saem as tags
 * que não exigem endereço absoluto.
 */
import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";

export type SeoOptions = {
  siteUrl?: string;   // fallback quando o build não informa a URL
  name?: string;      // nome do negócio (og:site_name / JSON-LD); padrão = <title>
  image?: string;     // imagem da prévia, caminho em /public (padrão: /og-image.jpg se existir)
  type?: string;      // tipo schema.org: BeautySalon, Store, Person, Organization...
  instagram?: string; // URL do perfil (JSON-LD sameAs)
  phone?: string;     // E.164 sem "+" (JSON-LD telephone)
  locality?: string;  // cidade/região (JSON-LD address)
};

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const unesc = (s: string) =>
  s.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

const envUrl = () => {
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return process.env.URL || (vercel ? `https://${vercel}` : "");
};

export default function seo(opts: SeoOptions = {}): Plugin {
  let outDir = "dist";
  let publicDir = "public";
  const url = () => (envUrl() || opts.siteUrl || "").replace(/\/+$/, "");

  return {
    name: "biolink-seo",
    apply: "build",
    configResolved(c) {
      outDir = path.resolve(c.root, c.build.outDir);
      publicDir = c.publicDir || path.resolve(c.root, "public");
    },
    transformIndexHtml(html) {
      const base = url();
      const has = (re: RegExp) => re.test(html);
      const title = unesc(html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() ?? "");
      const desc = unesc(html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] ?? "");
      const lang = html.match(/<html[^>]*\slang="([^"]+)"/i)?.[1] ?? "";
      const imagePath =
        opts.image ?? (fs.existsSync(path.join(publicDir, "og-image.jpg")) ? "/og-image.jpg" : "");
      const image = imagePath && base ? `${base}${imagePath}` : imagePath;
      const name = opts.name || title;

      const tags: string[] = [];
      const meta = (attr: "property" | "name", key: string, value: string) => {
        if (!value || has(new RegExp(`${attr}="${key}"`, "i"))) return;
        tags.push(`<meta ${attr}="${key}" content="${esc(value)}" />`);
      };
      if (base && !has(/rel="canonical"/i)) tags.push(`<link rel="canonical" href="${base}/" />`);
      meta("property", "og:type", "website");
      meta("property", "og:site_name", name);
      meta("property", "og:title", title);
      meta("property", "og:description", desc);
      if (base) meta("property", "og:url", `${base}/`);
      meta("property", "og:image", image);
      meta("property", "og:locale", lang.replace("-", "_"));
      meta("name", "twitter:card", image ? "summary_large_image" : "summary");
      meta("name", "twitter:title", title);
      meta("name", "twitter:description", desc);
      meta("name", "twitter:image", image);

      if (!has(/application\/ld\+json/i)) {
        const ld: Record<string, unknown> = {
          "@context": "https://schema.org",
          "@type": opts.type || "BeautySalon",
          name,
          description: desc || undefined,
          url: base ? `${base}/` : undefined,
          image: image || undefined,
          telephone: opts.phone ? `+${opts.phone}` : undefined,
          address: opts.locality ? { "@type": "PostalAddress", addressLocality: opts.locality } : undefined,
          sameAs: opts.instagram ? [opts.instagram] : undefined,
        };
        tags.push(`<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>`);
      }
      return html.replace(/\s*<\/head>/i, `\n    ${tags.join("\n    ")}\n  </head>`);
    },
    closeBundle() {
      const base = url();
      if (!base || !fs.existsSync(outDir)) return;
      const today = new Date().toISOString().slice(0, 10);
      fs.writeFileSync(
        path.join(outDir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${base}/</loc><lastmod>${today}</lastmod></url>\n</urlset>\n`,
      );
      const robots = path.join(outDir, "robots.txt");
      const current = fs.existsSync(robots) ? fs.readFileSync(robots, "utf8") : "User-agent: *\nAllow: /\n";
      if (!/^Sitemap:/im.test(current)) {
        fs.writeFileSync(robots, `${current.replace(/\s*$/, "")}\n\nSitemap: ${base}/sitemap.xml\n`);
      }
    },
  };
}
