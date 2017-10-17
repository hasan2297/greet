// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('John', 'Doe','es');

// use our chainable methods
g.greet(true).log().validate('abcd');
g.HTMLGreeting("#greeting",true);
// let's use our object on the click of the login button
$('#login').click(function() {
   
    // create a new 'Greetr' object (let's pretend we know the name from the login)
    var loginGrtr = G$('Mike', 'Ross');
    
     // hide the login on the screen
    $('#logindiv').hide();
    
     // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
    
});