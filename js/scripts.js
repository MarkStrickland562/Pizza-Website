// Business Logic for Order
function Order(firstName, lastName, phoneNumber, deliveryAddress, deliveryDateTime, pizzas) {
  this.orderId = 0
}

Order.prototype.assignId = function() {
  this.orderId += 1;
  return this.OrderId;
}

Order.prototype.addOrder = function(firstName, lastName, phoneNumber, deliveryAddress, deliveryDateTime, pizzas) {
  orderId = this.assignId();
  firstName = firstName;
  lastName = lastName;
  phoneNumber = phoneNumber;
  deliveryAddress = deliveryAddress;
  deliveryDateTime = deliveryDateTime;
  this.pizzas.push(pizzas);
}

Order.prototype.findPizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}

Order.prototype.deletePizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        delete this.pizzas[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Multiple pizzas
function Pizzas () {
  this.pizzas = [];
  this.pizzaId = 0;
}

Pizzas.prototype.assignId = function() {
  this.pizzaId += 1;
  return this.pizzaId;
}

Pizzas.prototype.addPizza = function(pizza) {
  pizzaId = this.assignId();
  this.pizzas.push(pizza);
}

// Business Logic for a Pizza

function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
}

// User Interface Logic ---------

function validateInput(firstName, lastName, phoneNumber, pizzaToppings, pizzaSize) {
console.log(firstName);

  if (!firstName) {
    alert("First Name is Missing!");
    return false;
  }
  else if (!lastName) {
    alert("Last Name is Missing!");
    return false;
  }
  else if (!phoneNumber) {
    alert("Phone Number is Missing!");
    return false;
  }
  else if (!pizzaToppings) {
    alert("No Pizza Toppings were Selected!");
    return false;
  }
  else if (!pizzaSize) {
    alert("No Pizza Size was Selected!");
    return false;
  }
  return true;
}

function addToppings() {
  var pizzaToppings = [];

  $("input:checkbox[name=pizza-topping]:checked").each(function(){
     pizzaToppings.push($(this).val());
   });

  return pizzaToppings;
}

function addSize() {
  return $("input:radio[name=pizzaSize]:checked").val();
}

function addPizza() {
  var pizzaToppings = addToppings();
  var pizzaSize = addSize();

//  if (validateInput(firstName, lastName, phoneNumber, pizzaToppings, pizzaSize)) {

  var newPizza = new Pizza(pizzaSize, pizzaToppings);
  newPizzas.addPizza(newPizza);
    pizzaNumber = pizzaNumber + 1;
    $("#pizzaNumber").text(pizzaNumber.toString());

//    newOrder.addPizza(newPizza);
//  }
//  else {
//
//  }
}

function attachOrderListeners() {
  $("#buttonAddPizza").on("click", "#addPizza", function(){
    addPizza();
   });

   $("#buttonStartOver").on("click", "#startOver", function(){
       location.reload();
   });

};

var pizzaNumber = 1;
var newPizzas = new Pizzas();
var newOrder = new Order();

$(document).ready(function() {
  attachOrderListeners();

  $("#pizzaNumber").text(pizzaNumber.toString());

  $("form#submitOrder").submit(function(event) {
    event.preventDefault();

    firstName = $("#inputfirstName").val();
    lastName = $("#inputlastName").val();
    phoneNumber = $("#inputphoneNumber").val();
    deliveryAddress = $("inputdeliveryAddress").val();
    deliveryDateTime = $("inputdeliveryDateTime").val();

    var newOrder = new Order();

    newOrder.addOrder(firstName, lastName, phoneNumber, deliveryAddress, deliveryDateTime, newPizzas);
console.log(newPizzas);
console.log(newOrder);

  $("#orderDetails").text(newOrder);
  $("#myOrder").show();

  });

});
