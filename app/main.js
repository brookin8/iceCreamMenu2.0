//Declaring variables

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


//Function to check that page is loaded
document.onreadystatechange = function() { //boilerplate
  if (document.readyState == "interactive") { //boilerplate
    reset(); //Resets everything to start fresh
    for (i = 0; i < menuButtons.length; i++) { //Grabbing each menu button
      menuButtons[i].addEventListener("click", ButtonLogic); //When a menu button is clicked, we run the ButtonLogic function
    }
  }
}

//Function to reset the page
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

//Function that checks which menu section is selected for dropdown and further functions
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

//Function that displays all Regular Flavors and adds functionality for cart
//seasonal, toppings, and serving functions will all work the same as regular function 
function regular() {

if(!regularClick) {   //If this menu section is not currently displayed

    printOutOptions1.style.display = 'block'; //Display the currently hidden section
    
    //Blank variables to store the results of the following for loop in
    var names = ''; 
    var descriptions = '';
    var prices = '';

    //This for loop cycles through the Regular Flavors sub-array, and accesses elements according to their keys
    //If the key is 'name', it pushes the value into the table heading, 
    //and makes it a button with the class 'addToCart' that can be used to add this product to the cart.
    //If the key is 'description' or 'price', it pushes the value into a table cell.
    for(var i=0; i<products["Regular Flavors"].length;i++) {
      names += "<th><button class='addToCart'>"  + products["Regular Flavors"][i]["name"] + "</button></th>"
      descriptions += "<td>"  + products["Regular Flavors"][i]["description"] + "</td>"
      prices += "<td>"  + "$" + products["Regular Flavors"][i]["price"] + "</td>"
    }

    //This piece assigns each row to its proper place in the document, according to classes I assigned earlier.
    document.getElementById('optionName1').innerHTML = names;
    document.getElementById('optionDescription1').innerHTML = descriptions;
    document.getElementById('optionPrice1').innerHTML = prices;

    //Then reset regularClick, so that the menu will toggle (display will go back to none when clicked again)
    regularClick = true;

    //Accessing the 'addToCart' buttons I created in the for loop above
    var addToCart = document.getElementsByClassName('addToCart');

    //For each button I created, I loop through and create an eventListener for when they are clicked.
    //The function that the button will perform when clicked, addCart(), is defined below.
    for (i = 0; i < addToCart.length; i++) { 
      addToCart[i].addEventListener("click", addCart); 
    }

    //If the regularClick was already set to true, the section will hide (toggle)
  } else {

    printOutOptions1.style.display = 'none';
    regularClick = false;

  }

}

function seasonal() {

if(!seasonalClick) {   

    firstIndex = "Seasonal Flavors";

    printOutOptions2.style.display = 'block';
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


  //When you click a product, it automatically starts an order for you.
  //It unhides an Order Panel display, where it will keep a list and price tally
  orderPanel.style.display = 'block';

  //Setting up variables to calculate a running price total
  var priceToAdd = "0";
  var totalPrice = orderPrice.innerHTML; //This grabs the price that is currently displayed

  //I then loop through each inner array of the larger products array to check for 
  //the name of the product I clicked on. When I find it, I grab the associated price 
  //and store it in 'priceToAdd'
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

  //I then create a list item containing the name of the product I clicked on
  //This list item also includes a button 'X' that will allow you to remove the product
  //from your order.
  orderList.innerHTML += "<li class='orderListItem'>" + this.innerHTML + "<button class='removeFromCart'>X</button></li>"
  
  //I access the button 'X' with class 'removeFromCart' I just created to remove products if needed
  var removeFromCart = document.getElementsByClassName('removeFromCart');

  //For each button 'X' I created, I loop through and create an eventListener for when they are clicked.
  //The function that the button will perform when clicked, removeCart(), is defined below.
  for (i = 0; i < removeFromCart.length; i++) {
    removeFromCart[i].addEventListener("click", removeCart); 
  }

  //I update my total price to be the currently displayed price + the price of the product I just clicked.
  //I then assign this value to the innerHTML of my order
  totalPrice = Number(totalPrice) + Number(priceToAdd); 
  orderPrice.innerHTML = Number(totalPrice).toFixed(2);


}

//This function is very similar to addCart, except that I have to do a few steps to 
//get to the 'name' element I need to use to access the correct price.
function removeCart() {

  var priceToSubtract = "0";
  var totalPrice = orderPrice.innerHTML;
  var listItemToRemove = this.parentElement; //This allows me to access the outer list element (current element is button 'X')
  var grabItem = listItemToRemove.innerText; //This grabs the inner text of the list element, without grabbing anything within element tags.
  var checkArrayValue = grabItem.slice(0,-1); //It also grabs the 'X' text for my remove button, so I slice this bit off

  //Now I loop through all of the inner arrays just as I did with addCart
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

  //I update the price by subtracting out the price of the product whose 'X' button I clicked
  totalPrice = Number(totalPrice) - Number(priceToSubtract); 
  orderPrice.innerHTML = Number(totalPrice).toFixed(2);

  //I then remove the entire parent list element of the product whose 'X' button I clicked.
  listItemToRemove.remove();
  
}

      





