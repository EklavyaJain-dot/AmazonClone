var a = 0;

var people = [
    {
        username: "Eklavya",
        password: "eklavyajain"
    },
    {
        username: "mahlpal",
        password: "mahlpal"
    }
];

function addtocart(){
var num = document.getElementById('cart').innerHTML = a = a + 1;
document.getElementById('img1').style.visibility = "visible";
}

function signin(){

var username = document.getElementById("username").value
var password = document.getElementById("password").value

    for(i = 0; i < people.length; i++){
        if(username == people[i].username && password == people[i].password){
window.location.href = "main.html",
document.getElementById('sign').innerHTML = "Hello " + username;
console.log( username +  "You are Loged In");
alert('VALID, Logging In!')
        }

        else{
            alert('Inccorect Password Enterd! Try Again')
        }
    }

}
