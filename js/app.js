let openToggle = document.querySelectorAll(".openToggle");
let cardItems = document.querySelectorAll(".create-plan-card-items");
let modal  = document.querySelector('.modal')
openToggle.forEach((element , index) =>{
      element.addEventListener('click' , function(){
         cardItems[index].classList.toggle("open")
      })
})

window.addEventListener('click' , function(){
   modal.style.display = "none"
})