//当前的年份
let year = new Date().getFullYear()
//调用calender函数，设置cal内容显示年历
document.getElementById("cal").innerHTML = calender(year)

function setCalender(year) {
    document.getElementById('cal').innerHTML = '<div class="box" id="cal"></div>';

    var year = parseInt(year);
    //preyear 前一年
    var pre = year - 1
    var next = year + 1
    //curyear 
    // nextyear  下一年
    //设置cal显示年历   
    document.getElementById('curyear').setAttribute('data-year', year);
    document.getElementById('preyear').setAttribute('data-year', pre);
    document.getElementById('nextyear').setAttribute('data-year', next);

    document.getElementById('curyear').innerText = year
    document.getElementById('preyear').innerText = "<<" + pre
    document.getElementById('nextyear').innerText = + next + ">>"

    document.getElementById("cal").innerHTML = calender(year)

}
