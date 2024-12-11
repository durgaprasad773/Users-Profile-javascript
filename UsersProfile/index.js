let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let profileContainerEl = document.getElementById('profileContainer')
let imageContainerEl = document.getElementById("imgContainer");

profileContainerEl.classList.add("text-center", "d-flex", "flex-column", "justify-content-center")


let imageEl = document.createElement("img")
imageEl.setAttribute("src", profileDetails.imgSrc)
imageContainerEl.appendChild(imageEl);

let headingEl = document.createElement("h1")
headingEl.textContent = profileDetails.name
headingEl.classList.add("heading")
profileContainerEl.appendChild(headingEl)

let ageEl = document.createElement("p");
ageEl.textContent = "Age : " + profileDetails.age;
ageEl.classList.add("age")
profileContainerEl.appendChild(ageEl)