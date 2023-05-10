//  task 1.1
function changeFontSize(text, size) {
    const textElement = document.getElementById("text");
    textElement.style.fontSize = size;
    textElement.innerHTML = text;
  }
//  task 1.2
function moveImage() {
	const image = document.getElementById('moving_image');
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;
	const imageWidth = image.clientWidth;
	const imageHeight = image.clientHeight;
	const randomLeft = Math.floor(Math.random() * (screenWidth - imageWidth));
	const randomTop = Math.floor(Math.random() * (screenHeight - imageHeight));
	
	image.style.left = randomLeft + 'px';
	image.style.top = randomTop + 'px';
}
const interval = setInterval(moveImage, 1000);

// task 1.4
function updateClock() {
    var now = new Date(); // Отримати поточний час
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = hours.toString().padStart(2, '0') + ':' +
      minutes.toString().padStart(2, '0') + ':' +
      seconds.toString().padStart(2, '0'); // Створити рядок з часом
  
    var clockElement = document.getElementById('clock');
    clockElement.innerHTML = timeString; // Оновити вміст елементу годинника
  }

  setInterval(updateClock, 1000);
//   task 1.5
function startFadeOut() {
	var element = document.getElementById("content_with_effect");
	var interval = 10;
	var opacity = 1;
	var timer = setInterval(function() {
		opacity -= 0.01;
		element.style.opacity = opacity;

		if (opacity <= 0) {
			clearInterval(timer);
		}
	}, interval);
}









