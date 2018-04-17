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
  onIncrement = null,
  onDecrement = null
}: IProps) => {
  if (enthusiasmLevel <= 0) {
    throw new Error(`You could be a little more enthusiastic. :D`);
  }

  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="-"
            onPress={onDecrement || (() => null)}
            accessibilityLabel="decrement"
            color="#208fb2"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="+"
            onPress={onIncrement || (() => null)}
            accessibilityLabel="increment"
            color="#20b2aa"
          />
        </View>
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
