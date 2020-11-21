document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('input').onclick = add_one;
});

let counter = 0;

function add_one(){
  counter++; //counter += 1;
  document.querySelector('#counter').innerHTML = counter;

  if (counter % 10 === 0){
    alert('Counter is at ' + counter + '!');
  }
}
