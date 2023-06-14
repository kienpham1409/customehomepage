function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function swapmic(){
    if (document.getElementById("micid").src.endsWith('mic-mute-fill.svg') == true)  //Comparison
    { 
         document.getElementById("micid").src = "mic-fill.svg"; //assignment  

     } 
     else if (document.getElementById("micid").src.endsWith('mic-fill.svg') == true) 
     { 
        document.getElementById("micid").src = "mic-mute-fill.svg"; 
        
    }
}
function swapspeaker(){
    if (document.getElementById("speakerid").src.endsWith('volume-mute-fill.svg') == true)  //Comparison
    { 
         document.getElementById("speakerid").src = "volume-off-fill.svg"; //assignment  

     } 
     else if (document.getElementById("speakerid").src.endsWith('volume-off-fill.svg') == true) 
     { 
        document.getElementById("speakerid").src = "volume-up-fill.svg"; 
        
    }
     else if (document.getElementById("speakerid").src.endsWith('volume-up-fill.svg') == true) 
     { 
        document.getElementById("speakerid").src = "volume-mute-fill.svg"; 
       
    }
}



var message = document.querySelector('#message');

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var grammar = '#JSGF V1.0;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'vi-VN';
recognition.interimResults = false;

recognition.onresult = function(event) {
    var lastResult = event.results.length - 1;
    var content = event.results[lastResult][0].transcript;
    message.textContent = 'Voice Input: ' + content + '.';
};

recognition.onspeechend = function() {
    recognition.stop();
};

recognition.onerror = function(event) {
    message.textContent = 'Error occurred in recognition: ' + event.error;
}

document.querySelector('#btnTalk').addEventListener('click', function(){
    recognition.start();
});