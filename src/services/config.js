import axios from 'axios'

export default () =>{  return axios.create({
    baseURL: 'https://www6.tce.ma.gov.br/questionarios-vacinacao/v2/',
    
    headers: {
        Accept: "application/json",
          "Content-Type": 'application/json'
    }
});
}