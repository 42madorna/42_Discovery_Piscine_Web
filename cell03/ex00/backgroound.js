'use strict'

const changeBackground = () => {
	const randColor = Math.floor(Math.random() * 16777215).toString(16);
	document.body.style.background = '#' + randColor
}

window.onload =  () => {
	document.getElementById('btn').onclick = changeBackground;
}
