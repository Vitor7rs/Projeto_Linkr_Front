// comunicações com o banco de dados / requisições
import axios from "axios"

const URL = 'https://back-projeto-linkr.herokuapp.com'

export function signUp(userObject) {
    const promisse = axios.post(`${URL}/sign-up`, userObject)
    return promisse;
}

export function login(loginObject) {
    const promisse = axios.post(`${URL}/`, loginObject)
    return promisse
}