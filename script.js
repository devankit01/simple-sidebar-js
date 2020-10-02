const nav__toggle = document.querySelector('.nav__toggle')
const links = document.querySelector('.links')


nav__toggle.addEventListener('click',() => {
    console.log('🖐️ : I am clicked');
    console.log(links.classList)

    if (links.classList.contains('show__links')){
        links.classList.remove('show__links');
        nav__toggle.innerHTML = '&#9776;';


        
    }
    else{
        links.classList.add('show__links');
        nav__toggle.innerHTML = '&#10060;'


    }
    
})

