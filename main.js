
let userName = prompt('Enter your name')
let userAge = prompt('Enter your age')

if (userAge >= 12) {
    alert(userName + ', you are over twelve years old, start the game now')
}
else if (userAge <= '') {
    alert(userName + ', you have to enter your age to start the game')
}
else  {
    alert(userName + ', you are under twelve years old, you can not start the game')
}