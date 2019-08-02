import { useStaticQuery, graphql } from "gatsby"

export const usePlayListsData = () => {
  const data = useStaticQuery(
    graphql`
      query playLists {
        allListsJson {
          edges {
            node {
              items {
                fileName
                author
                duration
                name
              }
              name
              description
              cover
              category
            }
          }
        }
      }
    `
  )

  return data.allListsJson.edges.map(edge => edge.node)
}
