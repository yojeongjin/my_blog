import  SanityClient  from '@sanity/client'

export default class SanityService {
  _client = SanityClient({
    dataset: "production",
    projectId: "te7gy4v3",
    useCdn: process.env.NODE_ENV === "production"
  })

  async getPosts() {
    return await this._client.fetch(`
    *[_type == 'post']{
      title,
      period,
      desc1,
      desc2,
      desc3,
      'thumbnail': {
      'imgUrl': thumbnail.asset -> url
      },
      'front': frontTag[] -> {
        'icon': {
          'url':image.asset -> url
          }
      },
      'back':backTag[] -> {
        'icon': {
          'url':image.asset -> url
          }      
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
