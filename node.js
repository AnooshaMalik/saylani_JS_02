// question # 01
// var displayDate = () => {
//     var date = new Date();
//     document.write('<h2>Question # 01</h2>');
//     document.write(date);
//     document.write("<br>")
// }
// displayDate();
// question # 02
// var greet = () => {
//         var firstName = prompt("Enter your first name");
//         var lastName = prompt("Enter your first name");
//         document.write('<h2>Question # 02</h2>');

//         document.write('Welcome to Our page ' + firstName + ' ' + lastName);


//     }
// greet();
// question # 03
// function add_num(num1, num2) {
//     document.write('<h2>Question # 03</h2>');

//     var res = num1 + num2;
//     document.write(res);
//     document.write("<br>")

// }
// add_num(2, 9);
// question # 04
// question # 05
// var sqr = (num) => {
//         document.write('<h2>Question # 05</h2>');

//         document.write('sqauare root of ' + ' ' + num + ' ' + 'is' + ' ' + Math.sqrt(num) + "<br>");
//         document.write('sqt')
//     }
// sqr(9);

// question # 06

// var num = parseInt(prompt("enter number to find its fact"));

// function fact() {
//     var fact = 1;

//     for (i = 1; i <= num; i++) {
//         fact = fact * i;

//     }
//     document.write('<h2>Question # 06</h2>');

//     document.write('factorial of ' + ' ' + num + ' ' + 'is' + ' ' + fact);
// }

// fact();
// question # 07
// var count = () => {
//         var start = prompt("enter the start num");
//         var end = prompt("enter the end num");
//         for (i = start; i <= end; i++) {
//             document.write(i);
//             document.write("<br>");
//         }

//     }
// count();
// question # 08
// var hypo = () => {
//     var Base = prompt("enter the Base");
//     var perp = prompt("enter the perpendicular");
//     var res = (Base * Base) + (perp * perp);
//     document.write(res);
//     document.write("<br>")
//     var hypoSqrt = () => {
//         document.write("<br>")
//         document.write(Math.sqrt(res));
//     }
//     hypoSqrt();

// }
// hypo();
// question # 09
// var area = (width, height) => {
//     document.write('Area is ' + " " + (width * height));
// }
// area(2, 3);
// question # 11
// var upperCase = (name) => {
//     document.write('<h2>Question # 11</h2>');

//     name = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
//     document.write(name);
// }
// upperCase("saylani");