import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/components/app.jsx';
import Cost from '../client/components/cost.jsx';

import {jsdom} from 'jsdom'
const doc = jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

describe('Can render the main App component', () => {
  test('can render the main App component', () => {
    const wrapper = Enzyme.shallow(<App/>);
    expect(wrapper.isEmptyRender()).toBe(false);
  })
})

describe('Cost component works', () => {
  test('can take in a cost property', () => {
    const wrapper = Enzyme.mount(<Cost initial={231}/>);
    expect(wrapper.props().includedProp).toBe(231);
  })
})