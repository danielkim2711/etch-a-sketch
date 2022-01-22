const gridContainer = document.querySelector('.grid-container');
const blackBtn = document.querySelector('.black');
const rainbowBtn = document.querySelector('.rainbow');
const eraserBtn = document.querySelector('.eraser');
const clearBtn = document.querySelector('.clear');

const squares = gridContainer.childNodes;

function createGrid() {
  const numberOfSqaures = 16;

  for (let i = 1; i <= numberOfSqaures ** 2; i++) {
    const div = document.createElement('div');
    div.setAttribute('style', 'border: 1px solid #000;');
    gridContainer.appendChild(div);
  }

  gridContainer.setAttribute(
    'style',
    `grid-template-columns: repeat(${numberOfSqaures}, 1fr); grid-template-rows: repeat(${numberOfSqaures}, 1fr);`
  );
}

function drawBlack() {
  squares.forEach((square) =>
    square.addEventListener('mouseover', (e) => {
      e.target.setAttribute(
        'style',
        'background-color: #000; border: 1px solid #fff'
      );
    })
  );
  rainbowBtn.classList.remove('active');
  eraserBtn.classList.remove('active');
  blackBtn.classList.add('active');
}

function drawRainbow() {
  squares.forEach((square) =>
    square.addEventListener('mouseover', (e) => {
      e.target.setAttribute(
        'style',
        `background-color: rgb(${Math.floor(Math.random() * 256)},${Math.floor(
          Math.random() * 256
        )},${Math.floor(Math.random() * 256)}); border: 1px solid #fff`
      );
    })
  );
  blackBtn.classList.remove('active');
  eraserBtn.classList.remove('active');
  rainbowBtn.classList.add('active');
}

function erase() {
  squares.forEach((square) =>
    square.addEventListener('mouseover', (e) => {
      e.target.setAttribute(
        'style',
        'background-color: #fff; border: 1px solid #000'
      );
    })
  );
  blackBtn.classList.remove('active');
  rainbowBtn.classList.remove('active');
  eraserBtn.classList.add('active');
}

blackBtn.addEventListener('click', drawBlack);
rainbowBtn.addEventListener('click', drawRainbow);
eraserBtn.addEventListener('click', erase);

clearBtn.addEventListener('click', () =>
  squares.forEach((square) => {
    square.setAttribute(
      'style',
      'background-color: #fff; border: 1px solid #000'
    );
  })
);

createGrid();
