// Business Logic for Order
function Order(order) {
  this.order = [],
  this.orderId = 0
}

Order.prototype.assignId = function() {
  this.orderId += 1;
  return this.OrderId;
}

Order.prototype.addOrder = function(order) {
  orderId = this.assignId();
  this.order.push(order);
}

// Business Logic for Multiple Pizzas
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

function validateInput(firstName, lastName, phoneNumber, pizzaCount) {
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
  else if (pizzaCount === 0) {
    alert("No Pizzas were Added!");
    return false;
  }
  return true;
}

function addToppings() {
  var pizzaToppings = [];

  $("input:checkbox[name=pizza-topping]:checked").each(function(){
     pizzaToppings.push($(this).val());
     $("input:checkbox[name=pizza-topping]").prop('checked',false);
   });

  return pizzaToppings;
}

function addSize() {
  var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();

  $("input:radio[name=pizzaSize]").prop('checked',false);

  return pizzaSize;
}

function addPizza() {
  var pizzaToppings = addToppings();
  var pizzaSize = addSize();

  if (pizzaToppings && pizzaSize) {
    var newPizza = new Pizza(pizzaSize, pizzaToppings);
    newPizzas.addPizza(newPizza);
    pizzaNumber = pizzaNumber + 1;
    $("#pizzaNumber").text(pizzaNumber.toString());
  }
  else {
    alert("Please select toppings and a size for your pizza!")
  }
}

function calculateTotal() {
  var subTotal = (pizzaNumber - 1) * 10;
  var taxes = subTotal *.1;
  var total = subTotal + taxes;

  $("#subTotal").text(subTotal);
  $("#taxes").text(taxes);
  $("#total").text(total);
}

function previewOrder() {
  var firstName = $("input#firstName").val();
  var lastName = $("input#lastName").val();
  var phoneNumber = $("input#phoneNumber").val();
  var deliveryAddress = $("input#deliveryAddress").val();
  var deliveryDateTime = $("input#deliveryDateTime").val();

  if (validateInput(firstName, lastName, phoneNumber, newPizzas.pizzas.length)) {

    calculateTotal();

    $("#fullName").text(firstName + " " + lastName);
    $("#orderPhone").text(phoneNumber);
    $("#orderAddress").text(deliveryAddress);

    var pizzaList = "";

    newPizzas.pizzas.forEach(function(pizza) {
      pizzaList = pizzaList + "One " + pizza.size + " Pizza with " + pizza.toppings + "<br>";
    });
    $("#pizzas").append(pizzaList)


    $("#yourOrder").show();
    $("#buttonPreviewOrder").hide();
    $("form#submitOrder").show();
  }
}

function attachOrderListeners() {
  $("#buttonAddPizza").on("click", "#addPizza", function(){
    addPizza();
   });
  $("#buttonPreviewOrder").on("click", "#previewOrder", function(){
     previewOrder();
    });
  $("#buttonStartOver").on("click", "#startOver", function(){
       location.reload();
   });

};

var pizzaNumber = 1;
var newPizzas = new Pizzas();

$(document).ready(function() {
  attachOrderListeners();

  $("#pizzaNumber").text(pizzaNumber.toString());

  $("form#submitOrder").submit(function(event) {
    event.preventDefault();

    var orderDetails = [firstName, lastName, phoneNumber, deliveryAddress, deliveryDateTime, newPizzas];

    var newOrder = new Order();

    newOrder.addOrder(orderDetails);

    alert("Thank you for your order!")
  });

});
