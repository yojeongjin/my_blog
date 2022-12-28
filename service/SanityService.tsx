import  SanityClient  from '@sanity/client'

export default class SanityService {
  _client = SanityClient({
    dataset: "production",
    projectId: "te7gy4v3",
    useCdn: process.env.NODE_ENV === "production"
  })

  async getPosts() {
    return await this._client.fetch(`
    *[_type == 'post'] {
      title,
      'slug': slug.current,
      'thumbnail': {
        'alt': thumbnail.alt,
        'imagUrl': thumbnail.asset -> url
      },
      'contents': contents[],
      'tag': tag -> {
        title
      }
    }
    `)
  }
  async getStacks() {
    return await this._client.fetch(`
    *[_type == 'stacks'] | order(_createdAt asc){
      title,
      'image': {
        'imagUrl': image.asset -> url
      },
      'contents': contents[0].children[0].text,
      tag
    }
    `)
  }
}