import chai from 'chai';
import getClientRect from '../../src/utils/getClientRect';

const { expect } = chai;

describe('utils/getClientRect', () => {
  it('should calculate right and bottom', () => {
    const offsets = {
      top: 1,
      left: 2,
      width: 3,
      height: 4,
    };
    expect(getClientRect(offsets)).to.deep.equal({
      top: 1,
      left: 2,
      width: 3,
      height: 4,
      right: 5,
      bottom: 5,
    });
  });
});
