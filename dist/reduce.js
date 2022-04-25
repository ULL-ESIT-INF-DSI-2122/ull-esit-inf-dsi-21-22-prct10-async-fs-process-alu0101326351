"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reduce = void 0;
/**
 * Clase abstracta Reduce
 */
class Reduce {
    /**
     * Constructor recibe un array de números
     * @param array
     */
    constructor(array) {
        this.array = array;
    }
    /**
     * Ejecuta el algoritmo
     * @returns
     */
    run() {
        this.before();
        let n = this.reduce();
        this.after();
        return n;
    }
    /**
     * Notifica que se empieza el algoritmo. Se implementa opcionalmente en las clases hijas
     */
    before() { }
    ;
    /**
     * Notifica que se empieza el algoritmo. Se implementa opcionalmente en las clases hijas
     */
    after() { }
    ;
}
exports.Reduce = Reduce;
;
