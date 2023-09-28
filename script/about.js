  // Ambil elemen div dengan class "content-fill"
  const contentFill = document.querySelector('.content-fill');

  // Memuat data dari file JSON eksternal menggunakan fetch
  fetch('../data/data-content-fill.json')
    .then(response => response.json())
    .then(data => {
      data.sections.forEach(section => {
  
        // Buat elemen div dengan class "fill"
        const fillDiv = document.createElement('div');
        fillDiv.className = 'fill';
  
        // Buat elemen img
        const img = document.createElement('img');
        img.src = section.imageSrc;
        img.alt = '';
  
        // Buat elemen h1
        const h1 = document.createElement('h1');
        h1.textContent = section.title;
  
        // Buat elemen p
        const p = document.createElement('p');
        p.textContent = section.description;
  
        // Gabungkan elemen-elemen di atas ke dalam "fill"
        fillDiv.appendChild(img);
        fillDiv.appendChild(h1);
        fillDiv.appendChild(p);
  
        // Gabungkan elemen "fill" ke dalam elemen "content-fill"
        contentFill.appendChild(fillDiv);
      });
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
    });