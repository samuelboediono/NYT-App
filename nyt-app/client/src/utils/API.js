import axios from "axios";




export default {
  // Gets all books
  getArticles: function(data) {
  	const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  	
  	const apiKey ="ea63fbb9a53b4d0db332bcd3ea891509";

  	axios.get(url, {
    params: {
      'q': data.query,
      'begin_date': `${data.startDate}0101`,
      'end_date': `${data.endDate}0101`,
      'api-key': apiKey,
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  },
};