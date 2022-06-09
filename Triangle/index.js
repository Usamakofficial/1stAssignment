function triangle(){
    debugger
    var length=10;
    var line = ";"
    for (var i = 1; i<=length; i++){
        for (var j = 1; j<= i; j++){
            line += "*";
        }
        line += "<br>";
    }
    return document.write(line);
}