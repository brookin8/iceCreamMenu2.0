var products = {
  
  "Regular Flavors": [

    {
      "name": "Chocolate", //[0][name]
      "description": "Loved by kids of all ages!", //[0][description]
      "price": "2.00" //[0][3]
    },
    {
      "name": "Vanilla",
      "description": "Elegant and understated",
      "price": "2.00"
    },
    {
      "name": "Strawberry",
      "description": "A taste of summer...anytime!",
      "price": "2.00"
    }
  ],
  "Seasonal Flavors": [
    {
      "name": "Salted Caramel",
      "description": "Sweet and salty",
      "price": "3.00"
    },
    {
      "name": "Pumpkin Spice",
      "description": "Delightful any time of year, but especially now",
      "price": "3.00"
    }
  ],
  "Serving Options": [
    {
      "name": "Waffle Cone",
      "description": "Made fresh by hand in our store each day",
      "price": "1.25"
    },
    {
      "name": "Cup",
      "description": "Plenty of room for toppings",
      "price": "0.00"
    }
  ],
  "Toppings": [
    {
      "name": "Hot Fudge",
      "description": "Rich and chocolatey and just sweet enough",
      "price": "1.00"
    },
    {
      "name": "Marshmallows",
      "description": "Hand-made the old-fashioned way",
      "price": "1.50"
    },
    {
      "name": "Rainbow Sprinkles",
      "description": "Like a million tiny little smiles",
      "price": "0.75"
    }
  ]
};
var menuButtons = document.getElementsByClassName('menuButton');
var regularClick = false;
var seasonalClick = false;
var toppingsClick = false;
var servingClick = false;

var printOutOptions = document.getElementsByClassName('printOutOptions');

var printOutOptions1 = document.getElementById('printOutOptions1');
var printOutOptions2 = document.getElementById('printOutOptions2');
var printOutOptions3 = document.getElementById('printOutOptions3');
var printOutOptions4 = document.getElementById('printOutOptions4');

var optionInfo = document.getElementsByClassName('optionInfo');

var orderPanel = document.getElementById('orderPanel');
var orderList = document.getElementById('orderList');
var orderPrice = document.getElementById('orderPrice');

var firstIndex;
var productToCheck;

document.onreadystatechange = function() { //boilerplate
  if (document.readyState == "interactive") { //boilerplate
    reset(); //Resets everything to start fresh
    for (i = 0; i < menuButtons.length; i++) { //Grabbing each digit button in the numeric class
      menuButtons[i].addEventListener("click", ButtonLogic); //When a digit button is clicked, we run the ButtonLogic function
    }
  }
}

function reset() {

  printOutOptions1.style.display = 'none';
  printOutOptions2.style.display = 'none';
  printOutOptions3.style.display = 'none';
  printOutOptions4.style.display = 'none';
  orderPanel.style.display = 'none';
  optionInfo.innerHTML = '';
  orderList.innerHTML = '';
  orderPrice.innerHTML = '';
}

function ButtonLogic() {
  if(this.classList.contains('regular')) {
    regular(); 
  }else if(this.classList.contains('seasonal')) {
    seasonal(); 
  }else if(this.classList.contains('toppings')) {
    toppings();
  } else if (this.classList.contains('serving')) {
    serving();
  }
}

function regular() {

if(!regularClick) {   

    firstIndex = "Regular Flavors";

    printOutOptions1.style.display = 'block';
   // optionName1.innerHTML = products["Regular Flavors"][0]["name"];
    var names = '';
    var descriptions = '';
    var prices = '';
    for(var i=0; i<products["Regular Flavors"].length;i++) {
      names += "<th><button class='addToCart'>"  + products["Regular Flavors"][i]["name"] + "</button></th>"
      descriptions += "<td>"  + products["Regular Flavors"][i]["description"] + "</td>"
      prices += "<td>"  + "$" + products["Regular Flavors"][i]["price"] + "</td>"
    }

    document.getElementById('optionName1').innerHTML = names;
    document.getElementById('optionDescription1').innerHTML = descriptions;
    document.getElementById('optionPrice1').innerHTML = prices;

    regularClick = true;

    var addToCart = document.getElementsByClassName('addToCart');

    for (i = 0; i < addToCart.length; i++) { 
      addToCart[i].addEventListener("click", addCart); 
    }

  } else {

    printOutOptions1.style.display = 'none';
    regularClick = false;

  }

}

function seasonal() {

if(!seasonalClick) {   

    firstIndex = "Seasonal Flavors";

    printOutOptions2.style.display = 'block';
   // optionName1.innerHTML = products["Regular Flavors"][0]["name"];
    var names = '';
    var descriptions = '';
    var prices = '';
    for(var i=0; i<products["Seasonal Flavors"].length;i++) {
      names += "<th><button class='addToCart'>"  + products["Seasonal Flavors"][i]["name"] + "</button></th>"
      descriptions += "<td>"  + products["Seasonal Flavors"][i]["description"] + "</td>"
      prices += "<td>"  + "$" + products["Seasonal Flavors"][i]["price"] + "</td>"
    }

    document.getElementById('optionName2').innerHTML = names;
    document.getElementById('optionDescription2').innerHTML = descriptions;
    document.getElementById('optionPrice2').innerHTML = prices;

    seasonalClick = true;

    var addToCart = document.getElementsByClassName('addToCart');

    for (i = 0; i < addToCart.length; i++) { 
      addToCart[i].addEventListener("click", addCart); 
    }


  } else {

    printOutOptions2.style.display = 'none';
    seasonalClick = false;

  }

}

