// JavaScript for Shree Balaji Communication Website

// Application Data
const appData = {
  companyInfo: {
    name: "Shree Balaji Communication",
    tagline: "Your Trusted Mobile Partner",
    description: "Leading mobile shop specializing in brand new mobiles, refurbished devices, accessories, and repair services.",
    established: "2010",
    experience: "14+ Years",
    phone: "+91 8860937132",
    email: "rajeshkumarbalaji100@gmail.com",
    address: "WZ-573 Naraina Village Near Aravali Public School",
    hours: "Mon-Sat 10:00 AM - 8:00 PM"
  },
  categories: [
    {
      id: 1,
      name: "Brand New Mobiles",
      description: "Latest smartphones from top brands",
      icon: "fas fa-mobile-alt",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300"
    },
    {
      id: 2,
      name: "Refurbished Mobiles",
      description: "Quality tested pre-owned devices",
      icon: "fas fa-recycle",
      image: "https://images.unsplash.com/photo-1592899677977-e8e29f49e9c8?w=300"
    },
    {
      id: 3,
      name: "Mobile Accessories",
      description: "Cases, chargers, cables & more",
      icon: "fas fa-plug",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300"
    },
    {
      id: 4,
      name: "Bluetooth Speakers",
      description: "Premium audio devices",
      icon: "fas fa-volume-up",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300"
    },
    {
      id: 5,
      name: "Headphones & Earbuds",
      description: "Wired & wireless audio solutions",
      icon: "fas fa-headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
    },
    {
      id: 6,
      name: "Power Banks",
      description: "Portable charging solutions",
      icon: "fas fa-battery-three-quarters",
      image: "https://images.unsplash.com/photo-1609592094734-84c71f0c8bc5?w=300"
    }
  ],
  featuredProducts: [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "₹1,34,900",
      originalPrice: "₹1,39,900",
      rating: 4.8,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300",
      category: "Brand New Mobiles",
      badge: "Hot Deal"
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: "₹79,999",
      originalPrice: "₹84,999",
      rating: 4.7,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300",
      category: "Brand New Mobiles",
      badge: "New Arrival"
    },
    {
      id: 3,
      name: "iPhone 13 (Refurbished)",
      price: "₹54,999",
      originalPrice: "₹89,900",
      rating: 4.6,
      reviews: 324,
      image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300",
      category: "Refurbished Mobiles",
      badge: "Best Value"
    },
    {
      id: 4,
      name: "OnePlus 12R",
      price: "₹42,999",
      originalPrice: "₹45,999",
      rating: 4.5,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=300",
      category: "Brand New Mobiles",
      badge: "Limited Offer"
    },
    {
      id: 5,
      name: "JBL Charge 5 Speaker",
      price: "₹14,999",
      originalPrice: "₹17,999",
      rating: 4.4,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300",
      category: "Speakers",
      badge: "Popular"
    },
    {
      id: 6,
      name: "AirPods Pro 2nd Gen",
      price: "₹24,900",
      originalPrice: "₹26,900",
      rating: 4.9,
      reviews: 412,
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300",
      category: "Headphones",
      badge: "Top Rated"
    }
  ],
  services: [
    {
      title: "Mobile Repair Services",
      description: "Expert repair services for all mobile brands",
      icon: "fas fa-tools"
    },
    {
      title: "Trade-In Program",
      description: "Exchange your old device for instant credit",
      icon: "fas fa-exchange-alt"
    },
    {
      title: "Extended Warranty",
      description: "Comprehensive protection plans available",
      icon: "fas fa-shield-alt"
    },
    {
      title: "Free Home Delivery",
      description: "Fast and secure delivery to your doorstep",
      icon: "fas fa-truck"
    }
  ],
  testimonials: [
    {
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Excellent service and genuine products. Bought iPhone 14 at best price!",
      location: "Delhi"
    },
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Great experience with refurbished phone purchase. Working perfectly!",
      location: "Delhi"
    },
    {
      name: "Amit Patel",
      rating: 4,
      comment: "Professional service and quick repair. Highly recommended!",
      location: "Delhi"
    }
  ]
};

// Shopping Cart Class
class ShoppingCart {
  constructor() {
    this.items = [];
    this.updateCartUI();
  }

