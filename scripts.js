// Mobile navigation toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// FAQ toggle functionality
const faqHeaders = document.querySelectorAll('.faq-group-header');

faqHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const group = header.parentElement;
    const body = group.querySelector('.faq-group-body');
    const icon = header.querySelector('i');
    
    // Close all other FAQ items
    faqHeaders.forEach(otherHeader => {
      if (otherHeader !== header) {
        const otherGroup = otherHeader.parentElement;
        const otherBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherHeader.querySelector('i');
        
        otherBody.classList.remove('open');
        otherIcon.className = 'fas fa-plus';
      }
    });
    
    // Toggle current FAQ item
    body.classList.toggle('open');
    icon.className = body.classList.contains('open') ? 'fas fa-minus' : 'fas fa-plus';
  });
});

// FAQ menu functionality
const faqMenuItems = document.querySelectorAll('.faq-menu li');

faqMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    faqMenuItems.forEach(otherItem => otherItem.classList.remove('active'));
    item.classList.add('active');
  });
});