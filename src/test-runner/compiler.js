var babel = require('babel');
var coffee = require('coffee-script');

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
	process.stdout = {};

	return coffee.compile(sourceCode, { bare: true});
}
compilers[CoffeeScript] = compileCoffeeScript;

export function compile(sourceLanguage, sourceCode) {
  var compile = compilers[sourceLanguage];
  if(!compile) {
    throw new Error('Invalid source language:', sourceLanguage);
  }

  return compile(sourceCode);
}