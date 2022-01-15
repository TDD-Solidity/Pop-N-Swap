const PopNSwap = artifacts.require('PopNSwap')

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract('PopNSwap', function (/* accounts */) {
  
  let popNSwap;

  beforeEach(async () => {
    popNSwap = await PopNSwap.new()
  })

  describe('creating the initial array of possible tokenIds', () => {

    it('creates a tokenId array of integers up to 5', async () => {

      const firstTokenId = await popNSwap.availableTokenIds.call(0);
      const secondTokenId = await popNSwap.availableTokenIds.call(1);
      const thirdTokenId = await popNSwap.availableTokenIds.call(2);
      const fourthTokenId = await popNSwap.availableTokenIds.call(3);
      const fifthTokenId = await popNSwap.availableTokenIds.call(4);
      const sixthTokenId = await popNSwap.availableTokenIds.call(5);

      expect(firstTokenId.toNumber()).to.equal(1);
      expect(secondTokenId.toNumber()).to.equal(2);
      expect(thirdTokenId.toNumber()).to.equal(3);
      expect(fourthTokenId.toNumber()).to.equal(4);
      expect(fifthTokenId.toNumber()).to.equal(5);
      // expect(sixthTokenId.toNumber()).to.equal(undefined);

    })

  })

  describe('minting a token', () => {

    it('takes a token index, returns that token and removes it from the array', async () => {

      const fakeRandomNum = 2;

      const mintResult = await popNSwap.mint.call(fakeRandomNum);

      expect(mintResult.toNumber()).to.equal(3);

      const firstTokenId = await popNSwap.availableTokenIds.call(0);
      const secondTokenId = await popNSwap.availableTokenIds.call(1);
      const thirdTokenId = await popNSwap.availableTokenIds.call(2);
      const fourthTokenId = await popNSwap.availableTokenIds.call(3);
      // const fifthTokenId = await popNSwap.availableTokenIds.call(4);
      // const sixthTokenId = await popNSwap.availableTokenIds.call(5);

      expect(firstTokenId.toNumber()).to.equal(1);
      expect(secondTokenId.toNumber()).to.equal(2);
      expect(thirdTokenId.toNumber()).to.equal(5);
      // expect(fourthTokenId.toNumber()).to.equal(4);
      // expect(fifthTokenId.toNumber()).to.equal(undefined);
      // expect(sixthTokenId.toNumber()).to.equal(undefined);

    })

  })

})
