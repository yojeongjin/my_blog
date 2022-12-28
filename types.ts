export type PostType = {
  title: string,
  slug: string,
  thumbnail: {
    alt: string,
    imgUrl: string
  },
  contents: [],
  tag: {
    title: string
  }
}

export type StackType = {
  title: string,
  tag: string,
  image: {
    imagUrl: string
  },
  contents: string
}