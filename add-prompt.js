var answer = prompt('First time checking out this site yes/no ?');
var greeting;


if (answer === yes) {
    greeting = 'Welcome, I hope you Enjoy!';
}  else if  (answer === no) {
    greeting = 'Welcome back!';
}
document.write('<h3>' + greeting + '</h3>');
