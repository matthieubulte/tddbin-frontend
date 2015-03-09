import {ES5, ES6, CoffeeScript, TypeScript, compile} from '../compiler.js'
import compiler from '../compiler.js'
import {assert} from '../../_test-helper/assert';

describe('compiler', function() {

	describe('ES5', function() {
		it('exports the ES5 constant to the user', function() {
			assert.notEqual(ES5, undefined);
		});

		it('default also exports the ES5 constant to the user', function() {
			assert.notEqual(compiler.ES5, undefined);
		});

		it('can compile ES5 code', function() {
			assert.doesNotThrow(function() {
				compile(ES5, '');
			});
		});
	});

	describe('ES6', function() {
		it('exports the ES6 constant to the user', function() {
			assert.notEqual(ES6, undefined);
		});

		it('default also exports the ES6 constant to the user', function() {
			assert.notEqual(compiler.ES6, undefined);
		});

		it('can compile ES6 code', function() {
			assert.doesNotThrow(function() {
				compile(ES6, 'var x = 1;');
			});
		});
	});

	describe('CoffeeScript', function() {
		it('exports the CoffeeScript constant to the user', function() {
			assert.notEqual(CoffeeScript, undefined);
		});

		it('default also exports the CoffeeScript constant to the user', function() {
			assert.notEqual(compiler.CoffeeScript, undefined);
		});

		it('can compile CoffeeScript code', function() {
			assert.doesNotThrow(function() {
				compile(CoffeeScript, 'x = 1;');
			});
		});
	});

	describe('TypeScript', function() {
		it('exports the TypeScript constant to the user', function() {
			assert.notEqual(TypeScript, undefined);
		});

		it('default also exports the TypeScript constant to the user', function() {
			assert.notEqual(compiler.TypeScript, undefined);
		});

		it('can compile TypeScript code', function() {
			assert.doesNotThrow(function() {
				compile(TypeScript, 'var x = 1;');
			});
		});
	});

	describe('unsupport language', function() {
		it('Throws an error for languages not supported', function() {
			var unsupportedLanguageName = 'unsupportedLanguageName';
			var expectedError = 'Invalid source language: ' + unsupportedLanguageName;

			assert.throws(function() {
				compile(unsupportedLanguageName, '');
			}, expectedError);
		});
	});
});