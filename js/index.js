// 下载APP
var oXiazai = document.getElementsByClassName("xiazai")[0];
var oYincang = document.getElementsByClassName("yincang")[0];
oXiazai.onmouseover = function(){
    oYincang.style.display = "block";
}
oXiazai.onmouseout = function(){
    oYincang.style.display = "none";
}
// 购物车变色
var oTo2_a = document.getElementsByClassName("to2_a")[0];
var oImg1 = document.getElementsByClassName("img1")[0];

oTo2_a.onmouseover = function(){
    oImg1.src="./img/xm_1100000359.png";
}
oTo2_a.onmouseout = function(){
    oImg1.src="./img/xm_1100000358.png";
}

// 框
var oTopbar2 = document.getElementsByClassName("topbar2")[0];
var oKuang = document.getElementsByClassName("kuang")[0];
oTopbar2.onmouseover = function(){
    oKuang.style.display = "block";
}
oTopbar2.onmouseout = function(){
    oKuang.style.display = "none";
}

//给所有的按钮添加点击事件
var oDh2_li = document.getElementsByClassName("dh2_li");
var oDh2_box1 = document.getElementsByClassName("dh2_box1");
for(var i=0;i<oDh2_li.length;i++){
    oDh2_li[i].index = i;
    oDh2_li[i].onmouseover = function(){
        //当点击按钮时给按钮加上active类名
        // this.className = "btn active";
        //除了当前选择的按钮以外清除其他的所有按钮的ative类
        //先清除全部的active类，再找到当前的添加上active类即可
        //清楚全部按钮的active类
        for(var j=0;j<oDh2_li.length;j++){
            oDh2_li[j].className = "dh2_li";
            //先隐藏全部的盒子
            oDh2_box1[j].style.display="none";
        }
        //再找到当前添加上active类
        this.className = "dh2_li active";
        //显示当前按钮索引下标对应的盒子
        oDh2_box1[this.index].style.display="block";
    }
    oDh2_li[i].onmouseout = function(){
        oDh2_box1[this.index].style.display="none";
        this.className = "dh2_li";
    } 
}
for(var i=0;i<oDh2_li.length;i++){
    oDh2_box1[i].index = i;
    oDh2_box1[i].onmouseover = function(){
        oDh2_box1[this.index].style.display="block";
    }
    oDh2_box1[i].onmouseout = function(){
        oDh2_box1[this.index].style.display="none";
    } 
}
// 箭头移入移出
var oPrev = document.getElementsByClassName("prev")[0];
var oNext = document.getElementsByClassName("next")[0];
oPrev.onmouseover = function(){
    oPrev.className = "prev1"
}
oPrev.onmouseout = function(){
    oPrev.className = "prev"
}
oNext.onmouseover = function(){
    oNext.className = "next1"
}
oNext.onmouseout = function(){
    oNext.className = "next"
}
// 点点
var oLunbo_a = document.getElementsByClassName("lunbo_a");
var oDian = document.getElementsByClassName("dian");
var index = 0;
for(var i=0;i<oDian.length;i++){
    oDian[i].index = i;
    oDian[i].onclick = function(){
        for(var j=0;j<oDian.length;j++){
            oDian[j].className = "dian";
            oLunbo_a[j].style.display="none";
        }
        this.className = "dian dian1";
        oLunbo_a[this.index].style.display="block";
    }
}
for(var i=0;i<oDian.length;i++){
        oDian[i].index = i;
        function change(){
            for(var j=0;j<oDian.length;j++){
                oDian[j].className = "dian";
                oLunbo_a[j].style.display="none";
            }
            this.className = "dian dian1";
            oLunbo_a[this.index].style.display="block";
        }
    }
// 箭头
oPrev.onclick = function (){
    index--;  //当前的图片张数减
    if(index == -1){//当判断得出是第一张时，要从最后一张开始再次循环往前减
        index = oDian.length-1;
    }
    change()
}
oNext.onclick = function (){
    index++;  //当前的图片张数减
    if(index ==  oDian.length){//当判断得出是最后一张时，要从第一张开始再次循环往后加
        index = 0;
    }
    change()
}
var oLunbo = document.getElementsByClassName("lunbo")[0];
// 实现自动播放
var timer = setInterval(oNext.onclick,3000);
//鼠标移入大盒子关闭定时器
oLunbo.onmouseover = function (){
    clearInterval(timer);
}
oLunbo.onmouseout = function (){
    timer = setInterval(oNext.onclick,3000);
}


