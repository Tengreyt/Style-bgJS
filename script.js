let clickBtn = document.getElementById('btn');
let innerClick = document.querySelector('.rgba-color p');
let hiddenDiv = document.querySelector('.rgba-color');

// Изначально скрыть элемент
hiddenDiv.style.display = 'none';

clickBtn.addEventListener('click', function () {
    let random = getRandomColor();
    document.body.style.backgroundColor = random;
    innerClick.innerHTML = `Click ${random}`;
    hiddenDiv.style.display = 'flex'; // Сделать элемент видимым
});
function getRandomColor() { 
    // Генерация случайных значений для R, G и B
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb( ${r}, ${g}, ${b})`;
}
