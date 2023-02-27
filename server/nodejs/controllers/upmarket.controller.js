const { default: axios } = require("axios");

function getAuthHeader(headers = {}) {
  return { ...headers, "x-upmarket-key": process.env.UPMARKET_API_KEY };
}

async function initializeLead(req, res, next) {
  try {
    const properties = req.body;
    const headers = getAuthHeader();

    const response = await axios.post(
      `${process.env.UPMARKET_API_URL}/leads/initialize`,
      properties,
      { headers }
    );

    res.send(response.data);
  } catch (error) {
    next(error);
  }
}

async function createEvent(req, res, next) {
  try {
    const headers = getAuthHeader();
    const properties = req.body;

    await axios.post(
      `${process.env.UPMARKET_API_URL}/events/create`,
      properties,
      { headers }
    );

    res.send("Success");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  initializeLead,
  createEvent,
};
