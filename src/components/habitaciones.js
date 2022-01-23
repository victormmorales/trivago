import React from "react"
import { graphql } from "gatsby"
import Image from 'gatsby-image'
import { css } from "@emotion/react"
import Layout from "../components/layout"

export const query = graphql`
  query ($slug: String!) {
    allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        contenido
        imagen {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const HabitacionTemplate = ({ data: {allDatoCmsHabitacion: { nodes } } }) => {
  
    const { titulo, contenido, imagen } = nodes[0];

  return (
      <Layout>
          <main
            css={css`
                margin: 0 auto;
                max-width: 1200px;
                width: 90%;
            `}
          >
            <h2
                css={css`
                    text-align: center;
                    margin-top: 3rem;
                `}
            >{titulo}</h2>
            <p>{contenido}</p>
            <Image
                fluid={imagen.fluid}
            />
          </main>
      </Layout>
  )
}

export default HabitacionTemplate
