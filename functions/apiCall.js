const axios = require("axios");
console.log(axios.isCancel("something"));

exports.handler = async function (event, context) {
  let requestBody = JSON.parse(event.body);
  let val = requestBody.inputVal;
  const k = process.env.REACT_APP_API_KEY;
  let url = `https://www.omdbapi.com/?t=${val}&apikey=${k}`;

  let info = await axios(url).then(function (result) {
    return result.data;
  });

  return { statusCode: 200, body: JSON.stringify(info) };
};
