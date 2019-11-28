const { consolelog } = require('./modules');
const { DICT } = require('./pokemon');
const message1 = 'i choose you!';
const message2 = '!';

LIBRARY = {
	1: '\x1b[31m',
	2: '\x1b[32m',
	3: '\x1b[33m',
	4: '\x1b[34m',
	5: '\x1b[35m',
	0: '\x1b[36m',
	6: '\x1b[7m'
};
REFERENCE = {
	a: '~~~~~~~',
	0: '😂',
	1: '💃',
	2: '🌝',
	3: '👽',
	4: '💩',
	5: '‍🎈',
	6: '🐶',
	7: '🥑',
	8: '🚀'
}; /*
  the alternateCase function should take a z and return a z.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'  
*/

const FUNCTION1 = z => {
	const VALUE = [];
	const FUNCTION2 = x => {
		if (x === '') {
			return '';
		}
		VALUE.push(x.slice(0, 1));
		FUNCTION2(x.slice(1));
	};
	FUNCTION2(z);
	return VALUE;
};

const FUNCTION3 = xx => {
	const xxx = Math.floor(Math.random() * 10) & 1;
	if (xx != undefined) {
		if (xxx) {
			return xx.toUpperCase();
		} else {
			return xx.toLowerCase();
		}
	}
};

const downTheRabbitHole = (y, z, a = 0, c = 0) => {
	c++;
	console.log(
		REFERENCE.a,
		REFERENCE[c % 8],
		LIBRARY[c % 7],
		String(c),
		REFERENCE[c % 8],
		REFERENCE.a
	);
	const VARIABLE = FUNCTION1(z);
	const VALUE = VARIABLE.map(xx => FUNCTION3(xx));
	const VERYABLE = VALUE.join('');
	if (VERYABLE === y) {
		if (a === 2) {
			return [c, y];
		} else {
			a++;
			return downTheRabbitHole(y, VERYABLE, a, c);
		}
	} else {
		return downTheRabbitHole(y, VERYABLE, a, c);
	}
};

function alternateCase(z) {
	const test123 = consolelog(z);
	const [NUM, STRING] = downTheRabbitHole(test123, z);
	const IMPORTANTINFO = DICT[NUM % 151];
	console.log(message1, IMPORTANTINFO, message2);
	return STRING;
}
module.exports = alternateCase;
