/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * @param {React.ComponentClass} Component component to render
 * @param {*} props props to use
 * @param {string} itText test name
 * @param {string} describeText test group name
 * @returns {void} nothin
 */
export const renderTest = (
  Component,
  props = {},
  itText = 'should render',
  describeText = 'render',
) => {
  describe(describeText, () => {
    if ('test' in window) {
      test(itText, () => {
        const rendered = shallow(<Component {...props} />);
        expect(rendered).toHaveLength(1);
      });
    } else {
      it(itText, () => {
        const rendered = shallow(<Component {...props} />);
        expect(rendered).toBeTruthy();
      });
    }
  });
};
