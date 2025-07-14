let currentRestaurant = '';

    function selectRestaurant(name) {
      currentRestaurant = name;
      document.getElementById('restaurantName').innerText = `Reservation at ${name}`;
      document.getElementById('reservationForm').classList.add('show');
      window.scrollTo({ top: document.getElementById('reservationForm').offsetTop, behavior: 'smooth' });
    }

    function saveReservation() {
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('resTime').value;
      const name = document.getElementById('resName').value;
      const people = document.getElementById('resPeople').value;
      alert(`Reservation confirmed at ${currentRestaurant} on ${date} at ${time} for ${people} person(s).`);
    }

    function modifyReservation() {
      const newDate = document.getElementById('editDate').value;
      const newTime = document.getElementById('editTime').value;
      alert(`Reservation modified for ${currentRestaurant} to ${newDate} at ${newTime}.`);
    }

    function filterRestaurants(query) {
      const items = document.querySelectorAll('.restaurant');
      items.forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(query.toLowerCase()) ? 'block' : 'none';
      });
    }

    function modifyReservation() {
  alert("Reservation Modified!");
}

function filterByRating(rating) {
  const restaurants = document.querySelectorAll(".restaurant");
  restaurants.forEach((rest) => {
    const restRating = parseInt(rest.getAttribute("data-rating"));
    rest.style.display = rating === "" || restRating >= parseInt(rating) ? "" : "none";
  });
}

function filterByCost(order) {
  const list = document.getElementById("restaurantList");
  const items = Array.from(document.querySelectorAll(".restaurant"));

  items.sort((a, b) => {
    const costA = parseInt(a.getAttribute("data-cost"));
    const costB = parseInt(b.getAttribute("data-cost"));
    return order === "low" ? costA - costB : costB - costA;
  });

  list.innerHTML = "";
  items.forEach((item) => list.appendChild(item));
}

function filterByLocation(location) {
  const restaurants = document.querySelectorAll(".restaurant");
  restaurants.forEach((rest) => {
    const restLocation = rest.getAttribute("data-location");
    rest.style.display = location === "" || restLocation === location ? "" : "none";
  });
}
