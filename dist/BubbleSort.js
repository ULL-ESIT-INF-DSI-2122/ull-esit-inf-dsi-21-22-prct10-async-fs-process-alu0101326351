var Sort;
(function (Sort) {
    /**
     * Clase que implementa el algoritmo BubbleSort
     */
    class BubbleSort {
        /**
         * Ordena un array númerico con el algoritmo BubbleSort
         * @param data
         * @returns
         */
        execute(data) {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data.length - 1; j++) {
                    if (data[j] > data[j + 1]) {
                        let swap = data[j];
                        data[j] = data[j + 1];
                        data[j + 1] = swap;
                    }
                }
            }
            return data;
        }
    }
    Sort.BubbleSort = BubbleSort;
})(Sort || (Sort = {}));
