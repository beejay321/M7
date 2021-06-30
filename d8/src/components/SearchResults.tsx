import { useState } from 'react'
import { Song, Album, Artist } from '../types/interface'

interface SearchResultProps {
  title: string
  songs: Song[]
//   album :Album
}

const SearchResult = ({ title, songs  }: SearchResultProps) => {
  

  return (
    <>
       <h1>{title}</h1>      
      {songs.map((albumm) => (
                      <div className="col text-center">
                         onClick={() => this.props.history.push("/albumpage/" + albumm.album.id)} 
                        />

                        <p>
                          {/* <Link onClick={() => this.props.history.push("/albumpage/" + albumm.album.id)}> */}
                              {albumm.title}
                              {/* </Link> */}
                           
                          {/* 
                        </p>
                      </div>
                    ))}
    </>
  )
}

export default SearchResult