  addItem(product) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({
        ...product,
        quantity: 1
      });
    }
    
    this.updateCartUI();
    this.showAddToCartFeedback(product.name);
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.updateCartUI();
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId);
      } else {
        item.quantity = quantity;
        this.updateCartUI();
      }
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[₹,]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  }

  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const emptyCart = document.getElementById('emptyCart');

    if (!cartCount) return;

    // Update cart count badge
    const totalItems = this.getItemCount();
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'block' : 'none';

    if (!cartItems) return;

    // Update cart modal
    if (this.items.length === 0) {
      cartItems.style.display = 'none';
      if (emptyCart) emptyCart.style.display = 'block';
    } else {
      cartItems.style.display = 'block';
      if (emptyCart) emptyCart.style.display = 'none';
      
      cartItems.innerHTML = this.items.map(item => `
        <div class="cart-item d-flex align-items-center">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image me-3">
          <div class="flex-grow-1">
            <h6 class="mb-1">${item.name}</h6>
            <p class="text-muted mb-2">${item.price}</p>
            <div class="quantity-controls">
              <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">
                <i class="fas fa-minus"></i>
              </button>
              <input type="number" class="quantity-input" value="${item.quantity}" 
                     onchange="cart.updateQuantity(${item.id}, parseInt(this.value))">
              <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div class="text-end">
            <p class="mb-2 fw-bold">₹${(parseFloat(item.price.replace(/[₹,]/g, '')) * item.quantity).toLocaleString()}</p>
            <button class="btn btn-sm btn-outline-danger" onclick="cart.removeItem(${item.id})">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      `).join('');
    }

    // Update total
    if (cartTotal) {
      cartTotal.textContent = `₹${this.getTotal().toLocaleString()}`;
    }
  }

  showAddToCartFeedback(productName) {
    // Create and show a toast notification
    const toastContainer = document.createElement('div');
    toastContainer.className = 'position-fixed top-0 end-0 p-3';
    toastContainer.style.zIndex = '9999';
    
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white bg-success border-0';
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">
          <i class="fas fa-check-circle me-2"></i>
          ${productName} added to cart!
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    `;
    
    toastContainer.appendChild(toast);
    document.body.appendChild(toastContainer);
    
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    // Remove element after hiding
    toast.addEventListener('hidden.bs.toast', () => {
      document.body.removeChild(toastContainer);
    });
  }
}

// Initialize shopping cart
let cart;

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
  // Initialize cart first
  cart = new ShoppingCart();
  
  // Wait for Bootstrap to be ready
  setTimeout(() => {
    initializeApp();
  }, 100);
});

// Initialize Application
function initializeApp() {
  renderCategories();
  renderFeaturedProducts();
  renderServices();
  renderTestimonials();
  setupEventListeners();
  setupSmoothScrolling();
  setupNavbarBehavior();
  setupAnimations();
}

// Render Categories
function renderCategories() {
  const container = document.getElementById('categoriesContainer');
  if (!container) return;

  container.innerHTML = appData.categories.map(category => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="category-card text-center fade-in">
        <div class="category-icon">
          <i class="${category.icon}"></i>
        </div>
        <h4>${category.name}</h4>
        <p>${category.description}</p>
        <button class="btn btn-outline-primary btn-sm mt-2" onclick="searchProducts('${category.name}')">
          Explore Products
        </button>
      </div>
    </div>
  `).join('');
}

// Render Featured Products
function renderFeaturedProducts() {
  const container = document.getElementById('featuredContainer');
  if (!container) return;

  container.innerHTML = appData.featuredProducts.map(product => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="product-card fade-in">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" class="w-100">
          <div class="product-badge badge-${getBadgeClass(product.badge)}">
            ${product.badge}
          </div>
        </div>
        <div class="product-info">
          <h5 class="product-title">${product.name}</h5>
          <div class="product-rating">
            <div class="stars">
              ${generateStars(product.rating)}
            </div>
            <small class="rating-text">(${product.reviews} reviews)</small>
          </div>
          <div class="product-price">
            <span class="current-price">${product.price}</span>
            ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
          </div>
          <button class="btn btn-primary add-to-cart-btn" onclick="addToCart(${product.id})">
            <i class="fas fa-shopping-cart me-2"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Global function to add items to cart
function addToCart(productId) {
  const product = appData.featuredProducts.find(p => p.id === productId);
  if (product && cart) {
    cart.addItem(product);
  }
}

// Render Services
function renderServices() {
  const container = document.getElementById('servicesContainer');
  if (!container) return;

  container.innerHTML = appData.services.map(service => `
    <div class="col-lg-3 col-md-6 mb-4">
      <div class="service-card fade-in">
        <div class="service-icon">
          <i class="${service.icon}"></i>
        </div>
        <h5 class="mb-3">${service.title}</h5>
        <p class="text-muted">${service.description}</p>
      </div>
    </div>
  `).join('');
}

// Render Testimonials
function renderTestimonials() {
  const container = document.getElementById('testimonialsContainer');
  if (!container) return;

  container.innerHTML = appData.testimonials.map(testimonial => `
    <div class="testimonial-card">
      <div class="testimonial-rating">
        ${generateStars(testimonial.rating)}
      </div>
      <p class="testimonial-text">"${testimonial.comment}"</p>
      <div class="testimonial-author">${testimonial.name}</div>
      <div class="testimonial-location">${testimonial.location}</div>
    </div>
  `).join('');
}

// Helper Functions
function getBadgeClass(badge) {
  const badgeMap = {
    'Hot Deal': 'hot',
    'New Arrival': 'new',
    'Best Value': 'value',
    'Limited Offer': 'limited',
    'Popular': 'popular',
    'Top Rated': 'rated'
  };
  return badgeMap[badge] || 'new';
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }
  
  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }
  
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
  }
  
  return stars;
}

