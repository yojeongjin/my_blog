export type PostType = {
  title: string,
  period: string,
  desc1: string,
  desc2: string,
  desc3: string,
  thumbnail: {
    imgUrl: string
  },
  contents: string,
  front:[],
  back: []
}

export type StackType = {
  title: string,
  tag: string,
  image: {
    imagUrl: string
  },
  contents: string
}

export type IconType = {
  front: []
  icon: {
    url: string
  }
}

export interface Icon {
  front: []
}