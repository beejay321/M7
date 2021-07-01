export interface Song {
    id : string
    title : string
    artist ?: Artist
      album : Album
        
    }

export interface Album {
      id: number
      cover: string
      title: string
        
    }
export interface Artist {
      id: number
      name: string
        
    }