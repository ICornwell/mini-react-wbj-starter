import React from "react"
import { Hello } from "../src/helloComponent"
import { shallow } from "enzyme"
import chai from "chai"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("<Hello/>", () => {
  test("renders one <h1> tag", () => {
    const wrapper = shallow(<Hello />)

    // native jest assertions / expectations
    expect(wrapper.find("h1").length).toBe(1)
  });

  test("renders zero <h2> tag", () => {
    const wrapper = shallow(<Hello />)

    // can also use chai for assertions / expectations
    chai.expect(wrapper.find("h2")).to.have.length(0)
  });
});