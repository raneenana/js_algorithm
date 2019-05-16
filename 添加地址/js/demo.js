window.onload = function() {
    //获取添加地址按钮
    var btn = document.getElementById("btn");
    //获取遮罩层
    var mark = document.getElementById("mark");
    //获取第一个文本框(地址框)
    var addres = document.getElementById("addres");
    //获取第二个文本框(门牌号)
    var number = document.getElementById("number");
    //获取用来存储地址的ul
    var ulId = document.getElementById("ulId");
    //获取添加按钮
    var add = document.getElementById("add");
    //获取取消按钮
    var res = document.getElementById("res");

    btn.onclick = function() {
        //清除hide类 显示蒙层
        mark.classList.remove("hide");

        //给添加按钮绑定事件
        add.onclick = function() {
            //创建li节点
            var oLi = document.createElement("li");
            //将两个文本框中的value写入到新建的li中
            oLi.innerHTML = `地址:${addres.value} 门牌号:${number.value}`;
            ulId.appendChild(oLi); //将新建li追加到ul中
            mark.classList.add("hide"); //隐藏蒙层
            //清除文本框中的内容
            addres.value = "";
            number.value = "";
            //重新绑定删除
            remove();


        }
        res.onclick = function() {
            mark.classList.add("hide");
            //清除文本框中的内容
            addres.value = "";
            number.value = "";
        }


    }

    function remove() {
        for (var i = 0; i < ulId.children.length; i++) {
            ulId.children[i].onclick = function() {
                ulId.removeChild(this);
            }
        }

    }
    remove();



}