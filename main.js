let openBtn = document.querySelector(".open")
let closeBtn = document.querySelector(".close")
let modal = document.querySelector(".modal-main")
let modalSec = document.querySelector('.modal-sec')


openBtn.addEventListener("click",function(){
    modal.style.display = "block"
    modalSec.style.display = "block"

})
closeBtn.addEventListener("click",function(){
    modal.style.display = "none"
    modalSec.style.display = "none"
})


let name = document.querySelector('#Name')
let number = document.querySelector('#Number')
let email = document.querySelector('#email')
let opt1 = document.querySelector('#opt1')
let opt2 = document.querySelector('#opt2')
let opt3 = document.querySelector('#opt3')
let opt4 = document.querySelector('#opt4')
let category = document.querySelector('#Category')
let submit = document.querySelector('.submit')


let passTitle = document.querySelector(".pass-title")
let nameCon = document.querySelector(".name-con")
let numberCon = document.querySelector(".number-con")
let emailCon = document.querySelector(".email-con")
let price = document.querySelector(".price")

let ticket = document.querySelector('.ticket')


submit.addEventListener("click",function(){


    ticket.style.display = "block"
    passTitle.textContent = category.value

    nameCon.textContent = name.value
    numberCon.textContent = number.value
    emailCon.textContent = email.value

    if(category.value == opt1.textContent){
        price.textContent = "$100"
    }else if(category.value == opt2.textContent){
        price.textContent = "$200"
    }else if(category.value == opt3.textContent){
        price.textContent = "$300"
    }else if(category.value == opt4.textContent){
        price.textContent = "$2000"
    }
})


modal.addEventListener("click",function(){
    modal.style.display = "none"
    modalSec.style.display = "none"
})
