const services = [
    {
        id: 1,
        name: "Web Design",
        description: "Custom web design services to elevate your brand.",
        price: "$999"
    },
    {
        id: 2,
        name: "SEO Optimization",
        description: "Improve your website's SEO to boost your online visibility.",
        price: "$499"
    },
    {
        id: 3,
        name: "Digital Marketing",
        description: "Comprehensive digital marketing services to increase your reach.",
        price: "$750"
    }
];

function displayServices() {
    const servicesContainer = document.getElementById('service-list');
    servicesContainer.innerHTML = ''; // Clear loading message
    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <p>Price: ${service.price}</p>
        `;
        servicesContainer.appendChild(serviceElement);
    });
}

function populateBookingOptions() {
    const serviceSelect = document.getElementById('service');
    services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.id;
        option.textContent = service.name;
        serviceSelect.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayServices();
    populateBookingOptions();
});

// Continue with existing script code...
