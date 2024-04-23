


function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    // this.parentNode.appendChild(a);
    document.querySelector(".content-wrapper").appendChild(a)
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "item");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
// var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
//var countries = ["iPhone 11", "	iPhone 11 Pro", "iPhone 11 Pro Max", "iPhone SE(2nd generation)",]

var iphoneModels = [
  "iPhone", "iPhone 3G", "iPhone 3GS", "iPhone 4", "iPhone 4s",
  "iPhone 5", "iPhone 5c", "iPhone 5s", "iPhone 6", "iPhone 6 Plus",
  "iPhone 6s", "iPhone 6s Plus", "iPhone SE (1st generation)", "iPhone 7",
  "iPhone 7 Plus", "iPhone 8", "iPhone 8 Plus", "iPhone X", "iPhone XR",
  "iPhone XS", "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
  "iPhone SE (2nd generation)", "iPhone 12", "iPhone 12 mini",
  "iPhone 12 Pro", "iPhone 12 Pro Max", "iPhone 13", "iPhone 13 mini",
  "iPhone 13 Pro", "iPhone 13 Pro Max", "iPhone SE (3rd generation)",
  "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max",
  "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max"
];
const androidModels = [
  "Samsung Galaxy S21", "Google Pixel 5", "OnePlus 9",
  "Xiaomi Mi 11", "Sony Xperia 1 II", "Oppo Find X3 Pro",
  "Huawei P40 Pro", "Motorola Edge Plus", "Asus ROG Phone 5",
  "Realme GT", "Vivo X60 Pro", "Nokia 8.3 5G",
  "LG Wing", "HTC U12+", "Lenovo Legion Phone Duel"
];

var allMobiles = [
  "iPhone", "iPhone 3G", "iPhone 3GS", "iPhone 4", "iPhone 4s",
  "iPhone 5", "iPhone 5c", "iPhone 5s", "iPhone 6", "iPhone 6 Plus",
  "iPhone 6s", "iPhone 6s Plus", "iPhone SE (1st generation)", "iPhone 7",
  "iPhone 7 Plus", "iPhone 8", "iPhone 8 Plus", "iPhone X", "iPhone XR",
  "iPhone XS", "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
  "iPhone SE (2nd generation)", "iPhone 12", "iPhone 12 mini",
  "iPhone 12 Pro", "iPhone 12 Pro Max", "iPhone 13", "iPhone 13 mini",
  "iPhone 13 Pro", "iPhone 13 Pro Max", "iPhone SE (3rd generation)",
  "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max",
  "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max", 

  "Samsung Galaxy S21", "Google Pixel 5", "OnePlus 9",
  "Xiaomi Mi 11", "Sony Xperia 1 II", "Oppo Find X3 Pro",
  "Huawei P40 Pro", "Motorola Edge Plus", "Asus ROG Phone 5",
  "Realme GT", "Vivo X60 Pro", "Nokia 8.3 5G",
  "LG Wing", "HTC U12+", "Lenovo Legion Phone Duel", 


  "Google Pixel", "Google Pixel XL", "Google Pixel 2", "Google Pixel 2 XL",
  "Google Pixel 3", "Google Pixel 3 XL", "Google Pixel 3a", "Google Pixel 3a XL",
  "Google Pixel 4", "Google Pixel 4 XL", "Google Pixel 4a", "Google Pixel 4a (5G)",
  "Google Pixel 5", "Google Pixel 5a (5G)", "Google Pixel 6", "Google Pixel 6 Pro",
  "Google Pixel 6a", "Google Pixel 7", "Google Pixel 7 Pro", "Google Pixel 8",
  "Google Pixel 8 Pro", "Google Pixel Watch", "Google Pixel Fold", "Google Pixel Tablet",
  "Google Pixel 7a", 


  "OnePlus One", "OnePlus 2", "OnePlus X", "OnePlus 3", "OnePlus 3T",
  "OnePlus 5", "OnePlus 5T", "OnePlus 6", "OnePlus 6T", "OnePlus 7",
  "OnePlus 7 Pro", "OnePlus 7T", "OnePlus 7T Pro", "OnePlus 8",
  "OnePlus 8 Pro", "OnePlus 8T", "OnePlus Nord", "OnePlus Nord N10 5G",
  "OnePlus Nord N100", "OnePlus 9", "OnePlus 9 Pro", "OnePlus 9R",
  "OnePlus Nord 2", "OnePlus Nord CE 5G", "OnePlus 10 Pro",
  // Add the latest models from the search results
  "OnePlus Ace 3V", "OnePlus Nord CE4", "OnePlus Watch 2", "OnePlus Nord N30",
  "OnePlus SE 12R", "OnePlus 12", "OnePlus Ace 3", "OnePlus Pad Go",
  "OnePlus Ace 2 Pro", "OnePlus Nord CE3", "OnePlus Nord 3", "OnePlus Nord N30",
  "OnePlus Nord CE 3 Lite", "OnePlus Ace 2V", "OnePlus Pad", "OnePlus 11R",
  "OnePlus Ace 2", "OnePlus 11", "OnePlus Nord N300", "OnePlus Nord Watch",
  "OnePlus Ace Pro", "OnePlus Nord N20 SE", "OnePlus 10T", "OnePlus Nord 2T",
  "OnePlus Ace Racing", "OnePlus Nord N20 5G", "OnePlus 10R 150W", "OnePlus 10R",
  "OnePlus Nord CE 2 Lite 5G", "OnePlus Ace"
];

