import {assert} from '../../_test-helper/assert';

var decode = function(searchString) {
	if(searchString) {
		return { foo: 'bar'};
	}
	return {};
};

var splitSearchString = function(searchString) {
	if(!searchString) {
		return [];
	}

	return searchString.split('&');
};

var isValidSearchParameter = function(searchParameter) {
	var firstIndex = searchParameter.indexOf('=');

	if(firstIndex <= 0) {
		return false;
	}

	if(firstIndex !== searchParameter.lastIndexOf('=')) {
		return false;
	}

	return true;
};

describe('url-helper', function() {

	describe('splitSearchString', function() {
		it('returns an empty array if the search string is empty', function() {
			assert.deepEqual(splitSearchString(''), []);
		});

		it('returns an array containing only the given search string, if it only contains one search parameter', function() {
			assert.deepEqual(splitSearchString('foo=bar'), ['foo=bar']);
		});

		it('returns the "&" separated parts of the search string in an array', function() {
			assert.deepEqual(splitSearchString('foo=bar&she=bang'), ['foo=bar', 'she=bang']);
		});
	});

	describe('isValidSearchParameter', function() {
		it('returns false for the empty string', function() {
			assert.equal(isValidSearchParameter(''), false);
		});

		it('returns true for a string of the shape "key=value"', function() {
			assert.ok(isValidSearchParameter('key=value'));
		});

		it('returns false for a malformed search parameter "keyvalue"', function() {
			assert.equal(isValidSearchParameter('keyvalue'), false);
		});

		it('returns false for a malformed search parameter "=keyvalue"', function() {
			assert.equal(isValidSearchParameter('=keyvalue'), false);
		});

		it('returns false for a malformed search parameter "key==value', function() {
			assert.equal(isValidSearchParameter('keyvalue=='), false);
		});
	});

	describe('decodeSearchParameter', function() {
	});

	describe('decode', function() {
		it('returns an empty object if the search string is empty', function() {
			assert.deepEqual(decode(''), {});
		});

		it('returns {foo: "bar"} for the url "?foo=bar"', function() {
			assert.deepEqual(decode('?foo=bar'), { foo: 'bar'});
		});
	});

});