const {StatusCodes} = require('http-status-codes')

exports.home = (req, res) => {
    res.render('home')
}

exports.imageSearch = async (req, res) => {
    const {q} = req.query
    try {
        const axios = require("axios");

        const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
        params: {q, pageNumber: '1', pageSize: '50', autoCorrect: 'true', safeSearch : false},
        headers: {
            'X-RapidAPI-Key': 'd2e4650daemsh651ed5e57d732d6p1643c0jsn037cdcce223e',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
        };

        const response = await axios.request(options)

        const imageData = response.data.value.map((items) => (items))

        return res.status(StatusCodes.OK).render('image_search', {imageData})

        } catch (error) {
            console.log(error)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).render('image_search', {error})
     }
}

exports.newsSearch = async (req, res) => {
    try {
        console.log(`Hit news search`)
    } catch (error) {
        console.log(error)
    }
}

exports.webSearch = async (req, res) => {
    try {
       console.log('Web search hit')
    } catch (error) {
        console.log(error)
    }
}