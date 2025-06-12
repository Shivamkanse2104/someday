// Create floating hearts
function createHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    
    // Create multiple hearts at once
    for (let i = 0; i < 3; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random position across the entire screen
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        
        // Random size for variety
        const size = Math.random() * 15 + 10; // Random size between 10px and 25px
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        
        // Random animation duration
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        // Random opacity
        heart.style.opacity = (Math.random() * 0.4 + 0.4).toString(); // Random opacity between 0.4 and 0.8
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Create hearts more frequently
setInterval(createHearts, 200);

// Smooth scroll to next section
function scrollToNext() {
    const memoriesSection = document.getElementById('memories');
    memoriesSection.scrollIntoView({ behavior: 'smooth' });
}

// Move the "No" button when hovered
function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

// Show celebration when "Yes" is clicked
function showYesResponse() {
    const proposal = document.getElementById('proposal');
    const celebration = document.getElementById('celebration');
    
    proposal.style.display = 'none';
    celebration.style.display = 'flex';
    
    // Create fireworks effect
    createFireworks();
}

// Create fireworks effect
function createFireworks() {
    const fireworks = document.querySelector('.fireworks');
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.style.position = 'absolute';
            firework.style.left = Math.random() * 100 + 'vw';
            firework.style.top = Math.random() * 100 + 'vh';
            firework.style.width = '5px';
            firework.style.height = '5px';
            firework.style.borderRadius = '50%';
            firework.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
            firework.style.boxShadow = '0 0 10px 2px currentColor';
            firework.style.animation = 'firework 1s ease-out forwards';
            
            fireworks.appendChild(firework);
            
            setTimeout(() => {
                firework.remove();
            }, 1000);
        }, i * 100);
    }
}

// Add CSS for fireworks animation
const style = document.createElement('style');
style.textContent = `
    @keyframes firework {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        50% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add parallax effect to sections
document.addEventListener('mousemove', (e) => {
    const sections = document.querySelectorAll('section');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    sections.forEach(section => {
        const content = section.querySelector('.content');
        const offsetX = (mouseX - 0.5) * 20;
        const offsetY = (mouseY - 0.5) * 20;
        
        content.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});

// Image Modal Functions
function openImageModal(card) {
    const modal = document.getElementById('imageModal');
    const modalImage = modal.querySelector('.modal-image');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    
    // Get the image and text content from the clicked card
    const image = card.querySelector('.memory-image');
    const title = card.querySelector('h3').textContent;
    const description = card.querySelector('p').textContent;
    
    // Set the modal content
    modalImage.src = image.src;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    
    // Show the modal with animation
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Add floating hearts to the modal
    createModalHearts();
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
}

// Create floating hearts in the modal
function createModalHearts() {
    const modal = document.getElementById('imageModal');
    const modalContainer = modal.querySelector('.modal-image-container');
    
    // Clear existing hearts
    const existingHearts = modalContainer.querySelectorAll('.modal-heart');
    existingHearts.forEach(heart => heart.remove());
    
    // Create new hearts
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('modal-heart');
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = (Math.random() * 2) + 's';
        modalContainer.appendChild(heart);
    }
}

// Close modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', (e) => {
    if (e.target.id === 'imageModal') {
        closeImageModal();
    }
});

// Add modal heart styles
const modalHeartStyle = document.createElement('style');
modalHeartStyle.textContent = `
    .modal-heart {
        position: absolute;
        width: 15px;
        height: 15px;
        background: #ff69b4;
        transform: rotate(45deg);
        animation: modalHeartFloat 3s ease-in-out infinite;
        opacity: 0.6;
        z-index: 2;
    }
    
    .modal-heart::before,
    .modal-heart::after {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        background: #ff69b4;
        border-radius: 50%;
    }
    
    .modal-heart::before {
        left: -7.5px;
    }
    
    .modal-heart::after {
        top: -7.5px;
    }
    
    @keyframes modalHeartFloat {
        0% {
            transform: rotate(45deg) translateY(0) scale(1);
            opacity: 0.6;
        }
        50% {
            transform: rotate(45deg) translateY(-20px) scale(1.2);
            opacity: 0.8;
        }
        100% {
            transform: rotate(45deg) translateY(-40px) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(modalHeartStyle);

// Enhanced Smooth Cursor Animation
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;
let trailElements = [];
const maxTrailLength = 10;

function updateCursor() {
    // Smooth cursor movement using lerp
    cursorX = lerp(cursorX, mouseX, 0.2);
    cursorY = lerp(cursorY, mouseY, 0.2);
    followerX = lerp(followerX, mouseX, 0.1);
    followerY = lerp(followerY, mouseY, 0.1);

    // Update cursor positions
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;

    // Update trail
    updateTrail();

    requestAnimationFrame(updateCursor);
}

function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

function updateTrail() {
    // Create new trail element
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = `${mouseX}px`;
    trail.style.top = `${mouseY}px`;
    document.body.appendChild(trail);
    trailElements.push(trail);

    // Remove old trail elements
    if (trailElements.length > maxTrailLength) {
        const oldTrail = trailElements.shift();
        oldTrail.style.opacity = '0';
        setTimeout(() => oldTrail.remove(), 500);
    }
}

// Mouse event listeners with debouncing
let isMoving = false;
let moveTimeout;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX - cursor.offsetWidth / 2;
    mouseY = e.clientY - cursor.offsetHeight / 2;

    if (!isMoving) {
        isMoving = true;
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
    }

    clearTimeout(moveTimeout);
    moveTimeout = setTimeout(() => {
        isMoving = false;
        cursor.style.opacity = '0';
        cursorFollower.style.opacity = '0';
    }, 1000);
});

