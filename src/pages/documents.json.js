import { getCollection } from 'astro:content'

const docs = await getCollection('trip', (trip) => { return !trip.data.draft})
let documents = docs.map(doc => ({
  id: doc.id,
  slug: doc.slug,
  base: import.meta.env.BASE_URL,
  collection: doc.collection,
  body: doc.body,
  trip: doc.data.title,
  place: doc.data.place,
  location: doc.data.location,
  title: doc.data.title,
  description: doc.data.title,
}))

const posts = await getCollection('post', (post) => { return !post.data.draft})
documents = documents.concat(posts.map(doc => ({
  id: doc.id,
  slug: doc.slug,
  base: import.meta.env.BASE_URL,
  collection: doc.collection,
  body: doc.body,
  trip: doc.data.trip,
  place: doc.data.place,
  location: doc.data.location,
  title: doc.data.title,
  description: doc.data.title,
})))

export async function get() {
    const body = JSON.stringify(documents)
    return {
      body
    }
  }