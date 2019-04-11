function voltear(str) {
  var newWord = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newWord += str[i];
  }
  return newWord;
}

function randomChar(){
    var text = "";
    var possible = "abcdefghijklmnñopqrstuvwxyz";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

function generate(){
  
  var items = [
    ["", "", "", "", "","<br>"],
    ["", "", "", "", "","<br>"],
    ["", "", "", "", "","<br>"],
    ["", "", "", "", "","<br>"],
    ["", "", "", "", "","<br>"],
  ];
  
  var lrword = document.getElementById("lr-word").value.toLowerCase();
  var rlword = voltear(document.getElementById("rl-word").value.toLowerCase());
  var udword = document.getElementById("ud-word").value.toLowerCase();
  var duword = voltear(document.getElementById("du-word").value.toLowerCase());
  var luword = document.getElementById("lu-word").value.toLowerCase();
  var ldword = voltear(document.getElementById("ld-word").value.toLowerCase());
  var ruword = document.getElementById("ru-word").value.toLowerCase();
  var rdword = voltear(document.getElementById("rd-word").value.toLowerCase());

  var lri = Math.floor(Math.random() * 5); 
  var lrj = Math.floor(Math.random() * 5); 
  items[lri][lrj] = lrword;

  var rli = Math.floor(Math.random() * 5); 
  var rlj = Math.floor(Math.random() * 5); 
  items[rli][rlj] = rlword;
  
  var udi = Math.floor(Math.random() * 5); 
  var udj = Math.floor(Math.random() * 5); 
  items[udi][udj] = udword;

  var dui = Math.floor(Math.random() * 5); 
  var duj = Math.floor(Math.random() * 5); 
  items[dui][duj] = duword;

  var lui = Math.floor(Math.random() * 5); 
  var luj = Math.floor(Math.random() * 5); 
  items[lui][luj] = luword;

  var ldi = Math.floor(Math.random() * 5); 
  var ldj = Math.floor(Math.random() * 5); 
  items[ldi][ldj] = ldword;

  var rui = Math.floor(Math.random() * 5); 
  var ruj = Math.floor(Math.random() * 5); 
  items[rui][ruj] = ruword;

  var rdi = Math.floor(Math.random() * 5); 
  var rdj = Math.floor(Math.random() * 5); 
  items[rdi][rdj] = rdword;
  
  
  for(var i = 0; i<5; i++){
    for(var j = 0; j<5; j++){
      if(items[i][j] === ""){
        items[i][j] = randomChar();
      }
    }
  }

  var endSoup = items.join("");

  var words = document.getElementById("words");
  words.innerHTML = endSoup;
  
}