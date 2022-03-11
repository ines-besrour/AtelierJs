
(function(nbre){
    var x=(Math.random())*10;
    x=Math.round(x);
    console.log(x);
    let flag=false;
    while (nbre>0 && flag==false){

        let a=prompt("Guess the number");
        if (a==x){
            alert("Congrats !! You won :)");
            flag=true;
        } else {
        }
        nbre--;
    }
})(nbre=5);
