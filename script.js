const login_btn = document.querySelector(".Loginbtn");
const login_page = document.querySelector(".loginpage");
const phone_number = document.querySelector(".phonenumber")
const homepage = document.querySelector(".HomePage")
const mainpage = document.querySelector(".main");
// mainpage.style.left = mainpage.style.left === '-100%' ? '0' : '  -100%';
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
