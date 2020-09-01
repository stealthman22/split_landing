//  we want to be able to manipulate classes
// i.e adding and removing them using an event listener

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// mouseenter is when you place cursor at said container
left.addEventListener('mouseenter', () => {
	container.classList.add('hover-left');
});

//  mouseleave is when you remove cursor from said container
left.addEventListener('mouseleave', () => {
	container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
	container.classList.add('hover-right');
});
right.addEventListener('mouseleave', () => {
	container.classList.remove('hover-right');
});
