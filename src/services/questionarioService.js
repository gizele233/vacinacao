import { http } from './config.js'

export default class QuestionarioService{
    questionAll(){
        return http.get(`questionarios/`).then(result => result.data);
    }
}