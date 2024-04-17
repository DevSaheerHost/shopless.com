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
  var ref = firebase.database().ref('shopless/products/apple/iphone/');
  
  
  // Assuming you want to access an item with the key 'itemId'
//   ref.child().once('value', (snapshot) => {
//     const item = snapshot.val();
//     console.log(item);
  
//     //document.querySelector(".addImgMobile").src=item
//       // document.querySelector(".addImage").src=item
//   });
  

// firebase.ref("shopless/products/apple/iphone/").on("child_added", (snapshot) => {
//     const data = snapshot.val();
//     console.log(data); // Logs the data object
//     console.log("data " + JSON.stringify(data)); // Logs the string "data" followed by the stringified data object
//   });
  
  

// Reference to your database path
//var ref = firebase.database().ref('your/database/path');

// Listener for the child_added event
ref.on('child_added', function(snapshot) {
  // Get the data for the newly added child
  var data = snapshot.val();
  
  //console.log(data.product_image)
let products = document.querySelector(".products1")

products.innerHTML+=`
<a href="ip_8/" class="product">
                            <div class="product__image-wrapper">
                                <img src="${data.product_image}" alt="Mac">
                            </div>
                            ${data.product_name}
                        </a>`


  // Do something with the data
  console.log('New child added:', data);
});
