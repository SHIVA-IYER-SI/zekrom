function rpsgame(yourchoice){
    var humanchoice,botchoice;
    humanchoice = yourchoice.id;

    botchoice = numberToChoice(randTopRpsInt());
    results = decidewinner(humanchoice,botchoice);
    message = finalmessage(results);
    rpsfrontend(yourchoice.id,botchoice,message);

}

function randTopRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return['rock','paper','scissors'][number];

}

function decidewinner(yourchoice,computerchoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5,'paper':0},
        'paper': {'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper': 1,'scissors': 0.5,'rock': 0}
    };

    var yourscore = rpsDatabase[yourchoice][computerchoice];
    var computerscore = rpsDatabase[computerchoice][yourchoice];

    return [yourscore,computerscore];

}

function finalmessage([yourscore,computerscore]){
    if (yourscore  ===0){
        return{'message': 'You lost!','color':'red'};
    }else if (yourscore ===0.5){
        return{'message': 'You tied!','color':'yellow'};
    }else{
        return{'message': 'You won!','color':'green'};
    }
}

function rpsfrontend(humanimgchoice,botimgchoice,finalmessage){
    var imgdatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,

   
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imgdatabase[humanimgchoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalmessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalmessage['message']+"</h1>"
    botDiv.innerHTML = "<img src='" + imgdatabase[botimgchoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
  
    




}

