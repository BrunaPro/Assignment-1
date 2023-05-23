function displayMs1(){
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var result = name+" "+lastName;
    document.getElementById("demo").innerHTML = result;
}

document.getElementById("b").onclick = function(){
    displayMs1();
}