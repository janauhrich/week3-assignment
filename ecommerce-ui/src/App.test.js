import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import airbnbJSON from "./_data/airbnbs.json";
import App from './App';
import AirbnbList from "./airbnbList";

const testData = airbnbJSON;

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should match snapshot', () => { 
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

describe('<AirbnbList />', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<AirbnbList airbnbs={testData} onBookAirbnb={testData[0]}/>);
    expect(wrapper.props().airbnbs).to.equal('{testData}');
    //wrapper.setProps({ airbnbs: 'AirbnbList' });
    //expect(wrapper.props().airbnbs).to.equal('AirbnbList');
  });


});