const fetch = require("node-fetch");
module.exports = locationReport = async (location) => {
 return fetch(
    `http://api.weatherstack.com/current?access_key=a55fe211358961045e7643e38ac177cd&query=${location}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
};
