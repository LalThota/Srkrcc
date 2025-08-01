
    // <script>
    //     // Mobile menu toggle
    //     const mobileMenuButton = document.getElementById('mobile-menu-button');
    //     const mobileMenu = document.getElementById('mobile-menu');

    //     mobileMenuButton.addEventListener('click', () => {
    //         mobileMenu.classList.toggle('hidden');
    //     });

    //     // Navigation click handling
    //     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //         anchor.addEventListener('click', function (e) {
    //             e.preventDefault();

    //             const target = document.querySelector(this.getAttribute('href'));
    //             if (target) {
    //                 // Close mobile menu if open
    //                 mobileMenu.classList.add('hidden');

    //                 // Scroll to target
    //                 window.scrollTo({
    //                     top: target.offsetTop - 80, // Offset for fixed header
    //                     behavior: 'smooth'
    //                 });
    //             }
    //         });
    //     });

    //     // Countdown Timer
    //     function updateCountdown() {
    //         // Set the date we're counting down to (February 4, 2025)
    //         const countDownDate = new Date("Feb 4, 2025 00:00:00").getTime();

    //     // Get today's date and time
    //     const now = new Date().getTime();

    //     // Find the distance between now and the count down date
    //     const distance = countDownDate - now;

    //     // Time calculations for days, hours, minutes and seconds
    //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //     // Display the result with leading zeros
    //     document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    //     document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    //     document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    //     document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    //     // If the count down is finished, display a message
    //     if (distance < 0) {
    //         clearInterval(countdown);
    //     document.getElementById("days").innerHTML = "00";
    //     document.getElementById("hours").innerHTML = "00";
    //     document.getElementById("minutes").innerHTML = "00";
    //     document.getElementById("seconds").innerHTML = "00";
    //         }
    //     }

    //     // Update the countdown every 1 second
    //     const countdown = setInterval(updateCountdown, 1000);
    //     updateCountdown(); // Initial call

    //     // Active navigation link based on scroll position
    //     const sections = document.querySelectorAll('section');
    //     const navLinks = document.querySelectorAll('.nav-link');

    //     window.addEventListener('scroll', () => {
    //         let current = '';

    //         sections.forEach(section => {
    //             const sectionTop = section.offsetTop;
    //     const sectionHeight = section.clientHeight;
    //             if (pageYOffset >= (sectionTop - 200)) {
    //         current = section.getAttribute('id');
    //             }
    //         });

    //         navLinks.forEach(link => {
    //         link.classList.remove('active');
    //     if (link.getAttribute('href').slice(1) === current) {
    //         link.classList.add('active');
    //             }
    //         });
    //     });

    //     // Hall of Fame filtering
    //     const filterButtons = document.querySelectorAll('.filter-btn');
    //     const achieverItems = document.querySelectorAll('.achiever-item');

    //     filterButtons.forEach(button => {
    //         button.addEventListener('click', () => {
    //             // Update active button
    //             filterButtons.forEach(btn => {
    //                 btn.classList.remove('active');
    //             });

    //             button.classList.add('active');

    //             // Filter achievers
    //             const filter = button.getAttribute('data-filter');

    //             achieverItems.forEach(item => {
    //                 if (filter === 'all' || item.getAttribute('data-category') === filter) {
    //                     item.style.display = 'block';
    //                     setTimeout(() => {
    //                         item.classList.add('animate-fadeInUp');
    //                     }, 100);
    //                 } else {
    //                     item.style.display = 'none';
    //                     item.classList.remove('animate-fadeInUp');
    //                 }
    //             });
    //         });
    //     });

    //     // Events filtering
    //     const eventFilterButtons = document.querySelectorAll('.event-filter-btn');
    //     const eventCards = document.querySelectorAll('.event-card');

    //     eventFilterButtons.forEach(button => {
    //         button.addEventListener('click', () => {
    //             // Update active button
    //             eventFilterButtons.forEach(btn => {
    //                 btn.classList.remove('active');
    //             });

    //             button.classList.add('active');

    //             // Filter events
    //             const filter = button.getAttribute('data-filter');

    //             eventCards.forEach(card => {
    //                 if (filter === 'all' || card.getAttribute('data-category') === filter) {
    //                     card.style.display = 'block';
    //                     setTimeout(() => {
    //                         card.classList.add('animate-fadeInUp');
    //                     }, 100);
    //                 } else {
    //                     card.style.display = 'none';
    //                     card.classList.remove('animate-fadeInUp');
    //                 }
    //             });
    //         });
    //     });

    //     // Event details modal
    //     function showEventDetails(eventId) {
    //         const modal = document.getElementById('eventModal');
    //     const modalTitle = document.getElementById('modalTitle');
    //     const modalContent = document.getElementById('modalContent');

    //     // Event details data
    //     const eventDetails = {
    //         'hackoverflow': {
    //         title: 'Hackoverflow 2K24',
    //     content: `
    //     <div class="mb-6">
    //         <div class="flex items-center mb-4">
    //             <span class="event-tag mr-3">Hackathon</span>
    //             <span class="text-gray-600">November 15-17, 2024 • SRKR Engineering College</span>
    //         </div>
    //         <h4 class="text-xl font-bold mb-4">About the Event</h4>
    //         <p class="text-gray-700 mb-4">Hackoverflow 2K24 was a 36-hour hackathon that brought together the brightest minds from SRKR Engineering College to innovate and create solutions for real-world problems. The event aimed to foster creativity, collaboration, and technical skills among students.</p>
    //         <p class="text-gray-700">With the theme "Innovate for Impact," participants were encouraged to develop solutions addressing challenges in healthcare, education, environment, and social welfare.</p>
    //     </div>

    //     <div class="mb-6">
    //         <h4 class="text-xl font-bold mb-4">Event Highlights</h4>
    //         <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    //             <div class="flex items-center">
    //                 <i class="fas fa-users text-blue-500 mr-2"></i>
    //                 <span>200+ Participants</span>
    //             </div>
    //             <div class="flex items-center">
    //                 <i class="fas fa-laptop-code text-purple-500 mr-2"></i>
    //                 <span>40+ Teams</span>
    //             </div>
    //             <div class="flex items-center">
    //                 <i class="fas fa-trophy text-yellow-500 mr-2"></i>
    //                 <span>₹50,000 in Prizes</span>
    //             </div>
    //             <div class="flex items-center">
    //                 <i class="fas fa-chalkboard-teacher text-green-500 mr-2"></i>
    //                 <span>Industry Mentors</span>
    //             </div>
    //         </div>
    //     </div>

    //     <div class="mb-6">
    //         <h4 class="text-xl font-bold mb-4">Winning Projects</h4>
    //         <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    //             <div class="bg-gray-100 rounded-lg p-4">
    //                 <h5 class="font-bold text-lg mb-2 text-yellow-500">1st Place - MediConnect</h5>
    //                 <p class="text-gray-700 text-sm">A platform connecting patients with doctors for remote consultations.</p>
    //             </div>
    //             <div class="bg-gray-100 rounded-lg p-4">
    //                 <h5 class="font-bold text-lg mb-2 text-gray-500">2nd Place - EcoTrack</h5>
    //                 <p class="text-gray-700 text-sm">An app to track and reduce carbon footprint.</p>
    //             </div>
    //             <div class="bg-gray-100 rounded-lg p-4">
    //                 <h5 class="font-bold text-lg mb-2 text-orange-500">3rd Place - EduBridge</h5>
    //                 <p class="text-gray-700 text-sm">A platform connecting underprivileged students with educators.</p>
    //             </div>
    //         </div>
    //     </div>

    //     <div>
    //         <h4 class="text-xl font-bold mb-4">Event Gallery</h4>
    //         <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    //             <div class="gallery-item h-32">
    //                 <img src="https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Hackoverflow+1" alt="Hackoverflow 1" class="rounded-lg">
    //                     <div class="gallery-overlay rounded-lg">
    //                         <i class="fas fa-search-plus text-white text-2xl"></i>
    //                     </div>
    //             </div>
    //             <div class="gallery-item h-32">
    //                 <img src="https://via.placeholder.com/300x200/6366f1/ffffff?text=Hackoverflow+2" alt="Hackoverflow 2" class="rounded-lg">
    //                     <div class="gallery-overlay rounded-lg">
    //                         <i class="fas fa-search-plus text-white text-2xl"></i>
    //                     </div>
    //             </div>
    //             <div class="gallery-item h-32">
    //                 <img src="https://via.placeholder.com/300x200/10b981/ffffff?text=Hackoverflow+3" alt="Hackoverflow 3" class="rounded-lg">
    //                     <div class="gallery-overlay rounded-lg">
    //                         <i class="fas fa-search-plus text-white text-2xl"></i>
    //                     </div>
    //             </div>
    //             <div class="gallery-item h-32">
    //                 <img src="https://via.placeholder.com/300x200/f97316/ffffff?text=Hackoverflow+4" alt="Hackoverflow 4" class="rounded-lg">
    //                     <div class="gallery-overlay rounded-lg">
    //                         <i class="fas fa-search-plus text-white text-2xl"></i>
    //                     </div>
    //             </div>
    //         </div>
    //     </div>
    //     `
    //             },
    //     'iconcoderz': {
    //         title: 'IconCoderz 2K25',
    //     content: `
    //     <div class="mb-6">
    //         <div class="flex items-center mb-4">
    //             <span class="event-tag mr-3">Competition</span>
    //             <span class="text-gray-600">February 4, 2025 • SRKR Engineering College</span>
    //         </div>
    //         <h4 class="text-xl font-bold mb-4">About the Event</h4>
    //         <p class="text-gray-700 mb-4">IconCoderz 2K25 is our annual coding competition designed to test and enhance the programming skills of students across all years. The competition features two levels: Beginner Level for 1st and 2nd-year students and Expert Level for 3rd and 4th-year students.</p>
    //         <p class="text-gray-700">Participants will solve challenging problems that test their algorithmic thinking, problem-solving abilities, and coding efficiency under time constraints.</p>
    //     </div>

    //     <div class="mb-6">
    //         <h4 class="text-xl font-bold mb-4">Competition Structure</h4>
    //         <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    //             <div class="bg-blue-100 rounded-lg p-4">
    //                 <h5 class="font-bold text-lg mb-2 text-blue-600">Beginner Level</h5>
    //                 <p class="text-gray-700">For 1st and 2nd-year students with fundamental programming knowledge.</p>
    //             </div>
    //             <div class="bg-purple-100 rounded-lg p-4">
    //                 <h5 class="font-bold text-lg mb-2 text-purple-600">Expert Level</h5>
    //                 <p class="text-gray-700">For 3rd and 4th-year students with advanced programming skills.</p>
    //             </div>
    //         </div>
    //     </div>

    //     <div class="mb-6">
    //         <h4 class="text-xl font-bold mb-4">Prizes</h4>
    //         <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    //             <div class="bg-gray-100 rounded-lg p-4 border border-yellow-500/30">
    //                 <h5 class="font-bold text-lg mb-2 text-yellow-600">Beginner Level</h5>
    //                 <p class="text-gray-700">1st Prize: Smart Watch<br>2nd Prize: Wireless Earbuds</p>
    //             </div>
    //             <div class="bg-gray-100 rounded-lg p-4 border border-purple-500/30">
    //                 <h5 class="font-bold text-lg mb-2 text-purple-600">Expert Level</h5>
    //                 <p class="text-gray-700">1st Prize: Laptop<br>2nd Prize: Tablet</p>
    //             </div>
    //         </div>
    //     </div>

    //     <div>
    //         <h4 class="text-xl font-bold mb-4">Registration</h4>
    //         <p class="text-gray-700 mb-4">Registration is open until February 2, 2025. The registration fee is ₹100, with a 50% discount for SRKR Coding Club affiliates.</p>
    //         <a href="https://forms.gle/KdMBv6Y6Dykk5nMX9" target="_blank" class="btn-primary font-semibold py-2 px-6 rounded-full inline-block">
    //             Register Now
    //         </a>
    //     </div>
    //     `
    //             },
    //     'ai-workshop': {
    //         title: 'AI & Machine Learning Workshop',
    //     content: `
    //     <div class="mb-6">
    //         <div class="flex items-center mb-4">
    //             <span class="event-tag mr-3">Workshop</span>
    //             <span class="text-gray-600">December 10, 2024 • SRKR Engineering College</span>
    //         </div>
    //         <h4 class="text-xl font-bold mb-4">About the Workshop</h4>
    //         <p class="text-gray-700 mb-4">This hands-on workshop covers the fundamentals of Artificial Intelligence and Machine Learning. Participants will learn about various ML algorithms, their applications, and how to implement them using Python.</p>
    //         <p class="text-gray-700">The workshop is designed for beginners and intermediate learners who want to explore the exciting field of AI and ML.</p>
    //     </div>

    //     <div class="mb-6">
    //         <h4 class="text-xl font-bold mb-4">Workshop Agenda</h4>
    //         <div class="space-y-4">
    //             <div class="flex items-start">
    //                 <div class="bg-blue-100 p-2 rounded-lg mr-3">
    //                     <i class="fas fa-clock text-blue-500"></i>
    //                 </div>
    //                 <div>
    //                     <h5 class="font-semibold">10:00 AM - 11:00 AM</h5>
    //                     <p class="text-gray-600">Introduction to AI and ML</p>
    //                 </div>
    //             </div>
    //             <div class="flex items-start">
    //                 <div class="bg-blue-100 p-2 rounded-lg mr-3">
    //                     <i class="fas fa-clock text-blue-500"></i>
    //                 </div>
    //                 <div>
    //                     <h5 class="font-semibold">11:00 AM - 1:00 PM</h5>
    //                     <p class="text-gray-600">Supervised Learning Algorithms</p>
    //                 </div>
    //             </div>
    //             <div class="flex items-start">
    //                 <div class="bg-blue-100 p-2 rounded-lg mr-3">
    //                     <i class="fas fa-clock text-blue-500"></i>
    //                 </div>
    //                 <div>
    //                     <h5 class="font-semibold">2:00 PM - 3:30 PM</h5>
    //                     <p class="text-gray-600">Unsupervised Learning</p>
    //                 </div>
    //             </div>
    //             <div class="flex items-start">
    //                 <div class="bg-blue-100 p-2 rounded-lg mr-3">
    //                     <i class="fas fa-clock text-blue-500"></i>
    //                 </div>
    //                 <div>
    //                     <h5 class="font-semibold">3:30 PM - 4:00 PM</h5>
    //                     <p class="text-gray-600">Q&A and Closing</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    //     <div>
    //         <h4 class="text-xl font-bold mb-4">What You'll Learn</h4>
    //         <ul class="list-disc list-inside text-gray-700 space-y-2">
    //             <li>Fundamentals of Artificial Intelligence</li>
    //             <li>Types of Machine Learning</li>
    //             <li>Supervised Learning Algorithms</li>
    //             <li>Unsupervised Learning Techniques</li>
    //             <li>Practical Implementation with Python</li>
    //             <li>Real-world Applications of ML</li>
    //         </ul>
    //     </div>
    //     `
    //             },
    //             // Add more event details as needed
    //         };

    //     // Set modal content
    //     modalTitle.textContent = eventDetails[eventId].title;
    //     modalContent.innerHTML = eventDetails[eventId].content;

    //     // Show modal
    //     modal.classList.remove('hidden');
    //     }

    //     function closeEventModal() {
    //         document.getElementById('eventModal').classList.add('hidden');
    //     }

    //     // Contact form submission
    //     function submitForm(event) {
    //         event.preventDefault();

    //     // Get form values
    //     const name = event.target.querySelector('input[type="text"]').value;
    //     const email = event.target.querySelector('input[type="email"]').value;
    //     const subject = event.target.querySelector('input[type="text"]:nth-of-type(2)').value;
    //     const message = event.target.querySelector('textarea').value;

    //     // Here you would normally send the form data to a server
    //     // For this example, we'll just show a success message

    //     // Create success message
    //     const successMessage = document.createElement('div');
    //     successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    //     successMessage.innerHTML = `
    //     <div class="flex items-center">
    //         <i class="fas fa-check-circle mr-2"></i>
    //         <span>Message sent successfully!</span>
    //     </div>
    //     `;

    //     // Add success message to the page
    //     document.body.appendChild(successMessage);

    //         // Remove success message after 3 seconds
    //         setTimeout(() => {
    //         successMessage.remove();
    //         }, 3000);

    //     // Reset form
    //     event.target.reset();
    //     }

    //     // Add animation on scroll
    //     const observerOptions = {
    //         root: null,
    //     rootMargin: '0px',
    //     threshold: 0.1
    //     };

    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('animate-fadeInUp');
    //             }
    //         });
    //     }, observerOptions);

    //     document.querySelectorAll('.card').forEach(card => {
    //         observer.observe(card);
    //     });
    // </script>