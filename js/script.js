


//click the GO button
$('#go').click(function() {
    
    
    function checkIfComplete(){
    if( isComplete == false) {
        isComplete = true;
       
    } else {
        place = 'second';
        
    }
        
    }
    
    //get the width of the cars
    var carWidth = $('#car1').width();
    
    // set the width of the raceTrack
    var raceTrackWidth = $(window).width() - carWidth;
    
    // generate a random number between 1 to 5000
    var raceTime1 = Math.floor( (Math.random() * 5000) + 1);
    var raceTime2 = Math.floor( (Math.random() * 5000) + 1);
    
    //set a flag variable to false
    var isComplete = false;
    
    // set a flag variable to first by default
    var place = 'first';
    
    //animate the car 1 
    $('#car1').animate({
        //move the carWidth
        left: raceTrackWidth
        
        
        
    }, raceTime1, function(){
        
        //animation is complete
        //run a function
        
        checkIfComplete();
        
        //give some text
        
        $('#raceInfo1 span').text(' Finished in ' + place + 'place and clocked at ' + raceTime1 + 'milliseconds! ');
        
    });
    
        //animate the car 2 
    $('#car2').animate({
        //move the carWidth
        left: raceTrackWidth
        
        
        
    }, raceTime2, function(){
        
        //animation is complete
        //run a function
        
        checkIfComplete();
        
        //give some text
        
        $('#raceInfo2 span').text(' Finished in ' + place + 'place and clocked at ' + raceTime2 + 'milliseconds! ');
        
    });
    
    
    
});


// set Reset

$('#reset').click( function() {
    
    $('.car').css('left', '0');
    $('.raceInfo span').text('');
    
    
    
});










