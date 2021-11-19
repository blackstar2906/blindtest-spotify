import React from "react"
import styles from "../App.module.css"
import loading from "../images/loading.svg"
import { useEffect } from "react"

// Get token from https://developer.spotify.com/console/get-current-user-saved-tracks/
const API_TOKEN =
  "BQCBq2c-rsfgc_mfMjftjXkFbKCpmcf_FdMOa1ovLve4JxJ0qSMsks9CMnjtZ0Zasxn-3XGbX_rwLhYijemTCIir7SuIXElD6TvtseNxFwmONZMJXuSPi7i9l_D0cri1xb9KPJgKxU94uZr20GEQErUtqRCQi9ONrAQz0K8WRyu0"

const LoadingPage = props => {
  useEffect(() => {
    fetch("https://api.spotify.com/v1/playlists/0MF1XGKzqqeL0ZHeqMrq7R/tracks", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + API_TOKEN,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log("Réponse reçue ! Voilà ce que j'ai reçu : ", data)
        props.setTracks(data.items.filter(track => track.track.preview_url !== null))
        props.setSongLoaded(true)
      })
  }, [])

  return <>
    <img src={loading} className={styles.appLogo} alt="loading" />
    <h1 className={styles.appTitle}>Bienvenue sur le Blindtest</h1>
    <h2 className={styles.appTitle}>Loading data</h2>
  </>
}

export default LoadingPage