import { getCollection } from 'astro:content'
import { SiteMetadata } from '../config'

const trips = await getCollection('trip', (trip) => { return !trip.data.draft})
const posts = await getCollection('post', (post) => { return !post.data.draft})

export async function get() {
  return { body: `<?xml version="1.0"?>
<rss version="2.0">
  <channel>
    <title>${SiteMetadata.title}</title>
    <link>${import.meta.env.SITE}</link>
    <description>${SiteMetadata.description}</description>
    <language>en</language>
    <pubDate>${SiteMetadata.buildTime.toISOString()}</pubDate>
    <lastBuildDate>${SiteMetadata.buildTime.toISOString()}</lastBuildDate>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <generator>Astro</generator>
    <managingEditor>${SiteMetadata.author.email}</managingEditor>
    <webMaster>${SiteMetadata.author.email}</webMaster>
${trips.map((trip) => `    <item>
      <title>${trip.data.title}</title>
      <link>${import.meta.env.SITE + import.meta.env.BASE_URL + trip.slug}</link>
      <description>${trip.data.description}</description>
      <pubDate>${trip.data.end}</pubDate>
      <guid>${import.meta.env.SITE + import.meta.env.BASE_URL + trip.slug}</guid>
      <category domain="place">${trip.data.place}</category>
      <category domain="location">${trip.data.location}</category>
    </item>`).join('\n')}
${posts.map((post) => `    <item>
      <title>${post.data.title}</title>
      <link>${import.meta.env.SITE + import.meta.env.BASE_URL + post.slug}</link>
      <description>${post.data.description}</description>
      <pubDate>${post.data.date}</pubDate>
      <guid>${import.meta.env.SITE + import.meta.env.BASE_URL + post.slug}</guid>
      <category domain="trip">${post.data.trip}</category>
      <category domain="place">${post.data.place}</category>
      <category domain="location">${post.data.location}</category>
    </item>`).join('\n')}
  </channel>
</rss>
`,}
}