$(document).ready(function() {
  console.log('ready')
  document.title = "Shopify";
  if (localStorage.getItem("shopify-login") == "true") {
    if (localStorage.getItem('shopify-dp') != null) {
      let dp = localStorage.getItem("shopify-dp");
      document.querySelector(".dp").innerHTML = `
        <img src="` + dp + `">`

    }

    let userName = localStorage.getItem("shopify-name")
    if (userName != null) {
      document.querySelector("#name_label").innerText = userName
    }

    $(".login").hide(100);
    $('.login').html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
      <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
    </svg> Logout`);
  }


  
document.querySelector('#nav_cart').innerHTML+=`
        <style>
        #nav_cart{
          position:relative;
        }
        #nav_cart::after{
          content: '!';
          width:15px;
          height:15px;
          display:flex;
          align-items:center;
          justify-content: center;
          position : absolute;
          top:-6px;
          right:-6px;
          box-shadow: 0 0 5px black;
          padding: 3px;
          border-radius: 100px;
          background:red;
          color:white;
          font-size:10px;
        }
        </style>`



  setTimeout(init, 2000)
  
  function init() {
    $('main').fadeIn(500)
    $('loading').fadeOut(200)
  }
    
  


  $('.menu-button').click(function() {
    $('.menu-nav').toggleClass(
      'menuOppen');

  })

  $(".login").click(function() {
    localStorage.clear()
    document.location = "../../auth/login/"
  })
  
    $('.menu-button').click(function () {
    $('.menu-nav').toggleClass('v');
       
  })







})

window.addEventListener('offline', () => {

  setTimeout(error, 3000)
})

function error() {
  if (navigator.onLine == false) {
    document.querySelector('body').className = 'gray'
  }

}

window.addEventListener('online', () => {

  document.querySelector('body').className = ''
})

window.addEventListener('load', ()=>{
  $('main').fadeIn(500)
  $('loading').fadeOut(200)
  
  document.title="Shopify";
})
