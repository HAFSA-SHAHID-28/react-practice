import React from 'react'

const Movies = ({searchText}) => {

    const movies = [
        {
            id: 1,
            title: "Intersteller",
            genre: "Sci Fic"
        },

        {
            id: 2,
            title: "Congo",
            genre: "Action"
        },

        {
            id: 3,
            title: "SpiderMan",
            genre: "Marvel"
        },

        {
            id: 4,
            title: "Avengers",
            genre: "Action"
        },

        {
            id: 5,
            title: "BatMan",
            genre: "Marvel"
        },

        {
            id: 6,
            title: "Inception",
            genre: "Sci Fic"
        },
        
    ];



    // let filtered = [];
    // filtered = movies?.filter(
    //     (movie) => movie?.title.toLowerCase().includes(searchText?.toLowerCase()) ||  movie?.genre.toLowerCase().includes(searchText?.toLowerCase())
    //     // (movie) => movie?.title.toLowerCase().startsWith(searchText?.toLowerCase()) ||  movie?.genre.toLowerCase().startsWith(searchText?.toLowerCase()) 

    // )

    const filtered = movies?.filter(
        (movie) => movie?.title.toLowerCase().includes(searchText?.toLowerCase()) ||  movie?.genre.toLowerCase().includes(searchText?.toLowerCase())
    )


  return (
    <>

    <h2>Movies</h2>

    {
        Array.isArray(filtered) && filtered.length > 0 ?
        filtered.map((m, i) => (
            <div key={m.id + i}>
                <h3>{m.title}</h3>
                <h6>{m.genre}</h6>
            </div>
        ))
        : (
            <h2>No Match Found!</h2>
        )
    }
    
    </>
  )
}

export default Movies