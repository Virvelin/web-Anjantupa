
document.getElementById('checkAvailability').addEventListener('click', function() {
    const checkinDate = document.getElementById('checkin').value;
    const checkoutDate = document.getElementById('checkout').value;
    const availabilityResult = document.getElementById('availabilityResult');

    if (!checkinDate || !checkoutDate) {
        availabilityResult.innerHTML = `<div class="message error">Ole hyvä ja syötä saapumis- ja lähtöpäivä.</div>`;
        return;
    }

    // ovatko päivät saatavilla
    availabilityResult.innerHTML = `<div class="message success">Saatavuus tarkistettu saapumispäivälle ${checkinDate} ja lähtöpäivälle ${checkoutDate}.</div>`;
});

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const reservationResult = document.getElementById('reservationResult');

    if (!name || !email) {
        reservationResult.innerHTML = `<div class="message error">Ole hyvä ja täytä kaikki kentät.</div>`;
        return;
    }

    //  varauksen lähetys
    reservationResult.innerHTML = `<div class="message success">Varaus lähetetty! Nimi: ${name}, Sähköposti: ${email}.</div>`;
});
