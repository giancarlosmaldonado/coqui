// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Basic form validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting until validation is complete

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    // If validation passes, simulate form submission here
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message!');

    // Optionally, clear the form or take other actions
    document.querySelector('form').reset();
});

