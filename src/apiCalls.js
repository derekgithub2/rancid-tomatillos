const url = 'https://rancid-tomatillos.herokuapp.com/api/v2'

const getAllMovies = () => {
    return fetch(`${url}/movies`)
    .then(res => {
        if(!res.ok) {
            throw new Error('Something went wrong')
        }
        return res.json()
    })
}

const getSingleMovie = (id) => {
    return fetch(`${url}/movies/${id}`)
    .then(res => {
        if(!res.ok) {
            throw new Error('Something went wrong')
        }
        return res.json()
    })
}

export { getAllMovies, getSingleMovie }