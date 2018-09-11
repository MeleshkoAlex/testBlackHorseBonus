// 3. Есть массив чисел:

// [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13]

// Вывести его в виде графика (bar charts), 

// где по оси x - индекс элемента,

// по оси y - значение. 

// Сделать цветовую градацию показателей на графике:

// 0 - 5 зеленый,

// 6 - 10 желтый,

// свыше 10 красный.

// Допускается использование только html, css, javascript.
// Использование сторонних библиотек, canvas, svg не допускается.

// Написать время, затраченное на каждый пункт.

// Выполненные задания загрузить на Github и прислать нам ссылку.
document.addEventListener("DOMContentLoaded", handler);
function handler() {
	let array = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];
	let arrayLen = array.length;
	let lineY = document.querySelector('.line-y'),
	lineX = document.querySelector('.line-x'),
	chBLock = document.querySelector('.block-chart');
	ChItem = document.querySelector('.block-chart-item');


	function getMaxOfArray() {
		return Math.max.apply(null, array);
	}
	padLine();
	function padLine(){
		if(getMaxOfArray() < 50){
			lineX.style.paddingLeft = '22px';
		}
		if(getMaxOfArray() >= 50 && getMaxOfArray() < 1000){
			lineX.style.paddingLeft = '28px';
		}
	}
	appenItem();
	function appenItem(){
		let numPx = 1; 
		chBLock.style.width = arrayLen * 20 +'px';
		if(getMaxOfArray() < 30){
			numPx = 10;
		}
		if(getMaxOfArray() >= 30 && getMaxOfArray() < 100){
			numPx = 1;
		}
		for(let i = 0,len = array.length;len > i;i++){
			let liItem = document.createElement('li');
			liItem.innerHTML = i +1;
			lineX.appendChild(liItem);
			let item = document.createElement('div');
			item.classList.add('chart-item');
			item.style.height = array[i] * numPx + 'px';
			ChItem.appendChild(colorItem(item,array[i]));
		}
	}	

	function colorItem(item,numb){
		if(numb <=5){
			item.classList.add('green');	
		}
		if(numb > 6 && numb <=10){
			item.classList.add('yellow');
		}
		if(numb > 10){
			item.classList.add('red');
		}
		return item;
	}
	lineyNumb();
	function lineyNumb(){
		let maxNumb = getMaxOfArray();
		let number = 50;
		if(maxNumb  <= 30){
			number = 5;
		}
		let step = (maxNumb / number)+1;

		for(let i = 1;step >= i;i++){
			let li = document.createElement('li');
			li.innerHTML = number * i;
			lineY.appendChild(li);
		}
	}
};

