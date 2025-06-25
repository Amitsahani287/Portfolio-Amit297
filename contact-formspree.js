// Alternative contact form handler using Formspree
// To use this version:
// 1. Replace script.js reference in index.html with contact-formspree.js
// 2. No backend server required

document.addEventListener('DOMContentLoaded', () => {
    // All the navigation and animation code from script.js would be here
    // For brevity, only showing the contact form handler
    
    // Contact Form Submission using Formspree
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Set the form action to point to Formspree
        contactForm.action = "https://formspree.io/f/sahani.amit502@gmail.com";
        contactForm.method = "POST";
        
        // Add a hidden input field for the recipient email
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = '_next';
        hiddenField.value = window.location.href + '#contact'; // Redirect back to the contact section
        contactForm.appendChild(hiddenField);
        
        // Add event listener for form submission
        contactForm.addEventListener('submit', (e) => {
            // Don't prevent default form submission since Formspree handles it
            
            // Get form values for validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic form validation
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                e.preventDefault(); // Prevent submission if validation fails
                alert('Please fill in all fields');
                return;
            }
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Form will be submitted to Formspree
            // No need to handle the response as Formspree will redirect
        });
    }
}); 