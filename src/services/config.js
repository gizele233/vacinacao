import axios from 'axios'

export default () =>{  return axios.create({
    baseURL: 'https://apps.tce.ma.gov.br/vacinacao/api/',
    
    headers: {
        Accept: "application/json",
          "Content-Type": 'application/json'
    }
});
}