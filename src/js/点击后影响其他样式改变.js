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
