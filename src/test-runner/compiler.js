var babel = require('babel');

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


export function compile(sourceLanguage, sourceCode) {
  var compile = compilers[sourceLanguage];
  if(!compile) {
    throw new Error('Invalid source language:', sourceLanguage);
  }

  return compile(sourceCode);
}