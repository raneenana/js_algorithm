;window.onload = function(){
	function $(idName){
		return document.querySelector(idName);
	}
	// 1) 获取节点
	var user = $("#text"),
		content = $("#content"),
		btn = $("#btn"),
		hideBtn = $("#btn1"),
		count = $("#aid"),
		mText = $("#message_text"),
		ulId = $("#ulId");
	// 2) 点击提交按钮
	btn.onclick = function(){
		if( user.value == "" || content.value == "" ){
			alert( "您还没有输入用户名或评论内容" );
		}else{
			// 1> 创建节点
			var oLi = document.createElement("li");
			// 2> 设置节点
			oLi.innerHTML = `<img src="img/userBj.png">
						     <h3>${user.value}</h3>
						     <h5>${new Date().toLocaleString()}</h5>
						     <p>${content.value}</p>`;
			// 3> 追加节点
			ulId.insertBefore( oLi , ulId.firstChild );
			mText.style.display = "block";// 显示评论的盒子
			count.innerHTML = +count.innerHTML + 1;// 评论个数计数
			user.value = "";
			content.value = "";
		}
	}

	// 3) 点击显示隐藏按钮
	hideBtn.onclick = function(){
		if(this.innerHTML == "隐藏留言"){
			ulId.style.display = "none";// 隐藏评论的盒子
			this.innerHTML = "显示留言";
		}else{
			ulId.style.display = "block";// 显示评论的盒子
			this.innerHTML = "隐藏留言";
		}
	}
};