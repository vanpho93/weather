import axios from 'axios';

var url = `http://api.openweathermap.org/data/2.5/weather?appid=26e267fd47b68a097c68806f22db9866&units=metric&q=`

module.exports = (city) => {
  return axios.get(url + city);
};
