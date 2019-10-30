function stat() {
    let str = document.getElementById("str").value
    let obj = {}
    str.split('').reduce((pre, item) => {
        pre[item] ? pre[item]++ : pre[item] = 1
        return obj
    }, {})
    document.getElementById('result').innerText = JSON.stringify(obj)
}