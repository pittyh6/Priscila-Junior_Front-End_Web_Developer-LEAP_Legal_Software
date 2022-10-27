let hamburger_icon = document.querySelector('.hamburger-icon')
let header_menu = document.querySelector('.header-menu')
let btns_login = document.querySelector('.btns-login')

hamburger_icon.addEventListener('click',function(){
    if(header_menu.classList.contains('hide') && btns_login.classList.contains('hide')){
        header_menu.classList.remove('hide');
        btns_login.classList.remove('hide');
    }else{
        header_menu.classList.add('hide');
        btns_login.classList.add('hide');
    }
})