// 选项卡
var oXxk_li = document.getElementsByClassName("xxk_li");
var oXxk_yc_box = document.getElementsByClassName("xxk_yc_box");
for(var i=0;i<oXxk_li.length;i++){
    oXxk_li[i].index = i;
    oXxk_li[i].onmouseover = function(){
        for(var j=0;j<oXxk_li.length;j++){
            oXxk_yc_box[j].style.display="none";
        }
        oXxk_yc_box[this.index].style.display="block";
    }
    oXxk_li[i].onmouseout = function(){
        oXxk_yc_box[this.index].style.display="none";
    } 
}
for(var i=0;i<oDh2_li.length;i++){
    oXxk_yc_box[i].index = i;
    oXxk_yc_box[i].onmouseover = function(){
        oXxk_yc_box[this.index].style.display="block";
    }
    oXxk_yc_box[i].onmouseout = function(){
        oXxk_yc_box[this.index].style.display="none";
    } 
}

var oGga = document.getElementsByClassName("gga");
var oCent2_div2 = document.getElementsByClassName("cent2_div2");
for(var i=0;i<oGga.length;i++){
    oGga[i].index = i;
    oGga[i].onmouseover = function(){
        for(var j=0;j<oGga.length;j++){
            oGga[j].className = "gga";
            oCent2_div2[j].style.display="none";
        }
        //再找到当前添加上active类
        this.className = "gga gga1";
        //显示当前按钮索引下标对应的盒子
        oCent2_div2[this.index].style.display="block";
    } 
}
// 3个的
var oXuanze = document.getElementsByClassName("xuanze");
var oLizi = document.getElementsByClassName("lizi");
for(var i=0;i<oXuanze.length;i++){
    oXuanze[i].index = i;
    oXuanze[i].onmouseover = function(){
        for(var j=0;j<oXuanze.length;j++){
            oXuanze[j].className = "xuanze";
            oLizi[j].style.display="none";
        }
        //再找到当前添加上active类
        this.className = "xuanze xuanze1";
        //显示当前按钮索引下标对应的盒子
        oLizi[this.index].style.display="block";
    } 
}

// 2个的
var oBtn = document.getElementsByClassName("btn");
var oLizi1 = document.getElementsByClassName("lizi1");
for(var i=0;i<oBtn.length;i++){
    oBtn[i].index = i;
    oBtn[i].onmouseover = function(){
        for(var j=0;j<oBtn.length;j++){
            oBtn[j].className = "btn";
            oLizi1[j].style.display="none";
        }
        //再找到当前添加上active类
        this.className = "btn twoa1";
        //显示当前按钮索引下标对应的盒子
        oLizi1[this.index].style.display="block";
    } 
}

// 3下面的第二个
var oBtn0 = document.getElementsByClassName("btn0");
var oLizi2 = document.getElementsByClassName("lizi2");
for(var i=0;i<oBtn0.length;i++){
    oBtn0[i].index = i;
    oBtn0[i].onmouseover = function(){
        for(var j=0;j<oBtn0.length;j++){
            oBtn0[j].className = "btn0";
            oLizi2[j].style.display="none";
        }
        //再找到当前添加上active类
        this.className = "btn0 twoa1";
        //显示当前按钮索引下标对应的盒子
        oLizi2[this.index].style.display="block";
    } 
}
// 3下面的第三个
var oBtn3 = document.getElementsByClassName("btn3");
var oLizi3 = document.getElementsByClassName("lizi3");
for(var i=0;i<oBtn3.length;i++){
    oBtn3[i].index = i;
    oBtn3[i].onmouseover = function(){
        for(var j=0;j<oBtn3.length;j++){
            oBtn3[j].className = "btn3";
            oLizi3[j].style.display="none";
        }
        //再找到当前添加上active类
        this.className = "btn3 twoa1";
        //显示当前按钮索引下标对应的盒子
        oLizi3[this.index].style.display="block";
    } 
}

// 视频
var oSp_a = document.getElementsByClassName("sp_a");
var oSp_kuang = document.getElementsByClassName("sp_kuang");
var oClose = document.getElementsByClassName("close");
var oFuji = document.getElementsByClassName("fuji")[0];
var oVideo_1 = document.getElementsByClassName("video_1");
for(var i=0;i<oSp_a.length;i++){
    oSp_a[i].index = i;
    oSp_a[i].onclick = function(){
        for(var j=0;j<oSp_a.length;j++){
            oSp_kuang[j].style.display="none";
        }
        oSp_kuang[this.index].style.display="block";
    } 
    oClose[i].onclick = function(){
        for(var k=0;k<oClose.length;k++){
            oSp_kuang[k].style.display="none";
        }
    } 
}

