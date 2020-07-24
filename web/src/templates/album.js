import React, { useState, useCallback } from "react";
import { graphql } from "gatsby";
import Gallery from "react-photo-gallery";
import Lightbox from "react-image-lightbox";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../components/layout";
import "react-image-lightbox/style.css";

export const query = graphql`
  query AlbumTemplateQuery($id: String!) {
    album: sanityAlbum(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      images {
        alt
        asset {
          url
          originalFilename
          fixed {
            width
            height
            src
          }
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      title
      slug {
        current
      }
    }
  }
`;

const AlbumTemplate = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const { data, errors } = props;
  const album = data && data.album;
  const photos = album.images.map(image => ({
    ...image,
    ...image.asset.fixed,
  }));
  const numPhotos = photos.length;

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Layout>
        {errors && <SEO title="GraphQL Error" />}
        {album && <SEO title={album.title || "Untitled"} />}
        <h2>{album.title}</h2>
        {photos && <Gallery photos={photos} onClick={openLightbox} />}
        {viewerIsOpen && (
          <Lightbox
            mainSrc={photos[currentImage].asset.url}
            nextSrc={photos[(currentImage + 1) % numPhotos].asset.url}
            prevSrc={photos[(currentImage + numPhotos - 1) % numPhotos].asset.url}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={() => setCurrentImage((currentImage + numPhotos - 1) % numPhotos)}
            onMoveNextRequest={() => setCurrentImage((currentImage + 1) % numPhotos)}
          />
        )}

        {errors && (
          <Container>
            <GraphQLErrorList errors={errors} />
          </Container>
        )}
      </Layout>
    </>
  );
};

export default AlbumTemplate;
