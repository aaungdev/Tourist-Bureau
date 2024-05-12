window.onload = function() {
    var categoriesSelect = document.getElementById('categorySelect');
    var activitiesSelect = document.getElementById('activitySelect');
    var activityDetails = document.getElementById('activityDetails');
    var purchaseForm = document.getElementById('purchaseForm');
    var confirmationMessage = document.getElementById('confirmationMessage');

    categories.forEach(function(category) {
        var option = document.createElement('option');
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
            var filteredActivities = activities.filter(activity => activity.category === this.value);
            filteredActivities.forEach(function(activity) {
                var option = document.createElement('option');
                option.value = activity.id;
                option.textContent = activity.name;
                activitiesSelect.appendChild(option);
            });
            activitiesSelect.style.display = 'block';
        }
    };

    activitiesSelect.onchange = function() {
        var selectedActivity = activities.find(activity => activity.id === this.value);
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
        var numTickets = document.getElementById('numTickets').value;
        var creditCard = document.getElementById('creditCard').value;
        var emailAddress = document.getElementById('emailAddress').value;
        var selectedActivity = activities.find(activity => activity.id === activitiesSelect.value);

        if (selectedActivity && numTickets > 0 && creditCard && emailAddress) {
            var totalCost = selectedActivity.price * numTickets;
            confirmationMessage.innerHTML = `Your credit card has been charged $${totalCost.toFixed(2)} for ${numTickets} tickets to ${selectedActivity.name}. A confirmation email has been sent to ${emailAddress}.`;
            purchaseForm.reset();
        }
    };
};
