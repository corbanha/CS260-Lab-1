/*var num = 0;
function ChangeBackgroundColor(){
    console.log("Clicked!");
    //document.body.bgcolor='rgb(' + num*30 + ',' + num*30 + ',' + num*4 + ')';
    document.getElementById("body").style.backgroundColor = 'rgb(' + num*10 + ',' + num*12 + ',' + num*4 + ')';
    num++;
    if(num >= 35){
        num = 0;
    }
}*/

var randColors = ["#03F7EB", "#DB2B39", "#01295F", "#E98A15", "#F4E409", "#ADFCF9", "#E55934", "#D9594C", "#F1DB4B", "#B7B868",
    "#09814A", "#CC3F0C", "#D8CBC7", "#9A6D38", "#E9724C", "#FFC857", "#481D24", "#255F85", "#5DA271", "#D4A0A7", "#643173", "#7D5BA6", "#7D7E75"];

function Surprise(){
    
    document.body.style.backgroundColor = randColors[Math.floor(Math.random() * randColors.length)];
    
    var h1Elements = document.getElementsByTagName("h1");
    var h2Elements = document.getElementsByTagName("h2");
    var h3Elements = document.getElementsByTagName("h3");
    var pElements = document.getElementsByTagName("p");
    var rows = document.getElementsByClassName("row");
    var aElements = document.getElementsByTagName("a");
    
    
    for(var i = 0; i < h1Elements.length; i++){
        h1Elements[i].style.color = randColors[Math.floor(Math.random() * randColors.length)];
    }
    
    for(var i = 0; i < h2Elements.length; i++){
        h2Elements[i].style.color = randColors[Math.floor(Math.random() * randColors.length)];
    }
    
    for(var i = 0; i < h3Elements.length; i++){
        h3Elements[i].style.color = randColors[Math.floor(Math.random() * randColors.length)];
    }
    
    for(var i = 0; i < pElements.length; i++){
        pElements[i].style.color = randColors[Math.floor(Math.random() * randColors.length)];
    }
    
    for(var i = 0; i < rows.length; i++){
        rows[i].style.backgroundColor = randColors[Math.floor(Math.random() * randColors.length)];
    }
    
    for(var i = 0; i < aElements.length; i++){
        aElements[i].style.color = randColors[Math.floor(Math.random() * randColors.length)];
    }
    
    //let's color the button
    var button = document.getElementById("UnsuspectingButton");
    button.style.backgroundColor = randColors[Math.floor(Math.random() * randColors.length)];
    button.style.color = randColors[Math.floor(Math.random() * randColors.length)];
    //button.style.fontSize = (button.style.fontSize.substring(0, button.style.fontSize.length - 2) + 1 - .9) + "em";
    //console.log(button.style.fontSize);
    //console.log(button.style.fontSize.substring(0, button.style.fontSize.length - 2));
    //document.getElementsByClassName();
}