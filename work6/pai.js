//“计算”按钮点击处理函数
//function calculate(){
    function calculate(){
    //读取阶数输入框的数值
    let num = document.getElementById('num').value
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        //设置圆周率输入框的值
        document.getElementById('pai').value =pi(num)
    }
}

//声明阶乘函数n！  factorial（）
function factorial(n){
    //声明阶乘汇总数并赋值为1
    let sum = 1
    //for循环累乘
    for(let i=1;i<=n;++i){
       sum *= i
    }
    //返回阶乘汇总数
return sum
}
function oddFactorial(n){
    let sum = 1 
    for(let i=1; i<=n;++i){
        sum *= ((2*i) +1)
    }
return sum
}
function pi(num){
    let sum = 0
    for(let i =0;i<=num;++i){
        let dividend = factorial(i)
        let divisor = oddFactorial(i)
        sum +=(dividend/divisor)
    }
    return sum*2
}
calculate()