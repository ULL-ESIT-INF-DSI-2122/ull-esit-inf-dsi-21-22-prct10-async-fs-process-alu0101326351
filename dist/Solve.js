var Sort;
(function (Sort) {
    /**
     * Clase que donde se declara el array que se quiere ordenar y el algoritmo
     */
    class Solver {
        /**
         * Recibe el array y la estrategia de resolución
         * @param data
         * @param strategy
         */
        constructor(data, strategy) {
            this.data = data;
            this.strategy = strategy;
        }
        /**
         * Devuelve el array ordenado mediante la ordenación indicada
         * @returns
         */
        logic() {
            return this.strategy.execute(this.data);
        }
    }
    Sort.Solver = Solver;
})(Sort || (Sort = {}));
