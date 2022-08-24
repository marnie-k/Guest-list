
function invited(name) {

    var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]

    var name = prompt("What is your name?")

if (guestList.includes(name) == true) {
    return "Welcome!"
}

else { 
    return "Maybe next time."}
}

invited()