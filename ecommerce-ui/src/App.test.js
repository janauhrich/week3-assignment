import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import App from './App';
import AirbnbList from "./airbnbList";
import AirbnbButton from "./AirbnbButton";
import ShoppingCart from "./ShoppingCart";

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('<AirbnbList />', () => {
  it('allows us to set props', () => {
    const a = [1,2,3];
    const wrapper = mount(<AirbnbList airbnbs={[a]} />);
    expect(wrapper.props().airbnbs).to.equal('[1,2,3]');
    wrapper.setProps({ airbnbs: 'AirbnbList' });
    expect(wrapper.props().airbnbs).to.equal('AirbnbList');
  });


});