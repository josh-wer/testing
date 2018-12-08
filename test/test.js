var assert = require('assert');


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('TestTest', function(){
	it('should say hello', function(){
		assert.equal('hello', 'hello');
	});


	it('should say hi to name', function(){
		assert.equal(sayHi('johnsd'), 'Hi john');
	});
});


function sayHi(name){
	return 'Hi ' + name;
}