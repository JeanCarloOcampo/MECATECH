// Función para guardar y mostrar clientes
if (document.getElementById('clienteForm')) {
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    
    document.getElementById('clienteForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const moto = document.getElementById('moto').value;
        clientes.push({ nombre, telefono, moto });
        localStorage.setItem('clientes', JSON.stringify(clientes));
        mostrarClientes();
        alert('Cliente guardado');
        this.reset();
    });
    
    function mostrarClientes() {
        const list = document.getElementById('clientesList');
        list.innerHTML = '<h2>Lista de Clientes</h2>';
        clientes.forEach(cliente => {
            list.innerHTML += `<p>${cliente.nombre} - ${cliente.moto} (${cliente.telefono})</p>`;
        });
    }
    mostrarClientes();
}

// Función para guardar y mostrar inventario
if (document.getElementById('repuestoForm')) {
    let inventario = JSON.parse(localStorage.getItem('inventario')) || [];
    
    document.getElementById('repuestoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const nombreRepuesto = document.getElementById('nombreRepuesto').value;
        const cantidad = document.getElementById('cantidad').value;
        const precio = document.getElementById('precio').value;
        inventario.push({ nombreRepuesto, cantidad, precio });
        localStorage.setItem('inventario', JSON.stringify(inventario));
        mostrarInventario();
        alert('Repuesto agregado');
        this.reset();
    });
    
    function mostrarInventario() {
        const list = document.getElementById('inventarioList');
        list.innerHTML = '<h2>Lista de Repuestos</h2>';
        inventario.forEach(repuesto => {
            list.innerHTML += `<p>${repuesto.nombreRepuesto} - Cantidad: ${repuesto.cantidad} - Precio: $${repuesto.precio}</p>`;
        });
    }
    mostrarInventario();
}