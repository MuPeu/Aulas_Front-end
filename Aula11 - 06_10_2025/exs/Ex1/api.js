let nome = document.getElementById("nome")
let username = document.getElementById("username")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let street = document.getElementById("street")
let city = document.getElementById("city")
let zipcode = document.getElementById("zipcode")
let company = document.getElementById("company")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(
        nome.innerText = data[0].name,
        username.innerText = data[0].username,
        email.innerText = data[0].email,
        phone.innerText = data[0].phone,
        street.innerText = data[0].address.street,
        city.innerText = data[0].address.city,
        zipcode.innerText = data[0].address.zipcode,
        company.innerText = data[0].company.name,
    ))
    .catch((err) => console.log(err))