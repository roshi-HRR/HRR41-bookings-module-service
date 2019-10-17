import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/components/app.jsx';

describe('Can render the main App component', () => {
  test('can render the main App component', () => {
    const wrapper = Enzyme.shallow(<App/>);
    expect(wrapper.isEmptyRender()).toBe(false);
  })
})