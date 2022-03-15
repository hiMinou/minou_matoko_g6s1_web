/*____afficher le menu____*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav =  document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle','nav-menu')

/*____changer l'onglet active____*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  //Active link
  navLink.forEach( n => n.classList.remove('active'))
  this.classList.add('active')

  //Faire disparaitre me menu
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//le validateur de email

email = $('mail');
filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if (filter.test(email.value)) {

  return true;
}
else
  {return false;}
