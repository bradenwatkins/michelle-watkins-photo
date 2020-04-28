import React from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const AlbumCover = ({album}) => {
  const {title, slug} = album
  const {fluid} = album.mainImage.asset
  return (
    <Link to={`album/${slug.current}`} className='flex flex-col duration-150 hover:opacity-75'>
      <Img alt={title} fluid={fluid} />
      <h3 className='text-center mt-6'>{title}</h3>
    </Link>
  )
}

AlbumCover.propTypes = {
  album: PropTypes.object
}

export default AlbumCover
