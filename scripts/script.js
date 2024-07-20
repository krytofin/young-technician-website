// Header items
const head_product = document.querySelector(`#head_product`)
const head_review = document.querySelector(`#head_review`)
const head_help = document.querySelector(`#head_help`)
const head_contact = document.querySelector(`#head_contact`)
const head_button = document.querySelector(`#header_button`)

// main elements
const products = document.querySelector(`#products`)
const client_review = document.querySelector(`#client_review`)
const form = document.querySelector(`#form`)
const contacts = document.querySelector(`#contacts`)

// footer items
const footer_about = document.querySelector(`#footer_about`)
const footer_new = document.querySelector(`#footer_new`)
const footer_help = document.querySelector(`#footer_help`)
const footer_contacts = document.querySelector(`#footer_contacts`)




head_product.addEventListener(`click`, ()=> {
    products.scrollIntoView({behavior:"smooth"})
})

head_review.addEventListener(`click`, ()=> {
    client_review.scrollIntoView({behavior:"smooth"})
})

head_help.addEventListener(`click`, ()=> {
    form.scrollIntoView({behavior:"smooth"})
})

head_contact.addEventListener(`click`, ()=> {
    contacts.scrollIntoView({behavior:"smooth"})
})


head_button.addEventListener(`click`, ()=>{
    products.scrollIntoView({behavior:"smooth"})
})



footer_about.addEventListener(`click`, ()=> {
    products.scrollIntoView({behavior:"smooth"})
})

footer_new.addEventListener(`click`, ()=> {
    client_review.scrollIntoView({behavior:"smooth"})
})

footer_help.addEventListener(`click`, ()=> {
    form.scrollIntoView({behavior:"smooth"})
})

footer_contacts.addEventListener(`click`, ()=> {
    contacts.scrollIntoView({behavior:"smooth"})
})


// Карусель
let clients = [
    {
        name:"Александра Лаптева",
        job:"Секретарь",
        comment:"Я просто в восторге от своего нового телефона XY-300! Этот аппарат сочетает в себе стиль, функциональность и высокотехнологичные возможности, что делает его идеальным спутником. Дизайн телефона просто завораживает: тонкий и легкий корпус, изогнутый экран и стильная цветовая гамма – все это создает великолепный внешний вид. Аккумулятор держит заряд на протяжении всего дня, что особенно важно для активной девушки, всегда в движении.",
        logo:"assets/images/review_logo.jpg"
    },
    {
        name:"Антон Никитин",
        job:"Директор ООО 'Хрен знает что'",
        comment:"Ну типо прикольно. Купил ноут ребенку, все игры тянет. За такую сумму вполне нормально. И скидка тоже крутая. Рассрочку неплохую предлагают. Советую всем. ⭐⭐⭐⭐⭐",
        logo:"assets/images/logo_2.png"
    }
]


let user_name = document.querySelector(`#reviewer_name`)
let client_job = document.querySelector(`#client_job`)
let client_comment = document.querySelector(`#client_comment`)
let logo = document.querySelector(`#client_logo`)

let button_minus = document.querySelector(`#button_back`)
let button_plus = document.querySelector(`#button_forward`)

let identificator_1 = document.querySelector(`#identificator_1`)
let identificator_2 = document.querySelector(`#identificator_2`)
let button_now = 0

let index = 0
button_plus.addEventListener(`click`, ()=>{
    index++
    if (index > clients.length-1){
        index = 0
    }
    user_name.innerHTML = clients[index].name
    client_job.innerHTML = clients[index].job
    client_comment.innerHTML = clients[index].comment
    logo.src = clients[index].logo
    if (button_now == 0){
        identificator_1.style.backgroundColor = `#DBDBDB`
        identificator_2.style.backgroundColor = `#9EB4FF`
        button_now++
    }
    else {
        identificator_1.style.backgroundColor = `#9EB4FF`
        identificator_2.style.backgroundColor = `#DBDBDB`
        button_now = 0
    }
})

button_minus.addEventListener(`click`, ()=>{
    index--
    if (index < 0){
        index = clients.length-1
    }
    user_name.innerHTML = clients[index].name
    client_job.innerHTML = clients[index].job
    client_comment.innerHTML = clients[index].comment
    logo.src = clients[index].logo

    if (button_now == 0){
        identificator_1.style.backgroundColor = `#DBDBDB`
        identificator_2.style.backgroundColor = `#9EB4FF`
        button_now++
    }
    else {
        identificator_1.style.backgroundColor = `#9EB4FF`
        identificator_2.style.backgroundColor = `#DBDBDB`
        button_now = 0
    }
})