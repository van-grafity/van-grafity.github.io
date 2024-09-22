// Fungsi untuk mengisi dropdown dengan sub kategori
function populateSubcategoryDropdown(categoryNumber) {
    const subcategories = getSectionsByCategory(categoryNumber);
    const dropdown = document.createElement('select');
    dropdown.id = 'subcategory-dropdown';
    dropdown.onchange = handleSubcategoryChange;

    // Kosongkan dropdown sebelum mengisinya
    dropdown.innerHTML = '';

    subcategories.forEach((subcategory, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = subcategory;
        dropdown.appendChild(option);
    });

    // Tambahkan dropdown ke dalam .categoryline-list
    const sectionProductList = document.querySelector('.categoryline-list');
    sectionProductList.innerHTML = ''; // Kosongkan sebelumnya
    sectionProductList.appendChild(dropdown);

    // Panggil fungsi untuk menampilkan produk saat subkategori pertama dipilih
    handleSubcategoryChange();
}

// Fungsi untuk menampilkan produk sesuai subkategori yang dipilih
function handleSubcategoryChange() {
    const dropdown = document.getElementById('subcategory-dropdown');
    const selectedSubcategoryIndex = dropdown.value;
    const categoryNumber = getCurrentCategoryNumber(); // Sesuaikan dengan logikamu untuk mendapatkan kategori saat ini

    const products = getProductsByCategory(categoryNumber)[0].products; // Sesuaikan struktur produkmu

    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = ''; // Kosongkan produk sebelumnya

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = product;
        productContainer.appendChild(productElement);
    });
}

// Fungsi untuk mendapatkan nomor kategori saat ini (ini bisa disesuaikan dengan logikamu)
function getCurrentCategoryNumber() {
    // Asumsikan nomor kategori diperoleh dari suatu logika tertentu, sesuaikan dengan kebutuhan
    return 2; // Misalnya, untuk sementara menggunakan kategori 2
}

// Panggil fungsi ini setelah halaman dimuat atau ketika kategori berubah
document.addEventListener("DOMContentLoaded", function() {
    populateSubcategoryDropdown(getCurrentCategoryNumber()); // Ganti dengan nomor kategori yang sesuai
});
