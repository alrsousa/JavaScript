// creates an object to keep track of values
const Calculator = {
	display_value: '0',
	first_operand: null,
	wait_second_operand: false,
	operator: null,
};

// modifies values each time a button is clicked
function inputDigit(digit) {
	const { display_value, wait_second_operand } = Calculator;
	// this checks if wait_second_operand is true and set
	// need to make display_value to `digit`
	if (wait_second_operand === true) {
		Calculator.display_value = digit;
		Calculator.wait_second_operand = false;
	} else {
		Calculator.display_value = display_value === '0' ? digit : display_value + digit;
	}
}

function inputDecimal(dot) {
	if (Calculator.wait_second_operand === true) return;
	if (!Calculator.display_value.includes(dot)) {
		Calculator.display_value += dot;
	}
}

function handleOperator(nextOperator) {
	const { first_operand, display_value, operator } = Calculator
	// when an operator key is pressed:
	// store number displayed in Calculator.first_operand
	const valueOfInput = parseFloat(display_value);
	// if `operator` already exists and wait_second_operand is true:
	// updates the operator and exits the function
	if (operator && Calculator.wait_second_operand) {
		Calculator.operator = nextOperator;
		return;
	}

	if (first_operand == null) {
		Calculator.first_operand = valueOfInput;
	} else if (operator) { // checks if operator exists
		const valueNow = first_operand || 0;
		// if operator exists, operation is performed using Perform_Calculation object
		let result = Perform_Calculation[operator](valueNow, valueOfInput);
		// rounds out to 9 decimal places
		result = Number(result).toFixed(9);
		// removes any trailing zeroes
		result = (result * 1).toString();
		// displays result and adds result to first_operand
		Calculator.display_value = parseFloat(result);
		Calculator.first_operand = parseFloat(result);
	}
	Calculator.wait_second_operand = true;
	Calculator.operator = nextOperator;
}

const Perform_Calculation = {
	'/': (first_operand, second_operand) => first_operand / second_operand,
	'*': (first_operand, second_operand) => first_operand * second_operand,
	'+': (first_operand, second_operand) => first_operand + second_operand,
	'-': (first_operand, second_operand) => first_operand - second_operand,
	'=': (first_operand, second_operand) => second_operand
};

function Calculator_Reset() {
	Calculator.display_value = '0';
	Calculator.first_operand = null;
	Calculator.wait_second_operand = false;
	Calculator.operator = null;
}

// update the screen with the contents of display_value
function updateDisplay() {
	const display = document.querySelector('.calculator-screen');
	display.value = Calculator.display_value;
}

updateDisplay();
// this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
	// `target` represents clicked element
	const { target } = event;
	// if clicked element is not a button, exit the function
	if (!target.matches('button')) {
		return;
	}
	// activates when you click an operator button
	if (target.classList.contains('operator')) {
		handleOperator(target.value);
		updateDisplay();
		return;
	}
	// activates when you click the decimal button
	if (target.classList.contains('decimal')) {
		inputDecimal(target.value);
		updateDisplay();
		return;
	}
	// clears display when you click 'AC' button
	if (target.classList.contains('all-clear')) {
		Calculator_Reset();
		updateDisplay();
		return;
	}

	inputDigit(target.value);
	updateDisplay();
})