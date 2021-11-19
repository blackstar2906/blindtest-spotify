import React from "react"
import styles from "../App.module.css"
import AlbumCover from "./AlbumCover"
import Button from "./Button"
import logo from "../images/logo.svg"
import { useState } from "react"

const MainPage = props => {
  const [tracks] = useState(props.tracks)
  return <>
    <img src={logo} className={styles.appLogo} alt="logo" />
    <div className={styles.audioContainer}>
      <audio controls autoPlay src={tracks[0].track.preview_url}></audio>
    </div>
    <div className={styles.coverContainer}>
      <AlbumCover track={tracks[0].track}></AlbumCover>
      <Button>Contenu du bouton</Button>
    </div>
  </>
}

export default MainPage