import "./App.css"
import { React, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import axios from "axios"

function App() {
  const [shortenedLink, setShortenedLink] = useState("Your Shortend link will appear here")
  const [userInput, setUserInput] = useState("")
  const [apiLoader, setApiLoader] = useState(false)

  const fetchData = async () => {
    try {
      setApiLoader(true)
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      )
      setShortenedLink(response.data.result.full_short_link)
      setApiLoader(false)
    } catch (e) {
      setApiLoader(e)
    }
  }
  return (
    <div className="App">
      <div className="url-shortener-wrapper">
        <h1>
          <span>URL Shortener</span>
        </h1>
        <div className="content-wrapper">
          <TextField
            id="outlined-basic"
            label="Enter the URL"
            variant="outlined"
            type="text"
            placeholder="Enter link to be shortened"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value)
            }}
          />
          <Button
            onClick={() => {
              fetchData()
            }}
            variant="contained"
          >
            Submit URL
          </Button>
          <div className="displayResponse">
            {apiLoader ? "Loading...." : shortenedLink}
            <CopyToClipboard text={shortenedLink}>
              <Button variant="contained">Copy URL to Clipboard</Button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
