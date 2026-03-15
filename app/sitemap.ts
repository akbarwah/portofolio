import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://akbarwah.vercel.app', // Ganti jika domain Anda berubah
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}