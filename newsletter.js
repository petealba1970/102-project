var newsletter = prompt('Would you like to receive a monthly newsletter yes or no?');
var response;


if (newsletter === 'yes') {
    response = 'Wonderful, you are subscribed.';
}  else if  (newsletter === 'no') {
    response = 'Ok, you will not be subcribed.';
}
document.write('<h3>' + response + '</h3>');