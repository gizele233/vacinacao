import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://www6.tce.ma.gov.br/questionarios-vacinacao/v2/',
    headers: {
          "Content-Type": 'application/json'
    }
});