// Business Logic for Order
function Order(firstName, lastName, phoneNumber, deliveryAddress, deliveryTime) {
  this.pizzas = [],
  this.currentId = 0
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
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

// Business Logic for Pizzas

function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
}

// User Interface Logic ---------
var pizzaNumber = 1;

var order = new Order();
var pizza = new Pizza();


function displayOrderDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};

function showContact(contactId) {
  var contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}

function attachContactListeners() {

};

$(document).ready(function() {
  attachContactListeners();

  $("#pizzaNumber").text(pizzaNumber.toString());

  $("form#submit").submit(function(event) {
    event.preventDefault();

    firstName = $("inputfirstName").val();
  });
})
