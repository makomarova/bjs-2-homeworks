"use strict"

function solveEquation(a, b, c) {
	let d = Math.pow(b, 2) - 4 * a * c;
	let arr = [];
	if (d === 0) {
		arr.push(-b / (2 * a));
	}
	if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = percent / 100;
	let p = percent / 12;
	let s = amount - contribution;
	let paymentMonth = s * (p + (p / ((Math.pow((1 + p), countMonths)) - 1)));
	let paymentAll = paymentMonth * countMonths;
	return parseFloat(paymentAll.toFixed(2));

}