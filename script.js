let btn = document.querySelector('button')
btn.addEventListener('click',function() {
  let h2 = document.querySelector('h2')
  let randomColor = getRandomColor(); 
  h2.innerText = randomColor;
  
  const div = document.querySelector('div');
  div.style.backgroundColor = randomColor;

  //console.log("Color changed!")
})

let btn2 = document.querySelector('#reset');
btn2.addEventListener('click', function(){
  console.log("Button clicked");
  const div = document.querySelector('div');
  div.style.backgroundColor = '';
  let h2 = document.querySelector('h2');
  h2.innerText = 'Generate a random color';
})

function getRandomColor(){
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);

  let color = `rgb(${red},${green},${blue})`;
  return color; 
}