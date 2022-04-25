"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultReduce = void 0;
const reduce_1 = require("./reduce");
/**
 * Implementa el reduce con la multiplicación
 */
class MultReduce extends reduce_1.Reduce {
    /**
     * Implementa el método reduce con la multiplicación
     * @returns
     */
    reduce() {
        let result = 1;
        this.array.map((n) => {
            result *= n;
        });
        return result;
    }
}
exports.MultReduce = MultReduce;
