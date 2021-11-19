import React from "react"

const AlbumCover = props => {
  const src = props.track.album.images[0].url
  return <img src={src} style={{ width: 200, height: 200 }} alt="cover" />
}

export default AlbumCover
