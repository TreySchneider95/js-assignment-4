let fullName = prompt("Enter your full name")
let favoriteFood = prompt("Enter your favorite food")
let favoriteActivity = prompt("Enter your favorite activity")

let nameTag = document.createElement('h1')
nameTag.innerHTML = fullName
document.body.appendChild(nameTag)

let foodTag = document.createElement('h1')
foodTag.innerHTML = favoriteFood
document.body.appendChild(foodTag)

let activityTag = document.createElement('h1')
activityTag.innerHTML = favoriteActivity
document.body.appendChild(activityTag)