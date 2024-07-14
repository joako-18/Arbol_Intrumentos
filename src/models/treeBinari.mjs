import Instrumento from "./instrumento.mjs";
import Nodo from "./node.mjs";

class ArbolBinario {
    constructor() {
        this.raiz = null;
    }

    insertar(instrumento) {
        const nuevoNodo = new Nodo(instrumento);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this.insertarNodo(this.raiz, nuevoNodo);
        }
    }

    insertarNodo(nodo, nuevoNodo) {
        if (nuevoNodo.instrumento.id < nodo.instrumento.id) {
            if (nodo.izquierda === null) {
                nodo.izquierda = nuevoNodo;
            } else {
                this.insertarNodo(nodo.izquierda, nuevoNodo);
            }
        } else {
            if (nodo.derecha === null) {
                nodo.derecha = nuevoNodo;
            } else {
                this.insertarNodo(nodo.derecha, nuevoNodo);
            }
        }
    }

    buscar(id, callback) {
        this.buscarNodo(this.raiz, id, callback);
    }

    buscarNodo(nodo, id, callback) {
        if (nodo === null) {
            callback(null);
        } else if (id < nodo.instrumento.id) {
            this.buscarNodo(nodo.izquierda, id, callback);
        } else if (id > nodo.instrumento.id) {
            this.buscarNodo(nodo.derecha, id, callback);
        } else {
            callback(nodo.instrumento);
        }
    }

    obtenerMenorValor() {
        let nodoActual = this.raiz;
        while (nodoActual.izquierda !== null) {
            nodoActual = nodoActual.izquierda;
        }
        return nodoActual.instrumento;
    }

    obtenerMayorValor() {
        let nodoActual = this.raiz;
        while (nodoActual.derecha !== null) {
            nodoActual = nodoActual.derecha;
        }
        return nodoActual.instrumento;
    }

    recorrerPreOrden(nodo, callback) {
        if (nodo !== null) {
            callback(nodo.instrumento);
            this.recorrerPreOrden(nodo.izquierda, callback);
            this.recorrerPreOrden(nodo.derecha, callback);
        }
    }
}

export default ArbolBinario;