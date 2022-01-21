'use strrict'

window.addEventListener('load', () => {
	document.querySelectorAll('nav ul li a').forEach((element) => {
		console.log(element)
		element.addEventListener('click', (e) => {
			console.log(e.target.hash.split('#'))
			window.scrollTo(0, document.getElementById(e.target.hash.split('#')[1]).offsetTop - 75)
			e.preventDefault()
			return false
		})
	})
})