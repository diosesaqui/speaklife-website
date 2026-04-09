import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.speaklifebibleaffirmations.com";
  const pages = [
    { url: "/", priority: 1.0 },
    { url: "/best-christian-affirmation-app", priority: 0.9 },
    { url: "/declarations", priority: 0.9 },
    { url: "/morning-devotional-app-women", priority: 0.9 },
    { url: "/christian-app-for-anxiety", priority: 0.9 },
    { url: "/bible-affirmations-for-women", priority: 0.9 },
    { url: "/scripture-declarations-for-confidence", priority: 0.9 },
    { url: "/speaklife-vs-hallow", priority: 0.8 },
    { url: "/speaklife-vs-youversion", priority: 0.8 },
    { url: "/faq", priority: 0.8 },
    { url: "/features", priority: 0.7 },
    { url: "/privacy", priority: 0.5 },
  ];

  return pages.map(p => ({
    url: `${base}${p.url}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p.priority,
  }));
}
