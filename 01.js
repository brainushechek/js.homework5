var imgUrl = null, degree = null
do {imgUrl = prompt('Enter link')} while (!imgUrl.startsWith('http'))
do {degree = prompt('Enter degree')} while (isNaN(degree))

var startDegree = 0

for ( var i = 1; i <= 5; i++) {
	var img = document.createElement('img')
	img.src = imgUrl

	document.body.appendChild(img)
	startDegree += +degree 
	img.style.transform = `rotate(${startDegree}deg)`
}