const googleMobileDevices = [
  "Google Pixel", "Google Pixel XL", "Google Pixel 2", "Google Pixel 2 XL",
  "Google Pixel 3", "Google Pixel 3 XL", "Google Pixel 3a", "Google Pixel 3a XL",
  "Google Pixel 4", "Google Pixel 4 XL", "Google Pixel 4a", "Google Pixel 4a (5G)",
  "Google Pixel 5", "Google Pixel 5a (5G)", "Google Pixel 6", "Google Pixel 6 Pro",
  "Google Pixel 6a", "Google Pixel 7", "Google Pixel 7 Pro", "Google Pixel 8",
  "Google Pixel 8 Pro", "Google Pixel Watch", "Google Pixel Fold", "Google Pixel Tablet",
  "Google Pixel 7a"
];

const onePlusDevices = [
  "OnePlus One", "OnePlus 2", "OnePlus X", "OnePlus 3", "OnePlus 3T",
  "OnePlus 5", "OnePlus 5T", "OnePlus 6", "OnePlus 6T", "OnePlus 7",
  "OnePlus 7 Pro", "OnePlus 7T", "OnePlus 7T Pro", "OnePlus 8",
  "OnePlus 8 Pro", "OnePlus 8T", "OnePlus Nord", "OnePlus Nord N10 5G",
  "OnePlus Nord N100", "OnePlus 9", "OnePlus 9 Pro", "OnePlus 9R",
  "OnePlus Nord 2", "OnePlus Nord CE 5G", "OnePlus 10 Pro",
  // Add the latest models from the search results
  "OnePlus Ace 3V", "OnePlus Nord CE4", "OnePlus Watch 2", "OnePlus Nord N30",
  "OnePlus SE 12R", "OnePlus 12", "OnePlus Ace 3", "OnePlus Pad Go",
  "OnePlus Ace 2 Pro", "OnePlus Nord CE3", "OnePlus Nord 3", "OnePlus Nord N30",
  "OnePlus Nord CE 3 Lite", "OnePlus Ace 2V", "OnePlus Pad", "OnePlus 11R",
  "OnePlus Ace 2", "OnePlus 11", "OnePlus Nord N300", "OnePlus Nord Watch",
  "OnePlus Ace Pro", "OnePlus Nord N20 SE", "OnePlus 10T", "OnePlus Nord 2T",
  "OnePlus Ace Racing", "OnePlus Nord N20 5G", "OnePlus 10R 150W", "OnePlus 10R",
  "OnePlus Nord CE 2 Lite 5G", "OnePlus Ace"
];



/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("search"), allMobiles);






///////////////////////




const products = [
    { heading: `Get even more attached to iPhone.`, href: '', text: "Snap on a MagSafe case, wallet or wireless charger. And connect with a USB-C cable.", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-magsafe-202403_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1707850767641", class: "a" },
    { heading: "AIRPODS", text: "Magic runs in the family", href: '', image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-50-airpods-202209_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1661626394650", class: "b" },
    { heading: `Explore all iphone<br>Accessories`, href: '', text: "", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-accessories-202403_FMT_WHH?wid=618&hei=900&fmt=jpeg&qlt=90&.v=1707850767712", class: "c" },
  ]
  function createItem(item) {
    return `<a href ="${item.href}"><div class="user-product card ${item.class}">
  <div class="text-wrapper">
    <h3>${item.heading}</h3>
    <p> ${item.text}</p>
  </div></a>
  <style>
  .${item.class}{
    background-image: url("${item.image}") !important;
    min-width: 300px;
  }
  
  a{
    color: black;
    text-decoration: none;
  }
  </style>
  
  </div>`
  }
  function show() {
  
    const itemDiv = document.querySelector("#itemList")
    products.forEach(product => {
      itemDiv.innerHTML += createItem(product)
  
  
  
    })
  }
  
  
  
  
  
  
  const searchHints = [
    { href: '', text: "iPhone 15 pro max Case", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPRX3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1676921567828", href: "https://devsaheerhost.github.io/shopless.com/products/apple/iPhone/pouch/" },
    { href: '', text: "iPhone 13 pro Adapter", img: "https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/error-image-photo-icon.png", href: "#" },
    { href: '', text: "iPhone 14 pro cable ", img: "https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/error-image-photo-icon.png", href: "#" },
    { href: '', text: "iPhone 15 ", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWND3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1708125477348", href: "#" },
    { href: '', text: "iPhone 12", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHL53?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1623349226000", href: "#" },
    { href: '', text: "iPhone 13 mini", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MM203?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1645481430472", href: "#" },
  ]
  
  function makeSearchHints(Hint) {
    return `<a href="${Hint.href}">
    <div class="search-option">
      <img class="sml-icon icon" src="${Hint.img}" alt="">
      <p>${Hint.text}</p>
    </div>  
  </a>`
  }
  
  function showHint() {
    const hintBox = document.querySelector("#boxList")
    searchHints.forEach(Hint => {
      hintBox.innerHTML += makeSearchHints(Hint)
    })
  }
  



  ///////////////////////////////


  
  $("#search").click(function () {
    $(".menu-button").toggle()
    $(".close-input").toggle()
    $(".out").toggle(200)
    document.querySelector("header").classList.toggle("headerFix")
    document.querySelector(".out").classList.toggle("outShow")
    document.body.classList.toggle("bodyOwerflowHide")
  })

  $(".close-input").click(function () {
    document.querySelector("header").classList.toggle("headerFix")
    document.querySelector(".out").classList.toggle("outShow")
    document.body.classList.toggle("bodyOwerflowHide")
    $(".menu-button").toggle()
    $(".close-input").toggle()
    $(".out").toggle(200)
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