function toppings() {

if(!toppingsClick) {   

    firstIndex = "Toppings";

    printOutOptions3.style.display = 'block';
   // optionName1.innerHTML = products["Regular Flavors"][0]["name"];
    var names = '';
    var descriptions = '';
    var prices = '';
    for(var i=0; i<products["Toppings"].length;i++) {
      names += "<th><button class='addToCart'>"  + products["Toppings"][i]["name"] + "</button></th>"
      descriptions += "<td>"  + products["Toppings"][i]["description"] + "</td>"
      prices += "<td>"  + "$" + products["Toppings"][i]["price"] + "</td>"
    }

    document.getElementById('optionName3').innerHTML = names;
    document.getElementById('optionDescription3').innerHTML = descriptions;
    document.getElementById('optionPrice3').innerHTML = prices;

    toppingsClick = true;

    var addToCart = document.getElementsByClassName('addToCart');

    for (i = 0; i < addToCart.length; i++) { 
      addToCart[i].addEventListener("click", addCart); 
    }

  } else {

    printOutOptions3.style.display = 'none';
    toppingsClick = false;

  }

}

    
function serving() {

if(!servingClick) {   

    firstIndex = "Serving Options";

    printOutOptions4.style.display = 'block';
   // optionName1.innerHTML = products["Regular Flavors"][0]["name"];
    var names = '';
    var descriptions = '';
    var prices = '';
    for(var i=0; i<products["Serving Options"].length;i++) {
      names += "<th><button class='addToCart'>"  + products["Serving Options"][i]["name"] + "</button></th>"
      descriptions += "<td>"  + products["Serving Options"][i]["description"] + "</td>"
      prices += "<td>"  + "$" + products["Serving Options"][i]["price"] + "</td>"
    }

    document.getElementById('optionName4').innerHTML = names;
    document.getElementById('optionDescription4').innerHTML = descriptions;
    document.getElementById('optionPrice4').innerHTML = prices;

    servingClick = true;

    var addToCart = document.getElementsByClassName('addToCart');

    for (i = 0; i < addToCart.length; i++) { 
      addToCart[i].addEventListener("click", addCart); 
    }

  } else {

    printOutOptions4.style.display = 'none';
    servingClick = false;

  }

}

function addCart() {
  
  orderPanel.style.display = 'block';

  var priceToAdd = "0";
  var totalPrice = orderPrice.innerHTML;

  
  for (var i=0;i<products["Regular Flavors"].length;i++) {
    if(products["Regular Flavors"][i]["name"] === this.innerHTML) {
      priceToAdd = products["Regular Flavors"][i]["price"];
    }
  }

 for (var j=0;j<products["Seasonal Flavors"].length;j++) {
    if(products["Seasonal Flavors"][j]["name"] === this.innerHTML) {
      priceToAdd = products["Seasonal Flavors"][j]["price"];
    }
  }

 for (var k=0;k<products["Toppings"].length;k++) {
    if(products["Toppings"][k]["name"] === this.innerHTML) {
      priceToAdd = products["Toppings"][k]["price"];
    }
  }

 for (var l=0;l<products["Serving Options"].length;l++) {
    if(products["Serving Options"][l]["name"] === this.innerHTML) {
      priceToAdd = products["Serving Options"][l]["price"];
    }
  }



  orderList.innerHTML += "<li class='orderListItem'>" + this.innerHTML + "<button class='removeFromCart'>X</button></li>"
  

  var removeFromCart = document.getElementsByClassName('removeFromCart');

  for (i = 0; i < removeFromCart.length; i++) {
    removeFromCart[i].addEventListener("click", removeCart); 
  }

  totalPrice = Number(totalPrice) + Number(priceToAdd); 
  orderPrice.innerHTML = Number(totalPrice).toFixed(2);


}

function removeCart() {

  var priceToSubtract = "0";
  var totalPrice = orderPrice.innerHTML;
  var listItemToRemove = this.parentElement;
  var grabItem = listItemToRemove.innerText;
  var checkArrayValue = grabItem.slice(0,-1);
  var newFirstIndex = 0;


  for (var i=0;i<products["Regular Flavors"].length;i++) {
    if(products["Regular Flavors"][i]["name"] === checkArrayValue) {
      priceToSubtract = products["Regular Flavors"][i]["price"];
    }
  }

  for (var j=0;j<products["Seasonal Flavors"].length;j++) {
    if(products["Seasonal Flavors"][j]["name"] === checkArrayValue) {
      priceToSubtract = products["Seasonal Flavors"][j]["price"];
    }
  }

  for (var k=0;k<products["Toppings"].length;k++) {
    if(products["Toppings"][k]["name"] === checkArrayValue) {
      priceToSubtract = products["Toppings"][k]["price"];
    }
  }

  for (var l=0;l<products["Serving Options"].length;l++) {
    if(products["Serving Options"][l]["name"] === checkArrayValue) {
      priceToSubtract = products["Serving Options"][l]["price"];
    }
  }


  totalPrice = Number(totalPrice) - Number(priceToSubtract); 
  orderPrice.innerHTML = Number(totalPrice).toFixed(2);

  listItemToRemove.remove();
  
}

      





