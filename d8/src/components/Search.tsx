import { Component } from "react";
import SearchResults from "./SearchResults"
import { useState, useEffect } from 'react'
import { Song } from '../types/interface'






function Search() {
    const [query, setQuery] = useState('')
    const [songs, setSongs] = useState<Song[]>([])
  
    useEffect(() => {
      const getSongs = async () => {
        try {
          let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem`)
          console.log(response)
          let result = await response.json()
          setSongs(result.data)
        } catch (error) {
          console.log('error')
        }
      }
      getSongs()
    }, [])
  
    return (
      <div className="App">
        <header className="App-header">
          {console.log(songs)}
          <SearchResults title="HELLO"  songs={songs}  />
       
        </header>
      </div>
    )
  }
  
  export default Search
  