// 微博 微信
var oVb = document.getElementsByClassName("vb")[0];
var oVx = document.getElementsByClassName("vx")[0];
var oVx_box = document.getElementsByClassName("vx_box")[0];
oVb.onmouseover = function(){
    oVb.src="./img/wb.png";
}
oVb.onmouseout = function(){
    oVb.src="./img/xm_1100000482.png";
}
oVx.onmouseover = function(){
    oVx.src="./img/wx.png";
    oVx_box.style.display="block";
}
oVx.onmouseout = function(){
    oVx.src="./img/xm_1100000483.png";
    oVx_box.style.display="none";
}

// 侧边导航
var oItem = document.getElementsByClassName("item");
var oItem1 = document.getElementsByClassName("item1")[0];
var oItem2 = document.getElementsByClassName("item2")[0];
var oItem3 = document.getElementsByClassName("item3")[0];
var oItem4 = document.getElementsByClassName("item4")[0];
var oItem5 = document.getElementsByClassName("item5")[0];
var oItem6 = document.getElementsByClassName("item6")[0];
var oFirst = document.getElementsByClassName("first");
var oFirst1 = document.getElementsByClassName("first1")[0];
var oFirst2 = document.getElementsByClassName("first2")[0];
var oFirst3 = document.getElementsByClassName("first3")[0];
var oFirst4 = document.getElementsByClassName("first4")[0];
var oFirst5 = document.getElementsByClassName("first5")[0];
var oFirst6 = document.getElementsByClassName("first6")[0];
var oNav_yc = document.getElementsByClassName("nav_yc")[0];
oItem1.onmouseover = function(){
    oNav_yc.style.display="block";
    oFirst1.src="./img/xm_1100000350.png";
}
oItem1.onmouseout = function(){
    oNav_yc.style.display="none";
    oFirst1.src="./img/xm_1100000349.png";
}
oItem2.onmouseover = function(){
    oFirst2.src="./img/xm_1100000353.png";
}
oItem2.onmouseout = function(){
    oFirst2.src="./img/xm_1100000352.png";
}
oItem3.onmouseover = function(){
    oFirst3.src="./img/xm_1100000355.png";
}
oItem3.onmouseout = function(){
    oFirst3.src="./img/xm_1100000354.png";
}
oItem4.onmouseover = function(){
    oFirst4.src="./img/xm_1100000357.png";
}
oItem4.onmouseout = function(){
    oFirst4.src="./img/xm_1100000356.png";
}
oItem5.onmouseover = function(){
    oFirst5.src="./img/xm_1100000359.png";
}
oItem5.onmouseout = function(){
    oFirst5.src="./img/xm_1100000358.png";
}
oItem6.onmouseover = function(){
    oFirst6.src="./img/top2.png";
}
oItem6.onmouseout = function(){
    oFirst6.src="./img/top1.png";
}
for(var i=0;i<oItem.length;i++){
    oItem[i].index = i;
    window.onscroll = function (){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop>=500){
            oItem[5].style.display = "block";
        }else{
            oItem[5].style.display = "none";
        }
        oItem[5].onclick = function(){
            document.documentElement.scrollTop = document.body.scrollTop = 0
        }
    }
}

// 搜索
var oFdj = document.getElementsByClassName("fdj")[0];
var oSubmit = document.getElementsByClassName("submit")[0];
var oSearch1 = document.getElementsByClassName("search1")[0];
var oHezi = document.getElementsByClassName("hezi")[0];
var oHezi_li = document.getElementsByClassName("hezi_li");
oFdj.onmouseover = function(){
    oSubmit.style.backgroundColor = "#ff6700";
}
oFdj.onmouseout = function(){
    oSubmit.style.backgroundColor = "#fff";
}
oSubmit.onmouseover = function(){
    oSubmit.style.backgroundColor = "#ff6700";
}
oSubmit.onmouseout = function(){
    oSubmit.style.backgroundColor = "#fff";
}
oSearch1.onmousedown = function (){
    if(oHezi.style.display == "block"){
        oHezi.style.display = "none";
        oSearch1.style.border = "";
        oSubmit.style.border = "";
    }else{
        oHezi.style.display = "block";
        oSearch1.style.border= "1px solid #ff6700";
        oSubmit.style.border = "1px solid #ff6700";
        for(var i=0;i<oHezi_li.length;i++){
            oHezi_li[i].index = i;
            oHezi_li[i].onmouseover = function (){
                this.style.background = "#f5f5f5";
            }
            oHezi_li[i].onmouseout = function (){
                this.style.background = "#fff"
            }
        }
    }
}