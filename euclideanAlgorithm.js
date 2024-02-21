// O Algoritmo de Euclides é um algoritmo eficiente para encontrar o maior divisor comum (MDC) de dois números inteiros.

// A ideia principal do algoritmo de Euclides é baseada na propriedade de que o MDC de dois números não muda se o menor for subtraído do maior. O processo é repetido até que o menor número se torne zero, momento em que o MDC é o número não nulo restante.

const euclideanAlgorithm = (num1, num2) => {
	num1 = Math.abs(num1);
	num2 = Math.abs(num2);

	while (num2 !== 0) {
		const temp = num2;

		num2 = num1 % num2;
		num1 = temp;
	}

	return num1;
};

const num1 = 240;
const num2 = 160;
const mdc = euclideanAlgorithm(num1, num2);

console.log(`O Máximo Divisor Comum de ${num1} e ${num2} é: ${mdc}`);