'use strict';

let activities = [
    {
        category: "Adventures",
        id: "A101",
        name: "Hot Air Balloon Ride",
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.",
        location: "121 S. Main Street",
        price: 365.00
    },
    {
        category: "Museums",
        id: "M201",
        name: "History Museum Tour",
        description: "Explore the history of our town through engaging exhibits and narratives.",
        location: "50 Museum Road",
        price: 20.00
    },
    // More activities here
];

function updateActivities() {
    let category = document.getElementById('categorySelect').value;
    let activitySelect = document.getElementById('activitySelect');
    activitySelect.innerHTML = '<option>Select one</option>';

    activities.forEach(function(activity) {
        if (activity.category === category) {
            let option = document.createElement('option');
            option.textContent = activity.name;
            option.value = activity.id;
            activitySelect.appendChild(option);
        }
    });
}

function showActivityDetails() {
    let selectedId = document.getElementById('activitySelect').value;
    let details = activities.find(activity => activity.id === selectedId);
    if (details) {
        document.getElementById('activityName').textContent = details.name;
        document.getElementById('activityDescription').textContent = details.description;
        document.getElementById('activityPrice').textContent = `Price: $${details.price.toFixed(2)}`;
        document.getElementById('activityDetails').classList.remove('d-none');
        if (details.price > 0) {
            document.getElementById('purchaseButton').classList.remove('d-none');
        } else {
            document.getElementById('purchaseButton').classList.add('d-none');
        }
    }
}

function purchaseTickets() {
    let activityName = document.getElementById('activityName').textContent;
    let activityPrice = activities.find(activity => activity.name === activityName).price;
    let numberTickets = prompt("How many tickets do you want to purchase?");
    let totalPrice = activityPrice * numberTickets;
    alert(`Your credit card has been charged $${totalPrice.toFixed(2)} for ${numberTickets} tickets to ${activityName}.`);
    // Simulate sending email confirmation
    console.log("Confirmation email sent.");
}

window.onload = function() {
    document.getElementById('activitySelect').addEventListener('change', showActivityDetails);
    document.getElementById('categorySelect').addEventListener('change', updateActivities);
};
