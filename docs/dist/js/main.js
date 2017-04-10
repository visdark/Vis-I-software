//关闭ID
function close(id) {
    document.getElementById(id).style.display = "none";
}

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

// 布局样式添加CSS
function add_css(s, m) {
    var t = document.getElementById(m);
    t.className = "buju-box " + s;
}

// 按钮添加属性on 事件添加属性go
function doAct(s, m) {
    var t = document.getElementById(m),
        c = s.className;
    if (c != null && c.indexOf(' on') > -1) {
        s.className = c.replace(' on', '');
        t.className = t.className.replace(' go', '');
    } else {
        s.className = c + ' on';
        t.className = t.className + ' go';
    }
}

//导航特效JS
document.onmousemove = function (ev) {
    var oEvent = ev || event;
    var oDiv = document.getElementById('foot');
    var aImg = oDiv.getElementsByTagName('img');
    var d = 0;
    var iMax = 200;
    var i = 0;

    function getDistance(obj) {
        return Math.sqrt
        (
            Math.pow(obj.offsetLeft + oDiv.offsetLeft - oEvent.clientX + obj.offsetWidth / 2, 2) +
            Math.pow(obj.offsetTop + oDiv.offsetTop - oEvent.clientY + obj.offsetHeight / 2, 2)
        );
    }

    for (i = 0; i < aImg.length; i++) {
        d = getDistance(aImg[i]);
        d = Math.min(d, iMax);

        aImg[i].width = ((iMax - d) / iMax) * 24 + 48;
    }
};


//鼠标经过和显示
function MM_over(s,m) {
    var t = document.getElementById(m);
    c = s.className;
    t.className = t.className.replace(' rep', '');
    t.className = t.className + ' block';
}
function MM_out(s,m) {
    var t = document.getElementById(m);
    c = s.className;
    t.className = t.className.replace(' block', '');
    t.className = t.className + ' rep';

}
