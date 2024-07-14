import ArbolBinario from '../models/treeBinari.mjs';
import Instrumento from '../models/instrumento.mjs';

const arbol = new ArbolBinario();

document.getElementById('formAgregar').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById('id').value);
    const nombre = document.getElementById('nombre').value;
    const tipo = document.getElementById('tipo').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const nuevoInstrumento = new Instrumento(id, nombre, tipo, precio);
    arbol.insertar(nuevoInstrumento);
    alert('Instrumento agregado exitosamente');
    document.getElementById('formAgregar').reset();
});

document.getElementById('formBuscar').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById('buscarId').value);
    arbol.buscar(id, (instrumento) => {
        const resultadoBusqueda = document.getElementById('resultadoBusqueda');
        if (instrumento) {
            resultadoBusqueda.textContent = `ID: ${instrumento.id}, Nombre: ${instrumento.nombre}, Tipo: ${instrumento.tipo}, Precio: ${instrumento.precio}`;
        } else {
            resultadoBusqueda.textContent = 'Instrumento no encontrado';
        }
    });
});

document.getElementById('btnMenor').addEventListener('click', () => {
    const menorInstrumento = arbol.obtenerMenorValor();
    const resultadoMenor = document.getElementById('resultadoMenor');
    resultadoMenor.textContent = `ID: ${menorInstrumento.id}, Nombre: ${menorInstrumento.nombre}, Tipo: ${menorInstrumento.tipo}, Precio: ${menorInstrumento.precio}`;
});

document.getElementById('btnMayor').addEventListener('click', () => {
    const mayorInstrumento = arbol.obtenerMayorValor();
    const resultadoMayor = document.getElementById('resultadoMayor');
    resultadoMayor.textContent = `ID: ${mayorInstrumento.id}, Nombre: ${mayorInstrumento.nombre}, Tipo: ${mayorInstrumento.tipo}, Precio: ${mayorInstrumento.precio}`;
});

document.getElementById('btnRecorrer').addEventListener('click', () => {
    const listaInstrumentos = document.getElementById('listaInstrumentos');
    listaInstrumentos.innerHTML = '';
    arbol.recorrerPreOrden(arbol.raiz, (instrumento) => {
        const li = document.createElement('li');
        li.textContent = `ID: ${instrumento.id}, Nombre: ${instrumento.nombre}, Tipo: ${instrumento.tipo}, Precio: ${instrumento.precio}`;
        listaInstrumentos.appendChild(li);
    });
});