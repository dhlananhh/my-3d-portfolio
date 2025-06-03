// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { projectsData } from '@/lib/data';

const siteUrl = "https://your-portfolio-domain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Thêm các trang tĩnh khác nếu có (ví dụ: /about, /blog)
    // { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5, },
    ...projectEntries,
  ];
}
