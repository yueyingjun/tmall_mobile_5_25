window.onload = function() {
	lunbo();
	setInterval(function() {
		moveDiv("tianmaobangdan-renqibang-big-right-box1","tianmaobangdan-renqibang-big-right-box2");
	},3000);
}

function getElementById(id) {
	return document.getElementById(id);
}
function getElementsByClassName(className) {
	return document.getElementsByClassName(className);
}

function moveDiv(id_1,id_2) {
			var insert = function(nodeInsert,nodeTo) {
				if(nodeInsert.insertAdjacentElement) {
					nodeTo.insertAdjacentElement("beforeBegin",nodeInsert);
				}else {
					nodeTo.parentNode.insertBefore(nodeInsert,nodeTo);
				}
			}
			var obj = document.createElement("a");
			var t1 = document.getElementById(id_1);
			var t2 = document.getElementById(id_2);
			insert(obj,t1);
			insert(t1,t2);
			insert(t2,obj);
			document.body.removeChild(obj);
		}

function lunbo() {
	var imgs = getElementsByClassName("lunbo");
	var indexs = getElementsByClassName("lunos-index");
	var count = 0;
	setInterval(function() {
		if(count == indexs.length) {
			count = 0;
		}
		for(var i=0;i<indexs.length;i++) {
			imgs[i].style.display = "none";
			indexs[i].style.backgroundColor = "#aaa";
		}
		imgs[count].style.display = "block";
		indexs[count].style.backgroundColor = "#fff";
		count++;
	},3000);
}