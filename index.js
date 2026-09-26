let btn = document.querySelector(".btn");
let usernamepatren = /^\S+$/;
let passwordpatren = /^(?=.*\d).{8,}$/;
let phonepatren = /^07\d{8}$/;

function vaildinput(username, password, phone) {
   let userva=usernamepatren.test(username);
    let passva= passwordpatren.test(password);
    let phoneva= phonepatren.test(phone);
  console.log("validname"+userva);
    console.log("validpass"+passva);
  console.log("vaildnum"+phoneva);

    return {
    userva,passva,phoneva
  };
}
btn.onclick = function () {
  let username = document.getElementById("text").value;
  let password = document.getElementById("password").value;
  let phone = document.getElementById("number").value;
  let order = document.getElementById("selectInput").value;
let session=sessionStorage.setItem("username",JSON.stringify(username));
let local=localStorage.setItem("order",JSON.stringify(order));
    
let result = vaildinput(username, password, phone);
  if (result.userva &&result.passva && result.phoneva) 
    {
    document.write("Hello " + username + " Your Order is " + order);
    }
  else
  {
    alert("Enter valid inputs");
  }
};