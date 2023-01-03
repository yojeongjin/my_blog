import  SanityClient  from '@sanity/client'

export default class SanityService {
  _client = SanityClient({
    dataset: "production",
    projectId: "te7gy4v3",
    useCdn: process.env.NODE_ENV === "production"
  })

  async getProject() {
    return await this._client.fetch(`
    *[_type == 'project']{
      'image': image.asset -> url,
      'slug': slug.current,
      title,
      desc1,
      desc2,
      period,
      link1,
      link2,
      'contents': contents[],
      'impression': impression[],
      'front': frontTag[] -> image.asset -> url,
      'back': backTag[] -> image.asset -> url,
      'db': dbTag[] -> image.asset -> url,
      'hosting': hostingTag[] -> image.asset -> url,
      'thumbnail': thumbnail[] -> image.asset -> url,
      'des': des[] -> {
        'subtitle': subtitle,
        'briefDes1': des,
        'briefDes2': des2,
        'briefDes3': des3
      }
      }
    `)
  }

  async getPosts() {
    return await this._client.fetch(`
    *[_type == 'post'] | order(_createdAt asc){
      title,
      period,
      desc1,
      desc2,
      desc3,
      'slug': slug.current,
      'contents': contents[0].children[0].text,
      'thumbnail': thumbnail.asset -> url,
      'front': frontTag[] -> image.asset -> url
      ,
      'back':backTag[] -> image.asset -> url  
      }
    `)
  }
  

  async getStacks() {
    return await this._client.fetch(`
    *[_type == 'stacks'] | order(_createdAt asc){
      title,
      'image': image.asset -> url,
      'contents': contents[0].children[0].text,
      tag
    }
    `)
  }
}
