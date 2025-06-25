// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Toggle Burger Animation
        burger.classList.toggle('toggle');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
    
    // Sticky Header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic form validation
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show an alert
            alert(`Thank you for your message, ${name}! I will get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Animation for skills on scroll
    const skills = document.querySelectorAll('.skill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skills.forEach(skill => {
        observer.observe(skill);
    });
    
    // Animation for project cards on scroll
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(card);
    });
    
    // Infinite Scrolling
    // Store all sections for infinite scrolling
    const sections = [
        { id: 'about', element: document.getElementById('about') },
        { id: 'skills', element: document.getElementById('skills') },
        { id: 'projects', element: document.getElementById('projects') },
        { id: 'education', element: document.getElementById('education') },
        { id: 'certifications', element: document.getElementById('certifications') },
        { id: 'resume', element: document.getElementById('resume') },
        { id: 'coding', element: document.getElementById('coding') },
        { id: 'contact', element: document.getElementById('contact') }
    ];
    
    // Track current section for infinite scroll
    let currentSectionIndex = 0;
    let isScrolling = false;
    const loadingContainer = document.querySelector('.loading-container');
    
    // Function to check if element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) / 2 &&
            rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) / 2
        );
    };
    
    // Update active navigation link based on current section
    const updateActiveNavLink = (sectionId) => {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    };
    
    // Scroll event for infinite scrolling
    window.addEventListener('scroll', () => {
        // Find which section is currently in view
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].element && isInViewport(sections[i].element)) {
                currentSectionIndex = i;
                updateActiveNavLink(sections[i].id);
                break;
            }
        }
        
        // Check if we're near the bottom of the page
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200 && !isScrolling) {
            isScrolling = true;
            
            // Show loading indicator
            loadingContainer.classList.add('show');
            
            // Simulate loading delay
            setTimeout(() => {
                // Cycle to the next section
                currentSectionIndex = (currentSectionIndex + 1) % sections.length;
                
                // Scroll to the next section
                if (sections[currentSectionIndex].element) {
                    sections[currentSectionIndex].element.scrollIntoView({ behavior: 'smooth' });
                }
                
                // Hide loading indicator
                loadingContainer.classList.remove('show');
                
                // Reset scrolling flag after animation completes
                setTimeout(() => {
                    isScrolling = false;
                }, 1000);
            }, 800);
        }
    });
}); 