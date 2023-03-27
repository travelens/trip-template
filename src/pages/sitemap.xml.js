import { getCollection } from 'astro:content'

const trips = await getCollection('trip', (trip) => { return !trip.data.draft})
const posts = await getCollection('post', (post) => { return !post.data.draft})

export async function get() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${trips.map((trip) => `<url>
    <loc>${import.meta.env.SITE + import.meta.env.BASE_URL + trip.slug}</loc>
    <lastmod>${trip.data.end.toISOString()}</lastmod>
  </url>`)}
${posts.map((post) => `  <url>
    <loc>${import.meta.env.SITE + import.meta.env.BASE_URL + post.slug}</loc>
    <lastmod>${post.data.date.toISOString()}</lastmod>
  </url>`).join('\n')}
</urlset> 
`
  return {
    body,
  }
}
