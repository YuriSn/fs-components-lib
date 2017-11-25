import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import Button from "../Button";

configure({ adapter: new Adapter() });

const FAKE_PROPS = {
  children:  "Test",
  className: "test__button",
  onClick:   () => {}
};

const getComponent = (props = {}) => (
  <Button {...props} />
);

describe("<Button />", () => {
  it("should render component", () => {
    const component = mount(getComponent());

    expect(component.find(Button).length).toBe(1);
  });

  it("should share props in component", () => {
    const component = mount(getComponent(FAKE_PROPS));

    expect(component.props()).toEqual(FAKE_PROPS);
  });
});
