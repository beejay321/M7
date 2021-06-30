export interface Song {
    title : string
    artist ?: Artist
      album? : Album
        
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