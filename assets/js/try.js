document.addEventListener("DOMContentLoaded", function () {
    const categories = {
      all: [],
      "filter-cartridge": [
        "PP Sedimen",
        "CTO & GAC",
        "String Wound",
        "Pleated Filter",
        "Inline Filter",
        "Bag Filter",
      ],
      "housing-filter": [
        "Housing 10-20 Inchi",
        "Housing BB 10-20 Inchi",
        "Housing Multi Cartridge Stainless",
        "Housing Bag Filter",
      ],
      "tabung-frp": [
        "Instaguard Brand Tabung FRP",
        "Tabung Stainless",
        "Tabung FRP Heavy Duty Industrial Uses",
        "Multiport & Strainer",
      ],
      "ultra-filter": ["UF 2T 500-2000", "UF PVDF", "UF Heavy Duty"],
      pompa: ["Booster Pump RO", "Pompa Air SS", "Pompa Vertical SS"],
      "uv-ballast": [
        "Lampu UV Viqua Brand",
        "Lampu UV 12-55 Watt",
        "Lampu UV Germicidal",
        "Ballast UV",
      ],
      "air-minum": [
        "Mesin TKA Purifier 5 Step System",
        "Mesin TKA Purifier 6 Step System",
        "Water Dispenser",
      ],
      "ro-membrane": [
        "Undersink RO",
        "Medium RO System",
        "Heavy Duty RO System",
        "Membran Element RO",
      ],
      lainnya: [
        "Sparepart Filter Air",
        "Selenoid",
        "Fitting dan Acc",
        "Testerkit",
        "Perlengkapan Depot",
      ],
    };
  
    const products = {
      all: [
        ],
          "pp-sedimen": [
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/1. PP SEDIMEN/FILTER CARTRIDGE 10 INCHI.png", name: "Filter Cartridge 10 Inch" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/1. PP SEDIMEN/FILTER CARTRIDGE DEWATER 20 INCHI.png", name: "Filter Cartridge Dewater 20 Inch" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/1. PP SEDIMEN/FILTER CARTRIDGE KOLON 10 INCHI.png", name: "Filter Cartridge Kolon 10 Inch" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/1. PP SEDIMEN/FILTER CARTRIDGE NANO 10 INCHI.png", name: "Filter Cartridge Nano 10 Inch" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/1. PP SEDIMEN/FILTER CARTRIDGE PP SEDIMENT JUMBO.png", name: "Filter Cartridge PP Sediment Jumbo" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/1. PP SEDIMEN/FILTER CARTRIDGE PP SEDIMET.png", name: "Filter Cartridge PP Sedimet" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/1. PP SEDIMEN/FILTER PP CARTRIDGE (1).png", name: "Filter PP Cartridge (1)" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/1. PP SEDIMEN/FILTER PP CARTRIDGE (2).png", name: "Filter PP Cartridge (2)" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/1. PP SEDIMEN/FILTER SEDIMENT NESCA 10 INCHI.png", name: "Filter Sediment Nesca 10 Inch" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/1. PP SEDIMEN/PP SEDIMENT (1).png", name: "PP Sediment (1)" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/1. PP SEDIMEN/PP SEDIMENT (2).png", name: "PP Sediment (2)" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/1. PP SEDIMEN/PP SEDIMENT (3).png", name: "PP Sediment (3)" },
          ],
          "cto-gac": [
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/2. CTO & GAC/CTO (1).png", name: "CTO (1)" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/2. CTO & GAC/CTO (2).png", name: "CTO (2)" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/2. CTO & GAC/CTO (3).png", name: "CTO (3)" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/2. CTO & GAC/GAC (1).png", name: "GAC (1)" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/2. CTO & GAC/GAC (2).png", name: "GAC (2)" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/2. CTO & GAC/CTO MATRIKX.png", name: "CTO Matrikx" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/2. CTO & GAC/CTO OLSMOPURE.png", name: "CTO OLSMOPURE" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/2. CTO & GAC/CTO WATER WIZARD.png", name: "CTO Water Wizard" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/2. CTO & GAC/GAC OLSMOPURE.png", name: "GAC OLSMOPURE" },
          ],
          "string-wound": [
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/3. STRING WOUND/STRING WOUND 1.png", name: "String Wound 1" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/3. STRING WOUND/STRING WOUND 2.png", name: "String Wound 2" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/3. STRING WOUND/STRING WOUND 3.png", name: "String Wound 3" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/3. STRING WOUND/STRING WOUND 4.png", name: "String Wound 4" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/3. STRING WOUND/STRING WOUND 5.png", name: "String Wound 5" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/3. STRING WOUND/STRING WOUND 6.png", name: "String Wound 6" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/3. STRING WOUND/STRING WOUND 7.png", name: "String Wound 7" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/3. STRING WOUND/STRING WOUND 8.png", name: "String Wound 8" },
          ],
          "pleated-filter": [
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/4. PLEATED/PLEATED FILTER 1.png", name: "Pleated Filter 1" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/4. PLEATED/PLEATED FILTER 2.png", name: "Pleated Filter 2" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/4. PLEATED/PLEATED FILTER 3.png", name: "Pleated Filter 3" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/4. PLEATED/PLEATED FILTER 4.png", name: "Pleated Filter 4" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/4. PLEATED/PLEATED FILTER 5.png", name: "Pleated Filter 5" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/4. PLEATED/PLEATED FILTER 6.png", name: "Pleated Filter 6" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/4. PLEATED/PLEATED FILTER BOG FLOW.png", name: "Pleated Filter BOG Flow" },
          ],
          "inline-filter": [
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/5. INLINE FILTER/INNER FILTER 1.png", name: "Inner Filter 1" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/5. INLINE FILTER/INNER FILTER 2.png", name: "Inner Filter 2" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/5. INLINE FILTER/INNER FILTER 3.png", name: "Inner Filter 3" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/5. INLINE FILTER/INNER FILTER 4.png", name: "Inner Filter 4" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/5. INLINE FILTER/INNER FILTER 5.png", name: "Inner Filter 5" },
          ],
          "bag-filter": [
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/6. BAG FILTER/FILTER BAG 1.png", name: "Filter Bag 1" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/6. BAG FILTER/FILTER BAG 2.png", name: "Filter Bag 2" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/6. BAG FILTER/FILTER BAG 3.png", name: "Filter Bag 3" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/6. BAG FILTER/FILTER BAG 4.png", name: "Filter Bag 4" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/6. BAG FILTER/FILTER BAG 5.png", name: "Filter Bag 5" },
            { img: "assets/images/PRODUCTT/2. FILTER CARTRIDGE/6. BAG FILTER/FILTER BAG 6.png", name: "Filter Bag 6" },
          ],
        };
        
  
  
    const categoryList = document.getElementById("categoryList");
    const subcategoryContainer = document.getElementById("subcategoryContainer");
    const subcategoryDropdown = document.getElementById("subcategoryDropdown");
    const productContainer = document.getElementById("productContainer");
    const categoryDropdown = document.getElementById("categoryDropdown");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
  
    categoryList.addEventListener("click", function (e) {
      if (e.target && e.target.nodeName == "LI") {
        const selectedCategory = e.target.getAttribute("data-category");
        updateSubcategories(selectedCategory);
        updateProducts(selectedCategory);
      }
    });
  
    categoryDropdown.addEventListener("change", function () {
      const selectedCategory = categoryDropdown.value;
      updateSubcategories(selectedCategory);
      updateProducts(selectedCategory);
    });
  
    subcategoryDropdown.addEventListener("change", function () {
      const selectedSubcategory = subcategoryDropdown.value;
      updateProducts(selectedSubcategory);
    });
  
    function searchProducts(query) {
      const products = document.querySelectorAll(".product");
      products.forEach((product) => {
        const productName = product
          .querySelector(".product-name")
          .innerText.toLowerCase();
        if (productName.includes(query.toLowerCase())) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    }
  
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim();
      searchProducts(query);
    });
  
    function updateSubcategories(category) {
      subcategoryContainer.innerHTML = "";
      subcategoryDropdown.innerHTML = "";
  
      const subcategories = categories[category];
      if (subcategories.length > 0) {
        subcategories.forEach((subcategory) => {
          const button = document.createElement("button");
          button.textContent = subcategory;
          button.dataset.subcategory = subcategory
            .toLowerCase()
            .replace(" ", "-");
          button.addEventListener("click", function () {
            updateProducts(button.dataset.subcategory);
          });
          subcategoryContainer.appendChild(button);
  
          const option = document.createElement("option");
          option.value = subcategory.toLowerCase().replace(" ", "-");
          option.textContent = subcategory;
          subcategoryDropdown.appendChild(option);
        });
  
        // Set the first subcategory as the default
        const firstSubcategory = subcategories[0].toLowerCase().replace(" ", "-");
        updateProducts(firstSubcategory);
      }
    }
  
    function updateProducts(subcategory) {
      productContainer.innerHTML = "";
      const selectedProducts = products[subcategory] || products["all"];
  
      selectedProducts.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
  
        const img = document.createElement("img");
        img.src = product.img;
        img.alt = product.name;
  
        const name = document.createElement("p");
        name.className = "product-name";
        name.textContent = product.name;
  
        productCard.appendChild(img);
        productCard.appendChild(name);
        productContainer.appendChild(productCard);
      });
    }
  
    function searchProducts(query) {
      const category = categoryDropdown.value;
      const subcategory = subcategoryDropdown.value;
      const allProducts = products["all"];
      const filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
  
      productContainer.innerHTML = "";
  
      filteredProducts.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
  
        const img = document.createElement("img");
        img.src = product.img;
        img.alt = product.name;
  
        const name = document.createElement("p");
        name.className = "product-name";
        name.textContent = product.name;
  
        productCard.appendChild(img);
        productCard.appendChild(name);
        productContainer.appendChild(productCard);
      });
    }
  
    // Initialize with default category 'all'
    updateSubcategories("all");
    updateProducts("all");
  });
  