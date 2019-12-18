function deleteById (id) {
	var el = document.getElementById(id)
	if (!el) {
		return console.log( "this tag can't be removed" )
	} else {
		el.parentNode.removeChild(el)
		}
	}