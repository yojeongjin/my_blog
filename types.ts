export type ProjectDetailType = {
  image: string
  slug: string
  title: string
  desc1: string
  desc2: string
  period: string
  link1: string
  link2: string
  stack: string
  contents: string[]
  impression: string[]
  front: string[]
  back: string[]
  db: string[]
  hosting: string[]
  thumbnail: string[]
  des: [],
  thumbnailAdd: string[],
  desAdd: string[],
  contentsAdd: string[]
}

export type ArcadeType = {
  title: string
  slug: string
  period: string
  desc1: string
  desc2: string
  desc3: string
  thumbnail: string
  front: string[]
}

export type PostType = {
  title: string
  slug: string
  period: string
  desc: string
  desc1: string
  desc2: string
  desc3: string
  thumbnail: string
  contents: string
  front: string[]
  back: string[]
}

export type StackType = {
  title: string
  tag: string
  image: string
  contents: string
  des1: string
  des2: string
}
