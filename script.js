function filterItems(category) {
  const items = document.querySelectorAll('.filter-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.classList.add('visible');
    } else {
      item.classList.remove('visible');
    }
  });
}

// Initialize to show all items on page load
filterItems('all');
