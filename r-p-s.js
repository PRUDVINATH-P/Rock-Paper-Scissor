function computer_move() {
  const computerMove = Math.random();

  if (computerMove < 0.35)
    return 'rock';
  else if (computerMove < 0.7)
    return 'paper';
  else
    return 'scissor';
}

let move_heading = document.getElementById('move-heading');
let end = document.getElementById('end');
let option_heading = document.getElementById('option-heading');
let cards_container = document.getElementById('cards-container');
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let card5 = document.getElementById('card5');
let card6 = document.getElementById('card6');

function rock() {

  card2.style.display = 'none';
  card3.style.display = 'none';
  const computerMove = computer_move();
  cards_container.style.pointerEvents = 'none';
  option_heading.style.display = 'none';
  move_heading.style.display = 'flex';
  end.style.display = 'flex';

  if (computerMove === 'rock') {
    document.querySelector('.status').textContent = 'TIE..!';
    card4.style.display = 'flex';
  }
  else if (computerMove === 'paper') {
    document.querySelector('.status').textContent = 'YOU LOSE..!';
    card5.style.display = 'flex';
  }
  else {
    document.querySelector('.status').textContent = 'YOU WIN..!';
    card6.style.display = 'flex';
  }
}

function paper() {
  card1.style.display = 'none';
  card3.style.display = 'none';
  const computerMove = computer_move();
  cards_container.style.pointerEvents = 'none';
  option_heading.style.display = 'none';
  move_heading.style.display = 'flex';
  end.style.display = 'flex';

  if (computerMove === 'rock') {
    document.querySelector('.status').textContent = 'YOU WIN..!';
    card4.style.display = 'flex';
  }
  else if (computerMove === 'paper') {
    document.querySelector('.status').textContent = 'TIE..!';
    card5.style.display = 'flex';
  }
  else {
    document.querySelector('.status').textContent = 'YOU LOSE..!';
    card6.style.display = 'flex';
  }
}

function scissor() {
  card1.style.display = 'none';
  card2.style.display = 'none';
  const computerMove = computer_move();
  cards_container.style.pointerEvents = 'none';
  option_heading.style.display = 'none';
  move_heading.style.display = 'flex';
  end.style.display = 'flex';

  if (computerMove === 'rock') {
    document.querySelector('.status').textContent = 'YOU LOSE..!';
    card4.style.display = 'flex';
  }
  else if (computerMove === 'paper') {
    document.querySelector('.status').textContent = 'YOU WIN..!';
    card5.style.display = 'flex';
  }
  else {
    document.querySelector('.status').textContent = 'TIE..!';
    card6.style.display = 'flex';
  }
}