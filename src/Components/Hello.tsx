import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const hello = ({
  name,
  enthusiasmLevel = 1,
  onIncrement,
  onDecrement
}: IProps) => {
  if (enthusiasmLevel <= 0) {
    throw new Error(`You could be a little more enthusiastic. :D`);
  }

  const decrementButton = decrementBtn(onDecrement);
  const incrementButton = incrementBtn(onIncrement);

  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </Text>
      <View style={styles.buttons}>
        {decrementButton}
        {incrementButton}
      </View>
    </View>
  );
};

export default hello;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 0
  },
  buttons: {
    alignItems: `stretch`,
    alignSelf: `center`,
    flexDirection: `row`,
    minHeight: 70
  },
  greeting: {
    color: `#999`,
    fontWeight: `bold`
  },
  root: {
    alignItems: `center`,
    alignSelf: `center`
  }
});

const getExclamationMarks = (numChars: number) =>
  Array.from({ length: numChars + 1 }).join(`!`);

const nullReturnFn = () => null;

const baseButton = ({ title, accessibilityLabel, color }) => handleOnPress => (
  <View style={styles.button}>
    <Button
      title={title}
      onPress={handleOnPress || nullReturnFn}
      accessibilityLabel={accessibilityLabel}
      color={color}
    />
  </View>
);

const decrementBtn = baseButton({
  title: `-`,
  accessibilityLabel: `decrement`,
  color: `#208fb2`
});

const incrementBtn = baseButton({
  title: `+`,
  accessibilityLabel: `increment`,
  color: `#20b2aa`
});
