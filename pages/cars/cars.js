import { API_URL } from "../../settings.js"
import { handleHttpErrors, sanitizeStringWithTableRows } from "../../utils.js"
const URL = API_URL + "/cars"

export async function initCars() {
    getAllCars()
}

async function getAllCars(){
    try {

        const options = {
            method: "GET",
            Headers: {"Authorization": "Bearer " + localStorage.getItem("token")}
        }
        
        const cars = await fetch(URL,options).then(res=>handleHttpErrors(res))
        
        const tableRows = cars.map(car => `
        <tr>
        <td>${car.id}</td>
        <td>${car.brand}</td>
        <td>${car.model}</td>
        <td>${car.pricePrDay}</td>
        <td>${car.bestDiscount}</td>
        </tr>
        `).join("")

        document.getElementById("table-rows").innerHTML =
        sanitizeStringWithTableRows(tableRows)

    } catch (ex) {
        document.getElementById("error").innerText = ex.message

    }
}

