import { shallow } from "enzyme";
import * as React from "react";
import { Text } from "react-native";
import Hello from "./Hello";

describe(`Hello Component`, () => {
  it(`renders correctly with defaults`, () => {
    const hello = shallow(<Hello name="Gooey" />);
    expect(
      hello
        .find(Text)
        .render()
        .text()
    ).toEqual(`Hello Gooey!`);
  });

  it(`renders correctly with error props`, () => {
    expect(() =>
      shallow(<Hello name="Gooey" enthusiasmLevel={0} />)
    ).toThrowError(`You could be a little more enthusiastic. :D`);
  });
});
