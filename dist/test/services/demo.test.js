"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
describe('Check that tests work', () => {
    beforeEach(() => {
        console.log('This is before');
    });
    afterEach(() => {
        console.log('We are all done');
    });
    describe('First Scenario', () => {
        it('Should return true', () => chai_1.assert.isTrue(!!1));
        it('Should return false', () => chai_1.assert.isFalse(!!0));
    });
    describe('Second Scenario', () => {
        it('should be true', () => chai_1.assert.isTrue(true));
    });
});
