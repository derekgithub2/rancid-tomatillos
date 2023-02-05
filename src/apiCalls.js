const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'

const getAllMovies = () => {
    return fetch(`${url}`)
    .then(res => {
        if(!res.ok) {
            throw new Error('Something went wrong')
        }
        return res.json()
    })
}

const getSingleMovie = (id) => {
    return fetch(`${url}/${id}`)
    .then(res => {
        if(!res.ok) {
            throw new Error('Something went wrong')
        }
        return res.json()
    })
}

export { getAllMovies, getSingleMovie }