
const express = require('express')
const router = express.Router()

const {home, imageSearch, newsSearch, webSearch} = require('../controllers/search')

router.route('/home').get(home)
router.route('/image_search').get(imageSearch)

router.route('/news_search').get(newsSearch)
router.route('/web_search').get(webSearch)

module.exports = router