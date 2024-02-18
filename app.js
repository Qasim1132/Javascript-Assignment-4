// alert("Hello")

// Question No: 01
var password = "mypassword1132"
var useinput = prompt("Please enter your password:");
if (!useinput) {
    alert("Please enter your password.");
}
else if (useinput === password) {
    alert("The password you entered is correct.");
}
else {
    alert("The password you entered is Incorrect");
}

// Question No: 02 
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

// Question No: 03
// a)
var StudentsNameA = [];
// b)
var studentNamesB = [];
// c)
var stringsarrayC = ["Qasim", "Asim"];
// d)
var numbersarrayD = [1, 2, 3, 4];
// e)
var booleanarrayE = [true, true, true, false,];
// f)
var mixedarrayF = ["Qasim", 1, true, false, { name: "Qasim", age: 19 }];
// g)
var EducationG = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]

// Question No: 04



// Question No: 05
var studentscore = [29, 39, 19, 51, 99, 101, 89, 61]
studentscore.sort()
console.log(studentscore)

// Question No: 06
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write("manufacturers:", manufacturers)

// Question No: 07
var tableNumber = prompt("please entre the number of the multiplicationn table")
var tablelength = prompt("please entre the length of the multiplicationn table")
document.write("<h2>Multiplication table of " + tableNumber + "</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Multiplier</th><th>Result</th></tr>")
for (var i = 1; i <= tablelength; i++) {
    var result = tableNumber * i;
    document.write("<tr><td>" + tableNumber + " X " + i + "</td><td>" + result + "</td></tr>")
}
document.write("</table>");

// Question No: 08



// Question No: 09
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter the item name");
var result = items.includes(search);

if (result) {
    alert(search + " is found in the list.");
} else {
    alert(search + " is not found in the list.");
}

// Question No: 10
var name = prompt("Enter your Name")

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

var nameResult = toTitleCase(name);
console.log(nameResult);

// Question No: 11
var yourname = prompt("Enter your Name");
var tocapital = yourname.toUpperCase();
alert("Name in Capital case" + tocapital)

// Question No: 12
var instring = "472"
var innumber = parseInt(instring)
console.log("original string:", instring, typeof instring)
console.log("converted Number", innumber, typeof innumber)


