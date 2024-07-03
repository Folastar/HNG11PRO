const time =document.querySelector('.time')



time.innerHTML=new Date()

const menuContainer =document.querySelector('.menu__container')
const navSub= document.querySelector('.nav-sub')

menuContainer.addEventListener('click', ()=>{
    menuContainer.classList.toggle('change')
    navSub.classList.toggle('nav-change')
})