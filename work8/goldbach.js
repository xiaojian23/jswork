function gede(a){
    let result = document.getElementById('result')
    let odd = parseInt(document.getElementById('odd').value)

    var sum =0 ;
    for(var i=1;i<=a;i++){
        if(a% i == 0){
            sum++;
        }
        result.value = gede(a,j,i)
    }
    if(sum==2){
        return true;
    }else{
        return false;
    }
}
function isTrue(a){
    for(var i=2;i<a-2;i++){
        var j =a-i;
        if(gede(i)&&gede(j)){
        }
    }
}

