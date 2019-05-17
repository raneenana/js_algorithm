var small = document.querySelector(".small"),
    glass = document.querySelector(".glass"),
    big = document.querySelector(".big"),
    bg = document.querySelector(".bg"),
    pos = null,
    fd = null;
small.onmouseover = function() {
    glass.style.display = "block";
    big.style.display = "block";
    //设置的放大镜变量只能在放大镜显示以后设置如果放大镜不显示的话设置以后是不能打印出来放大镜的宽高
    fd = {
        //获取放大镜的宽高
        w: glass.offsetWidth,
        h: glass.offsetHeight
    };
    //求出大盒子的宽与放大镜的宽的比值
    scal = big.offsetHeight / glass.offsetHeight
    console.log(scal)
}
small.onmouseout = function() {
    glass.style.display = "none";
    big.style.display = "none";
}
small.addEventListener("mousemove", function(e) {
    var eve = e || event;
    pos = {
        x: eve.pageX - small.offsetLeft - fd.w / 2,
        y: eve.pageY - small.offsetTop - fd.h / 2
    };
    if (pos.x < 0) {
        pos.x = 0;
    }
    if (pos.y < 0) {
        pos.y = 0;
    }
    if (pos.x > small.offsetWidth - fd.w) {
        pos.x = small.offsetWidth - fd.w;
    }
    if (pos.y > small.offsetHeight - fd.h) {
        pos.y = small.offsetHeight - fd.h;
    }
    glass.style.left = pos.x + "px";
    glass.style.top = pos.y + "px";
    bg.style.left = -pos.x * scal + "px"
    bg.style.top = -pos.y * scal + "px"
    console.log(pos)
})