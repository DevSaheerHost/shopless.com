



const firebaseConfig = {
  apiKey: "AIzaSyCsTD5XSRNl7VG-i6Ir0F3D1X1PxWk2Rfs",
  authDomain: "shopify-30670.firebaseapp.com",
  databaseURL: "https://shopify-30670-default-rtdb.firebaseio.com",
  projectId: "shopify-30670",
  storageBucket: "shopify-30670.appspot.com",
  messagingSenderId: "792157900529",
  appId: "1:792157900529:web:32d02d2d8b3fe05d94e350",
  measurementId: "G-MZC38NN5BZ"
};


firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var ref = firebase.database().ref('shopless/home/');



// Assuming you want to access an item with the key 'itemId'
let ads1 = document.querySelector("#ads1")
ref.child("ads/").once('value', (snapshot) => {
 //const key = snapshot.key();
 const item = snapshot.val();
 console.log(item.ads1)
 // console.log(snapshot.val().ads1);
if (item.ads1) {
  ads1.src=item.ads1
}

if (item.ads2) {
  ads2.src=item.ads2
}
if (item.ads3) {
  ads3.src=item.ads3
}
if (item.ads4) {
  ads4.src=item.ads4
}
if (item.ads5) {
  ads5.src=item.ads5
}
if (item.ads6) {
  ads6.src=item.ads6
}
if (item.ads7) {
  ads7.src=item.ads7
}
if (item.ads8) {
  ads8.src=item.ads8
}
if (item.ads9) {
  ads9.src=item.ads9
}
// document.querySelector(".addImgMobile").src=item
    
    
    
});


database.ref("shopless/home/ads/").on("child_added", (snapshot) => {
  //console.log('-----getting data Started--------')
  const data = snapshot.val();
  
 // console.log('create function')
  // create(data.title, data.image, data.subtitle, data.pageurl);
  //console.log('-------getting Stopped------')
  
  // var name = data.product_name;
  // var img = data.product_image;
  // var price = data.product_price;
  // var quantity = data.quantity;
  //alert()

  //document.querySelector(".banner-add-wrapper").innerHTML+=`
   // `
   
// alert(data.add1)
  // setTimeout(showSlides, 1600)
      
 // console.log(data)

  
  // const img = document.querySelector("#img")
  // const name = document.querySelector("#name")
  // const price = document.querySelector("#price")
  // const description = document.querySelector("#description")
  // img.src=data.product_image
  // name.textContent= data.product_name
  // price.textContent= data.product_price
 // description.textContent= data.product_description

    


  // <img src="${data.product_image}" alt="">
  // <h1 id="name">${data.product_name}</h1>
  // <h3 id="price">${data.product_price}</h3>
  // <label id="description" for="">${data.product_description}</label>
  // 
  
});
// -------------------------------------------------//

$(document).ready(function () {
  console.log('ready')
  document.title="Shopify";
  if(localStorage.getItem("shopify-login")=="true"){
    if (localStorage.getItem('shopify-dp') !=null) {
      let dp = localStorage.getItem("shopify-dp");
      document.querySelector(".dp").innerHTML = `
        <img src="` + dp + `">`

        document.querySelector(".dp1").src=dp
        
    }
    
    let userName = localStorage.getItem("shopify-name")
    if (userName!=null) {
      document.querySelector("#name_label").innerText = userName
      document.querySelector(".name_label").innerText = userName
    }
  
    $(".login").hide(100);
    $('.login').html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
      <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
    </svg> Logout`);
  }
  
  
  if (sessionStorage.getItem('init') == 'true') {
    init()
  } else {
    setTimeout(init, 1900)
    sessionStorage.setItem('init', 'true')
  }
  
  
  

  function init() {
      $('.main-container').fadeIn(500)
      $('loading').fadeOut(200)

      $(".product_card").css({"transform": "translateY(100px)", "opacity": "0"})
      setTimeout(slideUp, 300)
  }
  function slideUp(){
    $(".product_card").css({"transform": "translateY(-40px)", "opacity": "1"})
  }
  
  
  $('.menu-button').click(function () {
    $('.menu-nav').toggleClass(
      'menuOppen');
       
  })

  $(".login").click(function(){
    localStorage.clear()
    document.location="auth/login/"
  })
  
  

  $("#accountCard").click(function(){
    $(".accountcard").toggle(200)
  })
  

    
  
})

window.addEventListener('offline', ()=>{
  
  setTimeout(error, 3000)
})

function error() {
  if (navigator.onLine==false) {
    document.querySelector('body').className='gray'
  }
  
}

window.addEventListener('online', () => {

  document.querySelector('body').className=''
})


document.querySelector('#nav_cart').innerHTML+=`
        <style>
        #nav_cart{
          position:relative;
        }
        #nav_cart::after{
          content: '!';
          width:10px;
          height:10px;
          display:flex;
          align-items:center;
          justify-content: center;
          position : absolute;
          top:-10px;
          right:-10px;
          box-shadow: 0 0 5px black;
          padding: 3px;
          border-radius: 100px;
          background:red;
          color:white;
          font-size:10px;
        }
        </style>`


    

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].style.animationName = "slide";
  slides[slideIndex-1].style.animationDuration = "4s";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}



