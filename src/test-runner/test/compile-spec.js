import {ES5, ES6, compile} from '../compiler.js'
import {assert} from '../../_test-helper/assert';

describe('compiler', function() {

	describe('ES5', function() {
		it('exports the ES5 constant to the user', function() {
			assert.notEqual(ES5, undefined);
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

		it('can compile ES6 code', function() {
			assert.doesNotThrow(function() {
				compile(ES6, '');
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