// Setup Event Listeners
function setupEventListeners() {
  // Cart modal - using event delegation to ensure it works
  document.addEventListener('click', function(e) {
    if (e.target.closest('.cart-btn')) {
      e.preventDefault();
      const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
      cartModal.show();
    }
    
    if (e.target.closest('.search-btn')) {
      e.preventDefault();
      const searchModal = new bootstrap.Modal(document.getElementById('searchModal'));
      searchModal.show();
      setTimeout(() => {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.focus();
      }, 300);
    }
  });

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }

  // Checkout button
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', handleCheckout);
  }

  // Navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Close mobile menu if open
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      }
    });
  });
}

// Search Functions
function handleSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const resultsContainer = document.getElementById('searchResults');
  
  if (!resultsContainer) return;
  
  if (query.length < 2) {
    resultsContainer.innerHTML = '<p class="text-muted">Start typing to search products...</p>';
    return;
  }

  const results = appData.featuredProducts.filter(product => 
    product.name.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    resultsContainer.innerHTML = '<p class="text-muted">No products found matching your search.</p>';
    return;
  }

  resultsContainer.innerHTML = results.map(product => `
    <div class="d-flex align-items-center border-bottom py-2">
      <img src="${product.image}" alt="${product.name}" class="me-3" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
      <div class="flex-grow-1">
        <h6 class="mb-1">${product.name}</h6>
        <p class="text-muted mb-0">${product.price}</p>
      </div>
      <button class="btn btn-sm btn-primary" onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    </div>
  `).join('');
}

function searchProducts(category) {
  const searchModal = new bootstrap.Modal(document.getElementById('searchModal'));
  searchModal.show();
  
  setTimeout(() => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.value = category;
      handleSearch();
    }
  }, 300);
}

// Contact Form Handler
function handleContactForm(e) {
  e.preventDefault();
  
  // Get form data
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();
  
  // Basic validation
  if (!firstName || !lastName || !email || !phone || !subject || !message) {
    showNotification('Please fill in all required fields.', 'danger');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showNotification('Please enter a valid email address.', 'danger');
    return;
  }
  
  // Show loading state
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<div class="spinner-border spinner-border-sm me-2" role="status"></div>Sending...';
  submitBtn.disabled = true;

  // Simulate form submission
  setTimeout(() => {
    // Show success message
    showNotification('Message sent successfully! We\'ll contact you soon.', 'success');
    
    // Reset form
    e.target.reset();
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }, 2000);
}

// Checkout Handler
function handleCheckout() {
  if (!cart || cart.items.length === 0) {
    showNotification('Your cart is empty!', 'warning');
    return;
  }

  // Create checkout summary
  const summary = cart.items.map(item => 
    `${item.name} (Qty: ${item.quantity}) - ${item.price}`
  ).join('\n');
  
  const total = cart.getTotal();
  const message = `Hello! I would like to purchase the following items:\n\n${summary}\n\nTotal: ₹${total.toLocaleString()}\n\nPlease contact me to complete the order.`;
  
  // Open WhatsApp with pre-filled message
  const whatsappUrl = `https://wa.me/918860937132?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  
  // Show confirmation
  showNotification('Redirecting to WhatsApp for order completion...', 'info');
}

// Smooth Scrolling Setup
function setupSmoothScrolling() {
  // Already handled in event listeners
}

// Navbar Behavior
function setupNavbarBehavior() {
  const navbar = document.querySelector('.custom-navbar');
  if (!navbar) return;
  
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scrolled class for styling
    if (scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Update active nav link
    updateActiveNavLink();
    
    lastScrollTop = scrollTop;
  });
}

// Update Active Navigation Link
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Setup Animations
function setupAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });
  }, 500);
}

// Utility Functions
function formatPrice(price) {
  return `₹${price.toLocaleString()}`;
}

function showNotification(message, type = 'success') {
  const toastContainer = document.createElement('div');
  toastContainer.className = 'position-fixed top-0 end-0 p-3';
  toastContainer.style.zIndex = '9999';
  
  const toast = document.createElement('div');
  const bgClass = type === 'danger' ? 'bg-danger' : type === 'warning' ? 'bg-warning' : type === 'info' ? 'bg-info' : 'bg-success';
  toast.className = `toast align-items-center text-white ${bgClass} border-0`;
  toast.setAttribute('role', 'alert');
  
  const iconMap = {
    'success': 'check-circle',
    'danger': 'exclamation-circle',
    'warning': 'exclamation-triangle',
    'info': 'info-circle'
  };
  
  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        <i class="fas fa-${iconMap[type] || 'check-circle'} me-2"></i>
        ${message}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
    </div>
  `;
  
  toastContainer.appendChild(toast);
  document.body.appendChild(toastContainer);
  
  const bsToast = new bootstrap.Toast(toast);
  bsToast.show();
  
  toast.addEventListener('hidden.bs.toast', () => {
    document.body.removeChild(toastContainer);
  });
}

// Initialize Bootstrap components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Bootstrap tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Initialize Bootstrap popovers
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
});

// Handle window resize for responsive features
window.addEventListener('resize', function() {
  updateActiveNavLink();
});

// Export functions for global access
window.ShreeBalajiApp = {
  cart,
  searchProducts,
  showNotification,
  formatPrice,
  addToCart
};