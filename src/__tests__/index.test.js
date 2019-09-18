import React from 'react';
// import renderer from 'react-test-renderer';
import App from '../index';

describe('<App />', () => {
  it('is rendered at application start', () => {
    const app = shallow(<App />);
    expect(app.find('div').exists()).toBe(true);
  });
});
