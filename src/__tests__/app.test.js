import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app.js';

describe('<App />', () => {
  it('nothing from this page is rendered at application start', () => {
    const app = shallow(<App />);
    expect(app.find('div').exists()).toBe(false);
  });

  it('state contains headline', () => {
    const app = mount(<App />);
    expect(app.state('headline')).toEqual('Breaking news!');
  });

  it('state does not include anything from child components', () => {
    const app = mount(<App />);
    expect(app.state('text')).toEqual(undefined);
  });

  it('snapshot is rendered correctly', () => {
    const app = renderer
      .create(<App />)
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
