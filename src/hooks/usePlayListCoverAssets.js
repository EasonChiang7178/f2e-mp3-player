import { useStaticQuery, graphql } from "gatsby"

export const usePlayListCoverAssets = () => {
  const data = useStaticQuery(
    graphql`
      query playListCovers {
        allFile(filter: { relativeDirectory: { eq: "playlist_cover" } }) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 425) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )

  return data.allFile.edges.reduce((result, edge) =>{
    result[edge.node.name] = edge.node.childImageSharp.fluid
    return result
  }, {})
}
