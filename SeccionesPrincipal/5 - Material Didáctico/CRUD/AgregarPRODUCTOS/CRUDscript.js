document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('product-form');
    const productList = document.getElementById('product-list');
    const productTable = document.getElementById('product-table');
    const searchInput = document.getElementById('search-input');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const imgInput = document.getElementById('img');
        const name = document.getElementById('name').value;
        const brand = document.getElementById('brand').value;
        const type = document.getElementById('type').value;
        const quantity = document.getElementById('quantity').value;

        if (imgInput.files.length === 0) {
            alert('Por favor, selecciona una imagen del producto.');
            return;
        }

        const imgFile = imgInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const existingProduct = Array.from(productTable.rows).find(row => row.cells[1].innerHTML === name);

            if (existingProduct) {
                alert('Este producto ya ha sido agregado.');
            } else {
                const row = productTable.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3 = row.insertCell(2);
                const cell4 = row.insertCell(3);
                const cell5 = row.insertCell(4);

                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Imagen del producto';
                img.style.width = '60px';
                img.style.height = '60px';
                img.style.objectFit = 'cover';
                img.style.borderRadius = '5px';

                cell1.appendChild(img);
                cell2.innerHTML = name;
                cell3.innerHTML = brand;
                cell4.innerHTML = type;
                cell5.innerHTML = quantity;

                form.reset();
            }
        };

        reader.readAsDataURL(imgFile);
    });

    // Función para filtrar productos por nombre
    searchInput.addEventListener('input', function () {
        const searchText = searchInput.value.toLowerCase();
        Array.from(productTable.rows).slice(1).forEach(row => {
            const productName = row.cells[1].innerText.toLowerCase();
            row.style.display = productName.includes(searchText) ? 'table-row' : 'none';
        });
    });
});
