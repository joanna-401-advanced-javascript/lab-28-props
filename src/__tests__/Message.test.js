import React from 'react';
import renderer from 'react-test-renderer';
import Message from '../components/Message/Message';

describe('<Message />', () => {
  it('is rendered at application start', () => {
    const app = shallow(<Message />);
    expect(app.find('div').exists()).toBe(true);
    expect(app.find('p').exists()).toBe(true);
  });

  it('state contains headline', () => {
    const message = mount(<Message />);
    expect(message.state('text')).toEqual('Hello World!');
  });

  it('state does not include anything from other components in its state', () => {
    const message = mount(<Message />);
    expect(message.state('headline')).toEqual(undefined);
    expect(message.state('author')).toEqual(undefined);
  });

  it('it can access props from parent', () => {
    const message = mount(<Message />);
    expect(message.props()).toEqual({});
  });

  it('snapshot is rendered correctly', () => {
    const message = renderer
      .create(<Message />)
      .toJSON();
    expect(message).toMatchSnapshot();
  });
});
