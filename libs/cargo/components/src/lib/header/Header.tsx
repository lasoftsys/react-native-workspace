
import React from "react";
import { Animated } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/* eslint-disable-next-line */
export interface HeaderProps {
  children?: React.ReactNode;
  bgColor: string;
  // scrollY: number;
  headerHeight: number;
}

export function Header({ bgColor, scrollY, headerHeight, children }: HeaderProps) {
  const insets = useSafeAreaInsets()
  return (
    <Animated.View
      style={{
        overflow: "hidden",
        marginTop: -1000,
        paddingTop: 1000,
        backgroundColor: bgColor,
      }}
    >
      <Animated.View
        style={{
          flexDirection: "row",
          height: headerHeight,
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          paddingTop: insets.top,
          // backgroundColor: "yellow",
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [-headerHeight, 0, headerHeight],
                outputRange: [-headerHeight / 2, 0, headerHeight * 0.75],
              }),
            },
          ],
        }}
      >
        {children}
      </Animated.View>
    </Animated.View>

  );
};

export default Header;