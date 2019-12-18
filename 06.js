function $(selector) {
	if (selector.startsWith('#')) {
		var id = selector.slice(1, selector.length)
		if (document.getElementById(id)) {
			console.log(document.getElementById(id))
		}
	}
	if (selector.startsWith('.')) {
		var clas = selector.slice(1,selector.length)
		if (document.getElementsByClassName(clas)) {
			if (document.getElementsByClassName(clas).length > 1) {
				console.log(document.getElementsByClassName(clas))
			} else console.log(document.querySelector(selector))
        	
		}
	} else {
		if (document.getElementsByTagName(selector)) {
			console.log(document.getElementsByTagName(selector))
		} 
    }
}
   