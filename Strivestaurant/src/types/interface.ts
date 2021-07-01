export interface dish {
    id : number
    name : string
    image : string
    description: string
    comments : Comment []   
    }

export interface selecteddish {
    id : number
    name : string
    image : string
    description: string
    }


export interface reservation {
    _id : number
    name : string       
    }


export interface Comment {
    id : number
    rating : number   
    comment : string   
    author : string   
    date : string   
    
    }

