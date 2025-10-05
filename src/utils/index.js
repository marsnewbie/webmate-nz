export const createPageUrl = (pageName) => {
  const routes = {
    'Home': '/',
    'Services': '/services',
    'Portfolio': '/portfolio',
    'Contact': '/contact'
  };
  return routes[pageName] || '/';
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-NZ', {
    style: 'currency',
    currency: 'NZD'
  }).format(amount);
};

export const formatPhoneNumber = (phone) => {
  return phone.replace(/(\d{2})(\d{3})(\d{4})/, '$1 $2 $3');
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
  return phoneRegex.test(phone);
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
