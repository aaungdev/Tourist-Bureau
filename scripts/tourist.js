window.onload = function() {
    let categoriesSelect = document.getElementById('categorySelect');
    let activitiesSelect = document.getElementById('activitySelect');
    let activityDetails = document.getElementById('activityDetails');
    let purchaseForm = document.getElementById('purchaseForm');
    let confirmationMessage = document.getElementById('confirmationMessage');

    categories.forEach(function(category) {
        let option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoriesSelect.appendChild(option);
    });

    categoriesSelect.onchange = function() {
        activitiesSelect.innerHTML = '<option>Select one</option>';
        activitiesSelect.style.display = 'none';
        activityDetails.style.display = 'none';
        purchaseForm.style.display = 'none';

        if (this.value !== 'Select one') {
            let filteredActivities = activities.filter(activity => activity.category === this.value);
            filteredActivities.forEach(function(activity) {
                let option = document.createElement('option');
                option.value = activity.id;
                option.textContent = activity.name;
                activitiesSelect.appendChild(option);
            });
            activitiesSelect.style.display = 'block';
        }
    };

    activitiesSelect.onchange = function() {
        let selectedActivity = activities.find(activity => activity.id === this.value);
        if (selectedActivity) {
            activityDetails.innerHTML = `
                <h3>${selectedActivity.name}</h3>
                <p>${selectedActivity.description}</p>
                <p>Location: ${selectedActivity.location}</p>
                <p>Price: $${selectedActivity.price.toFixed(2)}</p>
            `;
            activityDetails.style.display = 'block';
            purchaseForm.style.display = selectedActivity.price > 0 ? 'block' : 'none';
        }
    };

    window.purchaseTickets = function() {
        let numTickets = document.getElementById('numTickets').value;
        let creditCard = document.getElementById('creditCard').value;
        let emailAddress = document.getElementById('emailAddress').value;
        let selectedActivity = activities.find(activity => activity.id === activitiesSelect.value);

        if (selectedActivity && numTickets > 0 && creditCard && emailAddress) {
            let totalCost = selectedActivity.price * numTickets;
            confirmationMessage.innerHTML = `Your credit card has been charged $${totalCost.toFixed(2)} for ${numTickets} tickets to ${selectedActivity.name}. A confirmation email has been sent to ${emailAddress}.`;
            purchaseForm.reset();
        }
    };
};
