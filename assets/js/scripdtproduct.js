// Data kategori dan produk
const categories = [
    { id: 'all', name: 'All' },
    { id: 'filter-cartridge', name: 'Filter Cartridge' },
    { id: 'housing-filter', name: 'Housing Filter' },
    { id: 'tabung-frp', name: 'Tabung FRP & Multiport' },
    { id: 'ultra-filter', name: 'Ultra Filter' },
    { id: 'pompa', name: 'Pompa' },
    { id: 'lampu-uv', name: 'Lampu UV & Ballast' },
    { id: 'mesin-air-minum', name: 'Mesin Air Minum' },
    { id: 'mesin-ro', name: 'Mesin RO & Membrane' },
    { id: 'lainnya', name: 'Lainnya' }
  ];
  
  const products = {
    'filter-cartridge': [
      { name: 'Filter Cartridge Type A', description: 'High-quality filter cartridge.', price: '$20' },
      { name: 'Filter Cartridge Type B', description: 'Durable and efficient.', price: '$25' }
    ],
    'housing-filter': [
      { name: 'Housing Filter Type A', description: 'Robust housing filter.', price: '$50' },
      { name: 'Housing Filter Type B', description: 'Advanced housing filter.', price: '$60' }
    ],
    // Add more products here...
  };
  
  // Initialize categories
  function initializeCategories() {
    const categoryList = document.getElementById('category-list');
    categories.forEach(category => {
      const listItem = document.createElement('li');
      listItem.textContent = category.name;
      listItem.dataset.id = category.id;
      listItem.classList.add('category-item');
      listItem.addEventListener('click', () => displayCategoryContent(category.id));
      categoryList.appendChild(listItem);
    });
  }
  
  // Display content for selected category
  function displayCategoryContent(categoryId) {
    const sectionList = document.getElementById('section-list');
    const productList = document.getElementById('product-list');
    
    sectionList.innerHTML = '';
    productList.innerHTML = '';
  
    if (categoryId === 'all') {
      // Show all products from all categories
      const allProducts = Object.values(products).flat();
      allProducts.forEach(product => displayProduct(product));
    } else {
      // Show sections and products for the selected category
      const sectionsForCategory = Object.keys(products).filter(id => id !== 'all');
      sectionsForCategory.forEach(section => {
        if (categoryId === section) {
          const productsForCategory = products[section] || [];
          productsForCategory.forEach(product => displayProduct(product));
        }
      });
    }
  }
  
  // Display a single product
  function displayProduct(product) {
    const productList = document.getElementById('product-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} - ${product.description} - ${product.price}`;
    productList.appendChild(listItem);
  }
  
  // Handle search input
  function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    const productList = document.getElementById('product-list');
    const productsItems = productList.querySelectorAll('li');
  
    productsItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? 'block' : 'none';
    });
  }
  
  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    initializeCategories();
  
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', handleSearch);
  });
  