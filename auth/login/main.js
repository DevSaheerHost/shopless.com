function googleLogin() {
    // Create Google provider object
    var provider = new firebase.auth.GoogleAuthProvider();
    
    // Sign in with popup
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // This gives you a Google Access Token
        var token = result.credential.accessToken;
        // This gives you a Google OAuth ID token
        var idToken = result.credential.idToken;
        // The signed-in user info
        var user = result.user;
        //console.log(user);
        localStorage.setItem("shopify-login", true)
        localStorage.setItem("shopify-name", user.displayName);
        localStorage.setItem("shopify-dp", user.photoURL);
        //alert("Logged in successfully!");
        document.location="../../"
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.error(errorMessage);
        alert("Error: " + errorMessage);
      });
  }

  function facebookLogin(){
    // Create Facebook provider object
    var provider = new firebase.auth.FacebookAuthProvider();
      
    // Sign in with popup
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // This gives you a Facebook Access Token
        var token = result.credential.accessToken;
        // The signed-in user info
        var user = result.user;
        console.log(user);
        alert("Logged in successfully!");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.error(errorMessage);
        alert("Error: " + errorMessage);
      });
  }
  






let input = document.querySelector("input")
if(localStorage.getItem("shopify-login", true)){
    document.querySelector(".login-button").innerText="Loading..."
    setTimeout(() => {
        document.location="../../"
    }, 2000);
}



$(document).ready(function(){
    $("#sent_otp").click(function(){
        if(document.querySelector('input').id == "number"){
        if(document.getElementById('number').value!=""){
            if(document.getElementById('number').value.length!=10){
                alert("Please check your number")
            } else {

                if(document.querySelector("button").id=="sent_otp"){
                    sentOtp()
                    $("input-group").hide(200)
                    $("input-otp").show(200)
                }
                
                
                
                //localStorage.setItem("shopify-login", true)
                //document.location="../../"
            }
        } else{
            alert("Please enter your number");
        }}
    })

    // $("#login-google").click(function(){
    //     alert("D")
    // })

    $("#back").click(function(){
        $("input-group").show(200)
        $("input-otp").hide(200)
    })



    $("#go_to_signup").click(function(){
        $(".login").hide(200);
        $(".signup").show(200);
    })
    $("#go_to_login").click(function(){
        $(".login").show(200);
        $(".signup").hide(200);
    })
    
})



document.querySelector("#login").addEventListener("click", ()=>{
    if(document.querySelector("#otp").value.length==6){
        signInWithOTP()
        document.querySelector("#login").innerText="Loading..."
    } else{
        alert("6 pin required")
    }
})
 


// $("#login-google").click(function(){
//     alert("D")
// })







function sentOtp(){
    var phoneNumber = "+"+91+ document.getElementById('number').value;
   // alert(phoneNumber) 
      var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible'
      });
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
          window.confirmationResult = confirmationResult;
          console.log("OTP sent successfully");
          alert("OTP sent successfully!");
          document.querySelector("#login").innerText="OTP"
          
         

        }).catch(function (error) {
          console.error("Error sending OTP:", error);
          alert("Error: " + error.message);
          document.querySelector("#login").innerText="OTP"
          document.location.reload()
        });
}


function signInWithOTP(){
    var otp = document.getElementById('otp').value;
      confirmationResult.confirm(otp)
        .then(function (result) {
          //console.log('result', result.user)
         localStorage.setItem("shopify-login", true);
         document.location = "../../"
         
          //---------------//
        }).catch(function (error) {
          console.error("Error signing in:", error);
          alert("Error: " + error.message);
         // document.location.reload()
        });
}



function loginSucces(result) {
  console.log("User signed in successfully:", result.user);

  
  alert("Logged in successfully!");
  
}



