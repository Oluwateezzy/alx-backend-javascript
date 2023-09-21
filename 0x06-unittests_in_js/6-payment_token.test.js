// 6-payment_token.test.js
const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token'); // Replace 'your-file-name' with the actual file name containing the function

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with a successful response from the API when called with true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        // Ensure the result is as expected
        expect(result).to.deep.equal({ data: 'Successful response from the API' });

        // Mark the test as done
        done();
      })
      .catch((error) => {
        // If there's an error, fail the test
        done(error);
      });
  });
});
