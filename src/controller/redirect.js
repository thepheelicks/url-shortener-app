const urlModel = require('../models/url');

const redirect = async (request, response) => {
  try {
    const url = await urlModel.findOne({ urlCode: request.params.code });

    if (url) {
      return response.redirect(url.original);
    } else {
      return response.status(404).json('No URL found');
    }
  } catch (e) {
    console.error(e);
    response.status(500).json('Server Error');
  }
}

module.exports = redirect;
