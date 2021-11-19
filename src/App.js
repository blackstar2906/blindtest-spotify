import swal from "sweetalert"
import styles from "./App.module.css"
import MainPage from "./components/MainPage"
import LoadingPage from "./components/LoadingPage"
import { shuffleArray, getRandomNumber } from "./utils"
import { useState, useEffect } from "react"

const App = () => {
  const [tracks, setTracks] = useState([])
  const [songLoaded, setSongLoaded] = useState(false)

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        {songLoaded ? <MainPage tracks={tracks}></MainPage>
          : <LoadingPage setTracks={setTracks} setSongLoaded={setSongLoaded}></LoadingPage>}
      </header>
    </div>
  )
}

export default App
