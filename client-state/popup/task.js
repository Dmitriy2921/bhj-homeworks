let add = document.querySelector('.modal')
let a = document.querySelector('.modal__close')
if(document.cookie.indexOf('remove=true')===-1){
    add.classList.add('modal_active')
    a.addEventListener('click',()=>{
        add.classList.remove('modal_active')
        document.cookie = "remove=true"
    })
}