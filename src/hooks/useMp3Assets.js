import { useStaticQuery, graphql } from "gatsby"

export const useMp3Assets = () => {
  const data = useStaticQuery(
    graphql`
      query mp3Assets {
        allFile(filter: { sourceInstanceName: { eq: "mp3" } }) {
          edges {
            node {
              name
              publicURL
            }
          }
        }
      }
    `
  )

  return data.allFile.edges.reduce((result, edge) => {
    result[edge.node.name] = edge.node.publicURL
    return result
  }, {})
}
