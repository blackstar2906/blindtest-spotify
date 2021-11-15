import swal from "sweetalert"
import logo from "./logo.svg"
import loading from "./loading.svg"
import styles from "./App.module.css"
import Button from "./Button"
import { shuffleArray, getRandomNumber } from "./utils"
import { useState, useEffect } from "react"

// Get token from https://developer.spotify.com/console/get-current-user-saved-tracks/
const apiToken =
  "BQB9YvYqrqOaIA6qVbDWWkSn94-fbywfBM-y1tT3S6w_hGcctND7N_g22NlibhZZfReR47FFwpWQMa02imTLlaB4gdmwLKiSnJDdmzeaSUskl5gqUdTaDOHxrq96Y9g8snJemkLVWqu-2YSFlZqZRagXamHmCd2mk_I6eGy_ZdPp "

const App = () => {
  const [text, setText] = useState("")
  const [tracks, setTracks] = useState([])
  const [songLoaded, setSongLoaded] = useState(false)

  useEffect(() => {
    fetch("https://api.spotify.com/v1/playlists/0MF1XGKzqqeL0ZHeqMrq7R/tracks", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + apiToken,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log("Réponse reçue ! Voilà ce que j'ai reçu : ", data)
        setText("Données récupérées : " + data.items.length.toString() + "\n" + data.items[0].track.name)
        setTracks(data.items)
        setSongLoaded(true)
      })
  }, [])

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        {songLoaded ? (
          <img src={logo} className={styles.appLogo} alt="logo" />
        ) : (
          <img src={loading} className={styles.appLogo} alt="loading" />
        )}
        <h1 className={styles.appTitle}>Bienvenue sur le Blindtest</h1>
        <button onClick={() => setText("Cliqué !")}>CLiquez moi !</button>
        <p>{text}</p>
      </header>
    </div>
  )
}

export default App
