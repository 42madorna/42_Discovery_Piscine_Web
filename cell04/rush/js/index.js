'use strrict'

window.addEventListener('load', () => {
	document.querySelectorAll('nav ul li a').forEach((element) => {
		element.addEventListener('click', (e) => {
			e.preventDefault()
			window.scrollTo(0, document.getElementById(e.target.hash.split('#')[1]).offsetTop - 75)
			return false
		})
	})
})

window.addEventListener('hashchange', (e) => {
	const tabs = {
		'#norminet': 'norminette',
		'#perrete': 'perrette'
	}
	document.querySelectorAll('.content').forEach((element) => {
		element.style.visibility = 'hidden'
	})
	document.getElementById(tabs[location.hash]).style.visibility = 'visible';
})