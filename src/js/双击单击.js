//点击效果示范
var isdb;
function aa() {
    isdb = false;
    window.setTimeout(cc, 500);
    function cc() {
        if (isdb != false)return;
        alert("这是单击")
    }
}
function bb() {
    isdb = true;
    alert("这是双击")
}
