// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initDemoTabs();
    initCategoryTree();
    initSmoothScrolling();
    initAnimations();
    initCharts();
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Demo tabs functionality
function initDemoTabs() {
    const tabButtons = document.querySelectorAll('.demo-nav-btn');
    const tabContents = document.querySelectorAll('.demo-tab');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked button and corresponding tab
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Category tree functionality
function initCategoryTree() {
    const categoryHeaders = document.querySelectorAll('.category-header');
    
    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const categoryItem = this.parentElement;
            const children = categoryItem.querySelector('.category-children');
            const icon = this.querySelector('i');
            
            if (children) {
                // Toggle expanded state
                this.classList.toggle('expanded');
                
                // Toggle children visibility with animation
                if (children.style.display === 'none' || children.style.display === '') {
                    children.style.display = 'block';
                    children.style.opacity = '0';
                    children.style.transform = 'translateY(-10px)';
                    
                    setTimeout(() => {
                        children.style.opacity = '1';
                        children.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    children.style.opacity = '0';
                    children.style.transform = 'translateY(-10px)';
                    
                    setTimeout(() => {
                        children.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
}

// Smooth scrolling functionality
function initSmoothScrolling() {
    // Add smooth scrolling behavior to all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animations and effects
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .arch-component, .stat-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-icon');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Chart animations and interactions
function initCharts() {
    // Bar chart hover effects
    const chartBars = document.querySelectorAll('.chart-bar');
    chartBars.forEach(bar => {
        bar.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.3)';
        });
        
        bar.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Pie chart segments
    const pieSegments = document.querySelectorAll('.pie-segment');
    pieSegments.forEach(segment => {
        segment.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.zIndex = '10';
        });
        
        segment.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '1';
        });
    });
}

// Utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#667eea'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Mock data functions for demo
function generateMockData() {
    return {
        users: [
            { id: 1, name: 'Ahmet Yılmaz', department: 'IT', status: 'active', lastActivity: '2 dk önce' },
            { id: 2, name: 'Ayşe Demir', department: 'İK', status: 'active', lastActivity: '5 dk önce' },
            { id: 3, name: 'Mehmet Kaya', department: 'Satış', status: 'inactive', lastActivity: '1 saat önce' }
        ],
        stats: {
            avgWorkHours: 8.5,
            workTimeRatio: 78,
            activeUsers: 15,
            systemUptime: 92
        },
        categories: [
            { name: 'İş', children: ['Ofis Uygulamaları', 'Proje Yönetimi'] },
            { name: 'Özel', children: [] },
            { name: 'Eğlence', children: [] }
        ]
    };
}

// Search functionality
function initSearch() {
    const searchInput = document.querySelector('.user-search input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const tableRows = document.querySelectorAll('.users-table tbody tr');
            
            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
}

// Report generation simulation
function generateReport() {
    const reportType = document.querySelector('.report-filters select').value;
    
    // Show loading state
    const generateBtn = document.querySelector('.report-filters .btn-primary');
    const originalText = generateBtn.textContent;
    generateBtn.textContent = 'Oluşturuluyor...';
    generateBtn.disabled = true;
    
    // Simulate report generation
    setTimeout(() => {
        generateBtn.textContent = originalText;
        generateBtn.disabled = false;
        showNotification(`${reportType} başarıyla oluşturuldu!`, 'success');
        
        // Add new report to list
        addNewReport(reportType);
    }, 2000);
}

function addNewReport(type) {
    const reportsList = document.querySelector('.reports-list');
    const newReport = document.createElement('div');
    newReport.className = 'report-item';
    newReport.innerHTML = `
        <div class="report-icon">
            <i class="fas fa-file-pdf"></i>
        </div>
        <div class="report-info">
            <h4>Yeni ${type}</h4>
            <p>${new Date().toLocaleDateString('tr-TR')} - Sistem tarafından oluşturuldu</p>
        </div>
        <div class="report-actions">
            <button class="btn-secondary">İndir</button>
            <button class="btn-secondary">Görüntüle</button>
        </div>
    `;
    
    reportsList.insertBefore(newReport, reportsList.firstChild);
}

// Event listeners for demo buttons
document.addEventListener('click', function(e) {
    // Report generation
    if (e.target.textContent === 'Rapor Oluştur') {
        e.preventDefault();
        generateReport();
    }
    
    // Download buttons
    if (e.target.textContent === 'İndir') {
        e.preventDefault();
        showNotification('Rapor indiriliyor...', 'info');
    }
    
    // View buttons
    if (e.target.textContent === 'Görüntüle') {
        e.preventDefault();
        showNotification('Rapor görüntüleniyor...', 'info');
    }
    
    // Add category button
    if (e.target.textContent === 'Yeni Kategori Ekle') {
        e.preventDefault();
        showNotification('Kategori ekleme özelliği demo modunda aktif değil', 'info');
    }
    
    // Edit and delete buttons
    if (e.target.closest('.btn-icon')) {
        e.preventDefault();
        const icon = e.target.closest('.btn-icon').querySelector('i');
        if (icon.classList.contains('fa-edit')) {
            showNotification('Düzenleme özelliği demo modunda aktif değil', 'info');
        } else if (icon.classList.contains('fa-trash')) {
            showNotification('Silme özelliği demo modunda aktif değil', 'info');
        }
    }
});

// Initialize search when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
});

// Add some interactive data updates
setInterval(() => {
    // Update active users count randomly
    const activeUsersElement = document.querySelector('.stat-card:nth-child(3) .stat-value');
    if (activeUsersElement) {
        const currentCount = parseInt(activeUsersElement.textContent);
        const newCount = Math.max(10, Math.min(20, currentCount + Math.floor(Math.random() * 3) - 1));
        activeUsersElement.textContent = newCount;
    }
    
    // Update system uptime
    const uptimeElement = document.querySelector('.stat-card:nth-child(4) .stat-value');
    if (uptimeElement) {
        const currentUptime = parseInt(uptimeElement.textContent);
        const newUptime = Math.max(90, Math.min(99, currentUptime + Math.floor(Math.random() * 2) - 1));
        uptimeElement.textContent = newUptime + '%';
    }
}, 5000);

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key to close any open modals or overlays
    if (e.key === 'Escape') {
        // Close any open dropdowns or modals
        const activeElements = document.querySelectorAll('.active, .expanded');
        activeElements.forEach(el => {
            if (el.classList.contains('expanded')) {
                el.classList.remove('expanded');
            }
        });
    }
    
    // Tab key navigation enhancement
    if (e.key === 'Tab') {
        // Add focus styles to interactive elements
        const focusableElements = document.querySelectorAll('button, input, select, a');
        focusableElements.forEach(el => {
            el.addEventListener('focus', function() {
                this.style.outline = '2px solid #667eea';
                this.style.outlineOffset = '2px';
            });
            
            el.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        });
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Any scroll-based functionality can be added here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler); 