// js 事件监听
// keydown的事件处理函数
function onDrumPressed(event){
	console.log(event.keycode);
	// 键值拿到了，如何播放
	//idea1:如果相等就播放
	// if(event.keyCode===65){
		// console.log('按了a')
		// 查找音乐
	var key = event.keyCode
	var ele=	
		document.querySelector('audio[data-key="'+key+'"]')
	if(ele) ele.play()
		var item = document.querySelector('.key[data-key="'+key+'"]')
	if(item)item.classList.add('playing');
	// // setTimeout(function(){
	// // 	item.classList.remove('playing');
	// },100)
    var keys=Array.from(document.querySelectorAll('.key'));
    keys.forEach(key=>{
	key.addEventListener('transitioned',function(){
		key.classList.remove('playing');
	},800);
})
}
window.addEventListener('keydown',onDrumPressed)