const multiply  = {
    single_number : 5,
    numbers : [1,2,3,4,5],
    multiply_function() {
        return this.numbers.map((number) => this.single_number*number);
    }
};

console.log(multiply.multiply_function());