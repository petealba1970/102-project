function myGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good Morning!';
    } else {
        greeting = 'Welcome!';
    }
    return '<h3>' + greeting + '</h3>'
}

function hasVisited() {
    var answer = prompt('First time checking out this site yes/no ?');
    var greeting;


    if (answer === 'yes') {
        greeting = 'Welcome, I hope you Enjoy!';
    } else if (answer === 'no') {
        greeting = 'Welcome back!';
    }
    return '<h3>' + greeting + '</h3>';
}

function upDate() {
    var newsletter = prompt('Would you like to receive a monthly newsletter yes or no?');
    var response;
    if (newsletter === 'yes') {
        response = 'Wonderful, you are subscribed.';
    }  else if  (newsletter === 'no') {
        response = 'Ok, you will not be subcribed.';
    }
return '<h3>' + response + '</h3>';
}

function guitars() {
    var item = '<img src="images/tiny.png">';
    var result;

    for(var i = 0; i < 3; i++){
        result = result + '<h3>' + item + '</h3>';
    }
    return result;
}



