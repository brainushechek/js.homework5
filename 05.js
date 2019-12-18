function getEl (selector) {
    if (selector.startsWith('#')) {
        var id = selector.slice(1, selector.length)
            if (document.getElementById(id)) {
                var nId = document.getElementById(id)
                console.log(nId.innerText)
            }
    } 
    if (selector.startsWith('.')) {
        var clas = selector.slice(1, selector.length)
            if (document.getElementsByClassName(clas)) {
                var nClas = document.getElementsByClassName(clas)
                console.log(nClas.innerText)
            } 
    }
}