// Enhanced hover effects
document.querySelectorAll('a, button, .memory-card, .proposal-button').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorFollower.classList.add('hover');
    });

    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorFollower.classList.remove('hover');
    });
});

// Click effect
document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
    cursorFollower.classList.add('click');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
    cursorFollower.classList.remove('click');
});

// Initialize cursor
updateCursor();

// Enhanced Love Notes
const loveNotes = [
    "Every moment with you is magical...",
    "You make my heart skip a beat...",
    "Forever and always...",
    "You are my everything...",
    "My love for you grows stronger each day...",
    "You are my dream come true...",
    "Every day with you is a blessing...",
    "You are my favorite hello and my hardest goodbye...",
    "In your eyes, I found my home...",
    "You are the reason I smile every day...",
    "My heart beats only for you...",
    "You are my perfect match...",
    "Every love story is beautiful, but ours is my favorite...",
    "You are my today and all of my tomorrows...",
    "With you, every moment feels like a dream...",
    "You are the missing piece to my puzzle...",
    "My love for you is infinite...",
    "You make my world complete...",
    "Every day with you is a new adventure...",
    "You are my happily ever after...",
    "In your arms is where I belong...",
    "You are my sunshine on cloudy days...",
    "My heart belongs to you...",
    "You are my greatest blessing...",
    "With you, I am home..."
];

function createLoveNote() {
    const note = document.createElement('div');
    note.classList.add('love-note');
    note.textContent = loveNotes[Math.floor(Math.random() * loveNotes.length)];
    
    // Random position with better distribution
    const margin = 100;
    note.style.left = margin + Math.random() * (window.innerWidth - 2 * margin) + 'px';
    note.style.top = margin + Math.random() * (window.innerHeight - 2 * margin) + 'px';
    
    // Random rotation for variety
    note.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
    
    document.body.appendChild(note);
    
    // Show note with slight delay
    setTimeout(() => {
        note.classList.add('active');
    }, 100);
    
    // Remove note after animation
    setTimeout(() => {
        note.classList.remove('active');
        setTimeout(() => {
            note.remove();
        }, 500);
    }, 4000); // Increased display time
}

// Create love notes more frequently
setInterval(createLoveNote, 3000); // Changed from 5000 to 3000

// Particle Effects
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 2000);
}

// Create particles on memory card hover
document.querySelectorAll('.memory-card').forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const rect = card.getBoundingClientRect();
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                createParticle(
                    rect.left + Math.random() * rect.width,
                    rect.top + Math.random() * rect.height
                );
            }, i * 100);
        }
    });
});

// Sparkle Effect
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    document.body.appendChild(sparkle);
    
    sparkle.style.animation = 'sparkle 1s ease-in-out forwards';
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Create sparkles on click
document.addEventListener('click', (e) => {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createSparkle(
                e.clientX + (Math.random() - 0.5) * 50,
                e.clientY + (Math.random() - 0.5) * 50
            );
        }, i * 100);
    }
}); 