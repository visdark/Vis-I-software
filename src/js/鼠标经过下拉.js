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
