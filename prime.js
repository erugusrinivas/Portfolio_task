//  var marks=90;
 for(var i=2;i<=100;i++){
    for(var j=2;j<=100;j++){
        if(i%j==0){
            break;
        }
    }
    if(i==j){
        console.log(i);
    }
 }