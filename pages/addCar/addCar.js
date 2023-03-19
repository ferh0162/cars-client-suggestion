
import { API_URL,FETCH_NO_API_ERROR } from "../../settings.js"
import {handleHttpErrors} from "../../utils.js"
//Add id to this URL to get a single user
const URL = `${API_URL}/cars`

export async function initAddCar(match) {
  document.getElementById("btn-submit-car").onclick = makeCar
}

async function makeCar(){
    const brand = document.getElementById("brand").value
    const model = document.getElementById("model").value
    const pricePrDay = document.getElementById("price-pr-day").value
    const bestDiscount = document.getElementById("best-discount").value

    const body = {brand, model, pricePrDay, bestDiscount}

    const options = {
    "method" : "POST",
    "headers": {"Content-type": "application/json",
    "Authorization" : "Bearer " + localStorage.getItem("token")
    },
    "body" : JSON.stringify(body)
    }
try {
    const newCar = await fetch(URL, options).then(res=>handleHttpErrors(res))
    document.getElementById("status").innerText = JSON.stringify(newCar)
} catch (err) {
    alert(err.message)
}
}

