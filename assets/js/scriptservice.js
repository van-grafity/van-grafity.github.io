document.addEventListener('DOMContentLoaded', function() {
    const images = [
      './assets/images/SERVICES/1_RO/RO_800G.png',
      './assets/images/SERVICES/1_RO/RO_2000G.jpg',
      './assets/images/SERVICES/1_RO/RO_4000G+PREFILTER.jpg',
      './assets/images/SERVICES/1_RO/RO_4000G.jpg'
    ];
  
    let currentIndex = 0;
    const imageElement = document.getElementById('service-image');
  
    function changeImage() {
      currentIndex = (currentIndex + 1) % images.length;
      imageElement.src = images[currentIndex];
      console.log("Image changed to: ", imageElement.src); // Debugging line
    }
  
    setInterval(changeImage, 5000);
  });
  