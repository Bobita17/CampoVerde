document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('product-form');
    const productList = document.getElementById('product-list');
    const productTable = document.getElementById('product-table');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const brand = document.getElementById('brand').value;
        const type = document.getElementById('type').value;
        const quantity = document.getElementById('quantity').value;

        if (name.trim() && brand.trim() && type.trim() && quantity.trim()) {
            const row = productTable.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);

            cell1.innerHTML = name;
            cell2.innerHTML = brand;
            cell3.innerHTML = type;
            cell4.innerHTML = quantity;
            cell5.innerHTML = '<button class="edit-btn">Editar</button> <button class="delete-btn">Eliminar</button>';

            document.getElementById('name').value = '';
            document.getElementById('brand').value = '';
            document.getElementById('type').value = '';
            document.getElementById('quantity').value = '';
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    productTable.addEventListener('click', function (event) {
        const row = event.target.closest('tr');
        const cells = row.getElementsByTagName('td');
        const name = cells[0].innerHTML;
        const brand = cells[1].innerHTML;
        const type = cells[2].innerHTML;
        const quantity = cells[3].innerHTML;

        if (event.target.classList.contains('delete-btn')) {
            row.parentNode.removeChild(row);
        } else if (event.target.classList.contains('edit-btn')) {
            cells[0].innerHTML = '<input type="text" value="' + name + '">';
            cells[1].innerHTML = '<input type="text" value="' + brand + '">';
            cells[2].innerHTML = '<input type="text" value="' + type + '">';
            cells[3].innerHTML = '<input type="number" value="' + quantity + '">';
            cells[4].innerHTML = '<button class="save-btn">Guardar</button>';
        } else if (event.target.classList.contains('save-btn')) {
            const newName = cells[0].querySelector('input').value;
            const newBrand = cells[1].querySelector('input').value;
            const newType = cells[2].querySelector('input').value;
            const newQuantity = cells[3].querySelector('input').value;

            cells[0].innerHTML = newName;
            cells[1].innerHTML = newBrand;
            cells[2].innerHTML = newType;
            cells[3].innerHTML = newQuantity;
            cells[4].innerHTML = '<button class="edit-btn">Editar</button> <button class="delete-btn">Eliminar</button>';
        }
    });
});
