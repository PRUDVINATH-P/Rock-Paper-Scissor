const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const card6 = document.getElementById('card6');
const heading1 = document.getElementById('heading1');
const heading2 = document.getElementById('heading2');
const heading3 = document.getElementById('heading3');
const headings = document.getElementById('headings');
const heading4 = document.getElementById('heading4');
const end = document.getElementById('end');

card1.onclick = function rock() {
  let rand = Math.random();
  if (rand <= 0.33) {
    card2.style.display = 'none';
    card3.style.display = 'none';
    heading1.style.display = 'none';
    heading2.style.display = 'block';
    heading3.style.display = 'block';
    heading2.innerHTML = 'Your Move :-';
    heading3.innerHTML = "Computer's mover :-";
    card4.style.display = 'flex';
    headings.style.display = "flex";
    heading4.style.display = "block";
    heading4.innerHTML = "TIE"
  }

  else if (rand <= 0.7) {
    card2.style.display = 'none';
    card3.style.display = 'none';
    heading1.style.display = 'none';
    heading2.style.display = 'block';
    heading3.style.display = 'block';
    heading2.innerHTML = 'Your Move :-';
    heading3.innerHTML = "Computer's mover :-";
    card5.style.display = 'flex';
    card1.style.pointerEvents = 'none';
    headings.style.display = "flex";
    heading4.style.display = "block";
    heading4.innerHTML = "LOSE"
  }

  else {
    card2.style.display = 'none';
    card3.style.display = 'none';
    heading1.style.display = 'none';
    heading2.style.display = 'block';
    heading3.style.display = 'block';
    heading2.innerHTML = 'Your Move :-';
    heading3.innerHTML = "Computer's mover :-";
    card6.style.display = 'flex';
    card1.style.pointerEvents = 'none';
    headings.style.display = "flex";
    heading4.style.display = "block";
    heading4.innerHTML = "WIN"
  }
  card1.style.pointerEvents = 'none';
  end.style.display = "flex";
}

card2.onclick = function paper() {
  let rand = Math.random();
  if (rand <= 0.33) {
    card1.style.display = 'none';
    card3.style.display = 'none';
    heading1.style.display = 'none';
    heading2.style.display = 'block';
    heading3.style.display = 'block';
    heading2.innerHTML = 'Your Move :-';
    heading3.innerHTML = "Computer's mover :-";
    card4.style.display = 'flex';
    card1.style.pointerEvents = 'none';
    headings.style.display = "flex";
    heading4.style.display = "block";
    heading4.innerHTML = "WIN"
  }

  else if (rand <= 0.7) {
    card1.style.display = 'none';
    card3.style.display = 'none';
    heading1.style.display = 'none';
    heading2.style.display = 'block';
    heading3.style.display = 'block';
    heading2.innerHTML = 'Your Move :-';
    heading3.innerHTML = "Computer's mover :-";
    card5.style.display = 'flex';
    card1.style.pointerEvents = 'none';
    headings.style.display = "flex";
    heading4.style.display = "block";
    heading4.innerHTML = "TIE"
  }

  else {
    card1.style.display = 'none';
    card3.style.display = 'none';
    heading1.style.display = 'none';
    heading2.style.display = 'block';
    heading3.style.display = 'block';
    heading2.innerHTML = 'Your Move :-';
    heading3.innerHTML = "Computer's mover :-";
    card6.style.display = 'flex';
    card1.style.pointerEvents = 'none';
    headings.style.display = "flex";
    heading4.style.display = "block";
    heading4.innerHTML = "LOSE  "
  }
  card2.style.pointerEvents = 'none';
  end.style.display = "flex";
}

card3.onclick = function scissor() {
  let rand = Math.random();
  if (rand <= 0.33) {
    card2.style.display = 'none';
    card1.style.display = 'none';
    heading1.style.display = 'none';
    heading2.style.display = 'block';
    heading3.style.display = 'block';
    heading2.innerHTML = 'Your Move :-';
    heading3.innerHTML = "Computer's mover :-";
    card4.style.display = 'flex';
    card1.style.pointerEvents = 'none';
    headings.style.display = "flex";
    heading4.style.display = "block";
    heading4.innerHTML = "LOSE"
  }

  else if (rand <= 0.7) {
    card2.style.display = 'none';
    card1.style.display = 'none';
    heading1.style.display = 'none';
    heading2.style.display = 'block';
    heading3.style.display = 'block';
    heading2.innerHTML = 'Your Move :-';
    heading3.innerHTML = "Computer's mover :-";
    card5.style.display = 'flex';
    card1.style.pointerEvents = 'none';
    headings.style.display = "flex";
    heading4.style.display = "block";
    heading4.innerHTML = "WIN"
  }

  else {
    card2.style.display = 'none';
    card1.style.display = 'none';
    heading1.style.display = 'none';
    heading2.style.display = 'block';
    heading3.style.display = 'block';
    heading2.innerHTML = 'Your Move :-';
    heading3.innerHTML = "Computer's mover :-";
    card6.style.display = 'flex';
    card1.style.pointerEvents = 'none';
    headings.style.display = "flex";
    heading4.style.display = "block";
    heading4.innerHTML = "TIE"
  }
  card3.style.pointerEvents = 'none';
  end.style.display = "flex";
}