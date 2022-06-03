import { gql } from "@apollo/client";

export const GET_ANILIST = gql`
query Page($page: Int, $perPage: Int, $search: String) {
  Page(page: $page, perPage:$perPage) {
    media (search: $search) {
      id
      type
      title {
        romaji
      }
      coverImage {
        extraLarge
        large
        medium
      }
      bannerImage
      description
      seasonYear
      episodes
      duration
      genres
      averageScore
    }
  }
}
`;


export const GET_ANILIST_DETAIL = gql`
query Media ($id: Int) {
  Media(id: $id) {
    id
    type
    title {
      romaji
      english
      native
      userPreferred
    }
    coverImage {
      extraLarge
      large
      medium
      color
    }
    bannerImage
    description
    seasonYear
    episodes
    duration
    genres
    averageScore
  }
}
`