// 获取非行间样式
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,null)[attr];
    }
}

// 通过类名获取元素
function getByClass(sParent,sClass){
    var aResult = [];
    var aEle = sParent.getElementsByTagName("*");
    for(var i=0;i<aEle.length;i++){
        if(aEle[i].className == sClass){
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}


// 考虑属性:正常属性(width,height,left,top),非正常(opacity)
// 参数:目标值--iTarget,具体的属性--attr,具体元素--obj
function startMove(obj,attr,iTarget){
    clearInterval(obj.timer);
    var cur = 0;
    obj.timer = setInterval(function (){
        if(attr == "opacity"){
            cur = Math.round(parseFloat(getStyle(obj,attr))*100)
        }else{
            cur = parseInt(getStyle(obj,attr));
        }
        var speed = (iTarget-cur)/8;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);
        
        if(cur == iTarget){
            clearInterval(obj.timer);
        }else{
            if(attr == "opacity"){
                obj.style.opacity = (cur+speed)/100;
            }else{
                obj.style[attr] = cur+speed+"px";
            }
        }
    },30);
}