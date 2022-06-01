import {assert} from 'chai';

describe('Check that tests work', () => {
    beforeEach(() => {
        console.log('This is before');
    });
    afterEach(() => {
        console.log('We are all done')
    });
    describe('First Scenario', () => {
        it('Should return true', () => assert.isTrue(!!1));
        it('Should return false', () => assert.isFalse(!!0));
    });
    describe('Second Scenario', () => {
        it('should be true', () => assert.isTrue(true));
    })
});