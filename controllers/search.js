const {StatusCodes} = require('http-status-codes')
const apiKey = process.env.API_KEY

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
            'X-RapidAPI-Key': apiKey,
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
      const {q} = req.query
      const axios = require("axios")
      const options = {
        method : 'GET',
        url :  'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
        params : {
            q,
            pageNumber : '1',
            pageSize : '10',
            autoCorrect : 'true',
            fromPublishedDate : 'null',
            toPublishedDate : 'null'
        },
        headers : {
            'X-RapidAPI-Key' : apiKey,
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
      };
      const response = await axios.request(options)
      console.log(response.data)
      return res.status(StatusCodes.OK).json({response : response.data})
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
}

exports.webSearch = async (req, res) => {
    try {
        const {q} = req.query
        const axios = require("axios");

        const options = {
          method: 'GET',
          url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
          params: {q, pageNumber: '1', pageSize: '10', autoCorrect: 'true'},
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
          }
        };
        
            const response = await axios.request(options)
            console.log(response.data);
            return res.status(StatusCodes.OK).json({response : response.data})
    } catch (error) {
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
}