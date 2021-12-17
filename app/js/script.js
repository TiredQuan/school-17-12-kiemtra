let nav = document.getElementsByClassName('nav')
const show=()=>{
    if(nav[0].classList.contains('show')){
        nav[0].classList.remove('show')
    }   else{
        nav[0].classList.add('show')
    }
}