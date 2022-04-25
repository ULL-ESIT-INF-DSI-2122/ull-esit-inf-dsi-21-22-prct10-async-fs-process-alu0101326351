"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubReduce = void 0;
const reduce_1 = require("./reduce");
/**
 * Implementa el reduce con la resta
 */
class SubReduce extends reduce_1.Reduce {
    /**
     * Implementa el método reduce con la resta
     * @returns
     */
    reduce() {
        let result = 0;
        this.array.map((n) => {
            result -= n;
        });
        return result;
    }
}
exports.SubReduce = SubReduce;
