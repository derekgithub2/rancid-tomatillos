const url = 'https://rancid-tomatillos.herokuapp.com/api/v2'

const getAllData = (data) => {
    return fetch(`${url}${data}`)
    .then(res => {
        if(!res.ok) {
            throw new Error('Something went wrong')
        }
        return res.json()
    })
}

export { getAllData }