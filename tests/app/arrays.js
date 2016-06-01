if ( typeof window === 'undefined' ) {
  require('../../app/arrays');
  var expect = require('chai').expect;
}

describe('arrays', function() {
  var a;

  beforeEach(function() {
    a = [ 1, 2, 3, 4 ];
  });

  it('you should be able to remove all instances of a value from an array', function() {
    a.push(2); // Make sure the value appears more than one time
    a.push(2); // Make sure the value appears more than one time in a row
    var result = arraysAnswers.remove(a, 2);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('1 3 4');
  });

  it('you should be able to remove all instances of a value from an array, returning the original array', function() {
    a.splice( 1, 0, 2 );
    a.push( 2 );
    a.push( 2 );

    var result = arraysAnswers.removeWithoutCopy(a, 2);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('1 3 4');

    // make sure that you return the same array instance
    expect(result).equal(a);
  });

});
