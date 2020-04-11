// first grab the items that you need to manioulate from the dom:

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value; // the plus sign parses string to a number

//save selected movie and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // console.log(selectedSeats);
  // saving seats
  // copy selected seats into an array // map through an array
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  console.log(seatsIndex);
  // return a new array of indexes
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Get data from localStoraage and populate UI
function populateUI(params) {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
}

// movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  );
  {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
