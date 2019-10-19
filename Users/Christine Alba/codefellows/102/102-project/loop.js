function guitars() {
    var item = '<img src="images/guitar.jpg">';
    var result;

    for(var i = 0; i < 3; i++){
        result = result + '<p>' + item + '</p>';
    }
    return item;
}