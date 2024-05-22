import React from "react";
import { Pressable, StyleSheet, Image, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  onPress?: () => void;
  text?: string;
  style?: any;
  textStyle?: any;
  disabled?: boolean;
  children?: any;
  icon?: any;
}

const Button: React.FC<Props> = ({
  onPress,
  text,
  style,
  textStyle = null,
  disabled,
  icon,
  ...props
}) => {
  return (
    <Pressable
      disabled={disabled}
      style={[styles.button, disabled && styles.buttonDisabled, style]}
      {...props}
      onPress={() => onPress && onPress()}
    >
      <View style={{}}>
        {text ? (
          <Text
            style={
              textStyle
                ? { ...styles.buttonText, ...textStyle }
                : styles.buttonText
            }
          >
            {text}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#FF8A65",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDisabled: {
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "400",
    color: "#fff",
    fontSize: 16,
  },
});
