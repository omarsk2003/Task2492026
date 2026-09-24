let btn = document.querySelector(".btn");

let usernamepatren = /^\S+$/;
let passwordpatren = /^(?=.*\d).{8,}$/;
let phonepatren = /^07\d{8}$/;

function validateInput(username, password, phone) {
  return {
    username: usernamepatren.test(username),
    password: passwordpatren.test(password),
    phone: phonepatren.test(phone)
  };
}

btn.onclick = function () {
  let username = document.getElementById("text").value;
  let password = document.getElementById("password").value;
  let phone = document.getElementById("number").value;
  let order = document.getElementById("selectInput").value;
let session=sessionStorage.setItem("username",JSON.stringify(username));
let local=localStorage.setItem("order",JSON.stringify(order));
    
  let result = validateInput(username, password, phone);

  if (result.username && result.password && result.phone) {
    document.write("Hello " + username + " Your Order is " + order);
  } else {
    alert("Enter valid inputs");
  }
};