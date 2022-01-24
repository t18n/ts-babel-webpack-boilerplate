import fetch from 'node-fetch';
import { add } from '@utils/math';
import { randomize } from '@utils/randomize';

const a = randomize();
const b = randomize();
const total = add(a, b);

console.log(`${a} + ${b} = ${total}`);

fetch('https://pokeapi.co/api/v2/pokemon')
	.then(response => {
		return response.json();
	})
	.then((data: any) => {
		console.log(data.results);
	})
	.catch(function(reason) {
		console.log(reason);
	});
