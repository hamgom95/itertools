import * as iter from './index';
import { expect } from 'chai';
import 'mocha';

describe('range()', () => {

    it('should create range', () => {
        expect(Array.from(iter.range(0, 5, 2))).to.eql([0, 2]);
    });

});
