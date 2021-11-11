const assert = require('assert');
const {
	fizzbuzz
} = require('../index.js');
const Calculate = require('../index.js')

describe('Calculate', () => {
	describe('.fizzbuzz', () => {
		describe('it goes slow', function () {
			this.slow(10000);


			it('This test return the numbers multiple of 3, multiple of 5 and multiple of both', () => {
				/* Hay una variable declarada var x; */
				/* Hay una variable llamada x. */
				/* DECLARADA Y INICIALIZADA */
				/* var x = 0 ; */

				const inputNumber = 1;
				//const expectedResult = 100;
				const result = Calculate.fizzbuzz(inputNumber);

				/*I apply mocha chai first lesson 11.11.2021 -= anb100=-  */

				assert.equal(result, fizzbuzz(inputNumber));

			})


		})


	});
});