const toogleBtn = document.querySelector( ".toogle-btn" );
const toogle = document.querySelector( ".toogle-menu" );
const toogleMenu = document.querySelector( ".toogle-menu ul.toogle-menu" );
const lightBtn = document.querySelector( ".dark" )
const lightbtn = document.querySelector( ".dark-mode" )
const BtnClose = document.querySelector( "button.close" )
console.log( BtnClose );
toogleBtn.addEventListener( "click", () => {
  toogleMenu.classList.toggle( "menu-left" )
  toogle.classList.toggle( "menu-left" )
} )

lightBtn.addEventListener( "click", () => {
  document.body.classList.toggle( "light-mode" );
} )

lightbtn.addEventListener( "click", () => {
  document.body.classList.toggle( "light-mode" );
} )


BtnClose.addEventListener( "click", () => {
  toogleMenu.classList.toggle( "menu-left" )
  toogle.classList.toggle( "menu-left" )
} )