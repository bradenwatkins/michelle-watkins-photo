import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../components/layout'

export const query = graphql`
  query AlbumTemplateQuery($id: String!) {
    album: sanityAlbum(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
    }
  }
`

const AlbumTemplate = props => {
  const {data, errors} = props
  const album = data && data.album
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {album && <SEO title={album.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
    </Layout>
  )
}

export default AlbumTemplate
