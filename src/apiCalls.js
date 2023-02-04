const url = 'https://rancid-tomatillos.herokuapp.com/api/v2'

const getAllMovies = () => {
    return fetch(`${url}/movies`)
    .then(res => res.json())
}

// function to get single movie 
// need to pass in id

const getSingleMovie = (id) => {
    return fetch(`${url}/movies/${id}`)
    .then(res => res.json())
}

export { getAllMovies, getSingleMovie }