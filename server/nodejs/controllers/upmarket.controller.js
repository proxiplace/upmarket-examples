const { default: axios } = require("axios");

function getAuthHeader(headers = {}) {
  return { ...headers, "x-upmarket-key": process.env.UPMARKET_API_KEY };
}

async function initializeLead(req, res, next) {
  try {
    const headers = getAuthHeader();
    const response = axios.post(
      `${process.env.UPMARKET_API_URL}/leads/initialize`,
      {},
      { headers }
    );
  } catch (error) {
    next(error);
  }
}

async function createEvent(req, res, next) {
  try {
    const headers = getAuthHeader();
    const response = axios.post(
      `${process.env.UPMARKET_API_URL}/events/create`,
      {},
      { headers }
    );
  } catch (error) {
    next(error);
  }
}

module.exports = {
  initializeLead,
  createEvent,
};
