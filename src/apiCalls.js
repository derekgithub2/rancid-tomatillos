const url = 'https://rancid-tomatillos.herokuapp.com/api/v2'

const getAllMovies = () => {
    return fetch(`${url}/movies`)
    .then(res => res.json())
}

export { getAllMovies }