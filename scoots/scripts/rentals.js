fetch('/wdd230/scoots/data/pricing.json')
.then(response => response.json())
.then(data => {
  const rentalData = data.rental_prices;
  const table = document.getElementById('rentalTable');

  for (const rentalType in rentalData) {
    const rowData = rentalData[rentalType];
    const row = table.insertRow();

    const rentalCell = row.insertCell(0);
    rentalCell.innerHTML = rentalType;

    const maxPersonsCell = row.insertCell(1);
    maxPersonsCell.innerHTML = rowData.max_persons;

    const reservationHalfDayCell = row.insertCell(2);
    reservationHalfDayCell.innerHTML = rowData.reservation.half_day_price;

    const reservationFullDayCell = row.insertCell(3);
    reservationFullDayCell.innerHTML = rowData.reservation.full_day_price;

    const walkInHalfDayCell = row.insertCell(4);
    walkInHalfDayCell.innerHTML = rowData.walk_in.half_day_price;

    const walkInFullDayCell = row.insertCell(5);
    walkInFullDayCell.innerHTML = rowData.walk_in.full_day_price;
  }
})
.catch(error => console.error('Error fetching data:', error));