function goldbach(){
    let odd = document.getElementById("odd").value
    let huizhi = parseFloat(document.getElementById('odd').value)
    if(isNaN(huizhi)){
        alert('请输入有效的数字')
        return false
    }else{
         isTrue(odd)
    }
   return
}
function bach(i){
    var sum = 0;
    for(var d=1;d<=i;d++){
        if(i% d == 0){
            sum++;
        }
    }
    if(sum==2){
        return true;
    }else{
        return false;
    }
    }
    function isTrue(odd){
    //     let ts =parseInt(document.getElementById('odd').value)
    //     if(isNaN(odd)){
    //         alert('请输入有效的数字')
    //         return false
    //     }else{
    //         isTrus(odd)
    //     }
    //     return
    // }

        let str="";
        b = document.getElementById("odd").value
        b = parseInt(odd);
     for(var x=2;x<odd;x++){
        var y =odd-x;
        if(bach(x)&&bach(y)&&x<=y){
       str +=(odd+"可以拆分为两个质数" +x +"与" +y +"的和"+ '<br>')
        }
    }
    document.getElementById('goldbach').innerHTML = str;
    }

