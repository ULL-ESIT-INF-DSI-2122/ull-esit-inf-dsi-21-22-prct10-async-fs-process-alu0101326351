"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivReduce = void 0;
const reduce_1 = require("./reduce");
/**
 * Implementa el reduce con la división
 */
class DivReduce extends reduce_1.Reduce {
    /**
     * Implementa el método reduce con la división
     * @returns
     */
    reduce() {
        let result = 1;
        this.array.map((n) => {
            result /= n;
        });
        return result;
    }
}
exports.DivReduce = DivReduce;
