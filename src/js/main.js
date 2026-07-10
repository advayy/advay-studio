// ============================================
// Sample Data - Replace with your actual data
// ============================================
const artworks = [
    {
        id: 1,
        title: 'Untitled #1',
        year: 2024,
        medium: 'Mixed Media on Canvas',
        dimensions: '120 x 90 cm',
        price: 'Available upon request',
        description: 'An exploration of spatial relationships and the interplay between color and form.',
        image: './assets/placeholder-1.svg'
    },
    {
        id: 2,
        title: 'Study in Motion',
        year: 2024,
        medium: 'Acrylic on Canvas',
        dimensions: '100 x 80 cm',
        price: '$8,500',
        description: 'Investigating movement and rhythm through gestural abstraction.',
        image: './assets/placeholder-2.svg'
    },
    {
        id: 3,
        title: 'Convergence',
        year: 2023,
        medium: 'Oil on Canvas',
        dimensions: '150 x 120 cm',
        price: 'Sold',
        description: 'A study of light and shadow, examining how perception shifts with perspective.',
        image: './assets/placeholder-3.svg'
    },
    {
        id: 4,
        title: 'Untitled #2',
        year: 2023,
        medium: 'Digital Print on Aluminum',
        dimensions: '80 x 60 cm',
        price: '$4,200',
        description: 'Digital exploration merging abstract forms with photography.',
        image: './assets/placeholder-4.svg'
    },
];

const galleries = [
    {
        name: 'Galerie La Contemporaine',
        location: 'Vancouver, BC',
        years: '2024 - Present'
    },
    {
        name: 'The Platform Gallery',
        location: 'Toronto, ON',
        years: '2023 - 2024'
    },
    {
        name: 'West Coast Contemporary',
        location: 'Vancouver, BC',
        years: '2022 - 2023'
    },
    {
        name: 'Independent Projects',
        location: 'Various',
        years: '2021 - 2024'
    },
    {
        name: 'Emerging Artists Collective',
        location: 'Vancouver, BC',
        years: '2020 - 2022'
    },
];

// ============================================
// DOM Elements
// ============================================
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.getElementById('workModal');
const modalClose = document.querySelector('.modal-close');
const sidebarNav = document.querySelector('.sidebar-nav');

// ============================================
// Navigation
// ============================================
function setActivePage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Remove active state from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show selected page
    const selectedPage = document.querySelector(`[data-page="${pageId}"]`);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Set active nav link
    const activeLink = document.querySelector(`[data-page="${pageId}"]`);
    if (activeLink && activeLink.classList.contains('nav-link')) {
        activeLink.classList.add('active');
    } else {
        const navLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
        if (navLink) navLink.classList.add('active');
    }

    // Close mobile menu
    sidebarNav.classList.remove('mobile-open');

    // Update URL
    window.history.pushState(null, null, `#${pageId}`);
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        setActivePage(pageId);
    });
});

// Handle browser back/forward buttons
window.addEventListener('hashchange', () => {
    const pageId = window.location.hash.slice(1) || 'home';
    setActivePage(pageId);
});

// ============================================
// Work Modal
// ============================================
function openWorkModal(work) {
    document.getElementById('modalImage').src = work.image;
    document.getElementById('modalTitle').textContent = work.title;
    document.getElementById('modalYear').textContent = work.year;
    document.getElementById('modalDescription').textContent = work.description;
    document.getElementById('modalMedium').textContent = work.medium;
    document.getElementById('modalDimensions').textContent = work.dimensions;
    document.getElementById('modalPrice').textContent = work.price;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeWorkModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeWorkModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeWorkModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeWorkModal();
    }
});

// ============================================
// Render Collections
// ============================================
function renderWorks() {
    const worksGrid = document.getElementById('worksGrid');
    worksGrid.innerHTML = artworks.map(work => `
        <div class="work-item" data-work-id="${work.id}">
            <img src="${work.image}" alt="${work.title}">
            <div class="work-info">
                <h4>${work.title}</h4>
                <p>${work.year}</p>
            </div>
        </div>
    `).join('');

    // Add click listeners to work items
    document.querySelectorAll('.work-item').forEach(item => {
        item.addEventListener('click', () => {
            const workId = item.getAttribute('data-work-id');
            const work = artworks.find(w => w.id == workId);
            if (work) openWorkModal(work);
        });
    });
}

function renderGalleries() {
    const galleriesList = document.getElementById('galleriesList');
    galleriesList.innerHTML = galleries.map(gallery => `
        <div class="gallery-item">
            <span class="gallery-name">${gallery.name}</span>
            <span class="gallery-location">${gallery.location}</span>
            <span class="gallery-years">${gallery.years}</span>
        </div>
    `).join('');
}

// ============================================
// Mobile Menu
// ============================================
function initMobileMenu() {
    // Create menu toggle button for mobile
    if (window.innerWidth <= 768) {
        const contentContainer = document.querySelector('.content-container');
        if (!document.querySelector('.mobile-menu-toggle')) {
            const toggleButton = document.createElement('button');
            toggleButton.className = 'mobile-menu-toggle';
            toggleButton.innerHTML = '☰';
            toggleButton.setAttribute('aria-label', 'Toggle menu');
            
            sidebarNav.insertBefore(toggleButton, sidebarNav.firstChild);

            toggleButton.addEventListener('click', (e) => {
                e.stopPropagation();
                sidebarNav.classList.toggle('mobile-open');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!sidebarNav.contains(e.target) && sidebarNav.classList.contains('mobile-open')) {
                    sidebarNav.classList.remove('mobile-open');
                }
            });
        }
    }
}

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Render data
    renderWorks();
    renderGalleries();

    // Initialize mobile menu
    initMobileMenu();

    // Set initial page from URL hash or default to home
    const initialPage = window.location.hash.slice(1) || 'home';
    setActivePage(initialPage);
});

// Re-initialize on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        initMobileMenu();
    }, 250);
});
