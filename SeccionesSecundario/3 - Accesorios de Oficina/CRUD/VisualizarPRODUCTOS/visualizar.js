document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');

    const products = [
        { image: 'ruta_a_imagen1.jpg', name: 'Producto 1', brand: 'Marca 1', type: 'Tipo 1', quantity: 10, status: 'Disponible' },
        { image: 'ruta_a_imagen2.jpg', name: 'Producto 2', brand: 'Marca 2', type: 'Tipo 2', quantity: 5, status: 'No Disponible' },
        { image: 'ruta_a_imagen3.jpg', name: 'Producto 3', brand: 'Marca 3', type: 'Tipo 3', quantity: 8, status: 'Disponible' },
        // Agrega más productos según sea necesario
    ];

    function displayProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const row = document.createElement('tr');
            const cell1 = document.createElement('td');
            const cell2 = document.createElement('td');
            const cell3 = document.createElement('td');
            const cell4 = document.createElement('td');
            const cell5 = document.createElement('td');
            const cell6 = document.createElement('td');
            
            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.name;
            img.style.width = '50px';
            img.style.height = '50px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '5px';
            
            cell1.appendChild(img);
            cell2.textContent = product.name;
            cell3.textContent = product.brand;
            cell4.textContent = product.type;
            cell5.textContent = product.quantity;
            cell6.textContent = product.status;
            
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);
            row.appendChild(cell6);
            productList.appendChild(row);
        });
    }

    displayProducts();
});
