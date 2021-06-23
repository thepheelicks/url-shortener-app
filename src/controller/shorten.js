const shortId = require('shortid');
const validator = require('validator');

const config = require('../config/default');
const urlModel = require('../models/url');


// function to shorten URL
const shorten = async (request, response) => {
  const { url } = request.body;
  const baseUrl = config.baseUrl;

  if (!validator.isURL(url)) {
    return response.status(401).json('Invalid URL');
  }

  // Check if the URL is already in DB
  try {
    let urlRecord = await urlModel.findOne({ original: url });
    
    if (urlRecord) {
      response.json(urlRecord); // return record not the url
    } else {
      const urlCode = shortId.generate();
      const shortUrl = `${baseUrl}/${urlCode}`;
      
      urlRecord = new urlModel({
        original: url,
        short: shortUrl,
        urlCode,
        date: new Date()
      });
      await urlRecord.save();

      response.json(urlRecord);
    }
  } catch (e) {
    console.error(e);
    response.status(500).json('Server Error');
  }
}

const revert = async (request, response) => {
  const { url } = request.body;

  if (!validator.isURL(url, { require_tld: false })) {
    return response.status(401).json('Invalid URL');
  }

  try {
    const urlRecord = await urlModel.findOne({ short: url });

    if (urlRecord) {
      response.status(200).json(urlRecord); // return record not the url
    } else {
      response.status(404).json('Unable to find the URL. Try another one');
    }
  } catch (e) {
    console.error(e);
    response.status(500).json('Server Error');
  }
};

module.exports = { shorten, revert };