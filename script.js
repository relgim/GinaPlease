const input = document.getElementById('myText');

input.addEventListener("input", updateValue);

var trueAnswer = '';
var recording = false;
var prevNum = 5;
var ginaAnswers = [
  'let me get cereal!',
  'let me take another hit.',
  'sorry, my friend is messaging me...',
  'eh, don\'t ask me.',
  'Eh, I don\'t know.',
  'valorant?',
  'idk, maybe three?'
]

var input3 = document.getElementById("myText2");

// Execute a function when the user presses a key on the keyboard
input3.addEventListener("keypress", enterEvent);
input.addEventListener("keypress", enterEvent);

function enterEvent(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    document.getElementById("myBtn").click();
  }
}

function doSomething(){
  if(trueAnswer.length > 1)
    document.getElementById("answer").textContent = 'Gina Says...' + trueAnswer;
  else{
    if(document.getElementById('myText2').value.length > 0){
      if(document.getElementById('myText').value.length > 0){
        var randomNumber = Math.floor(Math.random() * (ginaAnswers.length));
        while(prevNum == randomNumber)
          randomNumber = Math.floor(Math.random() * (ginaAnswers.length));
        document.getElementById("answer").textContent = 'Gina Says... ' + ginaAnswers[randomNumber];
      }
      else{
        document.getElementById("answer").textContent = 'You must ask a valid Petition.';
      }
    }
    else{
      document.getElementById("answer").textContent = 'You must ask a valid Question.';
    }
  }

  trueAnswer = '';
  recording = false;
  document.getElementById("myText").value = '';
  document.getElementById("myText2").value = '';
}
function updateValue(e){

  var num = this.selectionStart;

  const fakeString = 'Gina please answer the following question                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ';
  const string = e.target.value;



  if(string.charAt(num-1)=='.'){
    recording = !recording;
  }

  if(recording){

    if(string.charAt(num-1) !='.')
      trueAnswer += string.charAt(num-1);
    console.log(trueAnswer)

    if(string.length == num){
      document.getElementById("myText").value = string.substring(0, num-1) + fakeString.charAt(num-1);
    }
    if(string.length != num ){
      document.getElementById("myText").value = string.substring(0, num-1) + fakeString.charAt(num-1) + string.substring(num, string.length-1);
    }
    

    //document.getElementById("myText").value = 
  }

  if(!recording && string.charAt(num-1)=='.'){
    if(string.length == num){
      document.getElementById("myText").value = string.substring(0, num-1) + fakeString.charAt(num-1);
    }
    if(string.length != num ){
      document.getElementById("myText").value = string.substring(0, num-1) + fakeString.charAt(num-1) + string.substring(num, string.length-1);
    }
  }
}

function setCaretPosition(elemId, caretPos) {
  var elem = document.getElementById(elemId);

  if(elem != null) {
      if(elem.createTextRange) {
          var range = elem.createTextRange();
          range.move('character', caretPos);
          range.select();
      }
      else {
          if(elem.selectionStart) {
              elem.focus();
              elem.setSelectionRange(caretPos, caretPos);
          }
          else
              elem.focus();
      }
  }
}

