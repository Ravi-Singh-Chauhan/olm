const login_btn = document.querySelector(".Loginbtn");
const login_page = document.querySelector(".loginpage");
const phone_number = document.querySelector(".phonenumber")
const homepage = document.querySelector(".HomePage")
const mainpage = document.querySelector(".main");

mainpage.style.left = mainpage.style.left === '-100%' ? '0' : '  -100%';
login_btn.addEventListener("click", () => {
    mainpage.style.left = mainpage.style.left === '-100%' ? '0' : '-100%';
})
phone_number.addEventListener("input", () => {
    if (!isNaN(phone_number.value)) {
        if (phone_number.value.length >= 10) {
            login_btn.style.backgroundColor = "#FCAF3C";
        }
        else {
            login_btn.style.backgroundColor = "#dcdcdc";
        }
    }
})

let navItem = document.querySelectorAll(".navItems");
navItem.forEach((element) => {
    element.addEventListener("click", () => {
        let last_Active = document.querySelector(".active");
        last_Active.classList.remove("active")
        let elementsWithFirstClass = document.querySelectorAll("." + last_Active.classList[0]);
        if (elementsWithFirstClass.length > 0) {
            elementsWithFirstClass[0].style.display = "none";
        }
        let new_active = document.querySelector("."+element.innerHTML);
        console.log(element.innerHTML);
        new_active.style.display="flex";
        new_active.classList.add("active")
    })

})