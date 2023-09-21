// 1-calcul.test.js
const assert = require('assert');
const expect = require('chai').expect;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should return the rounded sum of two numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
      assert.strictEqual(calculateNumber('SUM', 3.3, 4.7), 8);
    });
  });

  describe('type SUBTRACT', () => {
    it('should return the rounded subtraction of two numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.2), 4);
      assert.strictEqual(calculateNumber('SUBTRACT', 4.7, 3.3), 2);
    });
  });

  describe('type DIVIDE', () => {
    it('should return the rounded division result of two numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
      assert.strictEqual(calculateNumber('DIVIDE', 7, 3), 2.3333333333333335);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 8.2, 0), 'Error');
    });
  });

  it('should throw an error for invalid type', () => {
    assert.throws(() => calculateNumber('INVALID', 1, 2), /Invalid type. Type must be SUM, SUBTRACT, or DIVIDE./);
  });
});

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should return the rounded sum of two numbers', () => {
      expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
      expect(calculateNumber('SUM', 3.3, 4.7)).to.equal(8);
    });
  });

  describe('type SUBTRACT', () => {
    it('should return the rounded subtraction of two numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 2.2)).to.equal(4);
      expect(calculateNumber('SUBTRACT', 4.7, 3.3)).to.equal(2);
    });
  });
  describe('type DIVIDE', () => {
    it('should return the rounded division result of two numbers', () => {
      expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
      expect(calculateNumber('DIVIDE', 7, 3)).to.be.closeTo(2.3333333333333335, 0.0001);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 8.2, 0)).to.equal('Error');
    });
  });

  it('should throw an error for invalid type', () => {
    expect(() => calculateNumber('INVALID', 1, 2)).to.throw('Invalid type. Type must be SUM, SUBTRACT, or DIVIDE.');
  });
});
