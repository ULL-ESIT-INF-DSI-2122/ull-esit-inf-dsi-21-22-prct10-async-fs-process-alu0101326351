"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddReduce = void 0;
const reduce_1 = require("./reduce");
/**
 * Implementa el reduce con la suma
 */
class AddReduce extends reduce_1.Reduce {
    /**
     * Implementa el método reduce con la suma
     * @returns
     */
    reduce() {
        let result = 0;
        this.array.map((n) => {
            result += n;
        });
        return result;
    }
    /**
     * Notifica que se empieza el algoritmo
     */
    before() {
        console.log("Empezamos a reducir el array :)");
    }
    /**
     * Notifica que se termino de reducir el array
     */
    after() {
        console.log("Terminado de reducir");
    }
}
exports.AddReduce = AddReduce;
