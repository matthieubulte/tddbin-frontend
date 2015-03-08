var babel = require('babel');
var coffee = require('coffee-script');
var tsc = require('typescript-compiler');

import typescriptDefinitions from './typescriptDefinitions.js';

var compilers = {};

export const ES5 = 'ES5';
// this is the default compiler, not doing any modification to the source code
function compileEs5(sourceCode) {
	return sourceCode;
}
compilers[ES5] = compileEs5;


export const ES6 = 'ES6';
function compileEs6(sourceCode) {
  return babel.transform(sourceCode).code
}
compilers[ES6] = compileEs6;


export const CoffeeScript = 'CoffeeScript';
function compileCoffeeScript(sourceCode) {
	// TERRIBLE HACK.
	// pull request to fix this was sent, see https://github.com/jashkenas/coffeescript/pull/3892
	if (!process.stdout) process.stdout = {};

	return coffee.compile(sourceCode, { bare: true});
}
compilers[CoffeeScript] = compileCoffeeScript;


export const TypeScript = 'TypeScript';
function compileTypeScript(sourceCode) {
	var compilerOptions = ['--noLib'];
	var compiledFiles = {
		'lib.d.ts': typescriptDefinitions['lib.d.ts'],
		'mocha.d.ts': typescriptDefinitions['mocha.d.ts'],
		'assert.d.ts': typescriptDefinitions['assert.d.ts'],
		'tdd-test.ts': sourceCode
	};

	var compileResult = tsc.compileStrings(compiledFiles, compilerOptions);

	if(compileResult.errors.length !== 0) {

		var errors = compileResult.errors.map(function(e) {
			return e.replace(/:.*:/, ':');
		});

		throw new Error(errors.join('\n'));
	}

	return compileResult.sources['tdd-test.js'];
}
compilers[TypeScript] = compileTypeScript;

export function compile(sourceLanguage, sourceCode) {
  var compile = compilers[sourceLanguage];
  if(!compile) {
    throw new Error('Invalid source language:', sourceLanguage);
  }

  return compile(sourceCode);
}

export default {
	ES5: ES5,
	ES6: ES6,
	CoffeeScript: CoffeeScript,
	TypeScript: TypeScript,
	compile: compile
};