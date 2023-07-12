import React, { useRef } from "react";
import { Animated, } from "react-native";

/* eslint-disable-next-line */
export interface PageWrapperProps {
  // scrollY: number;
  children: React.ReactNode;
}

export function PageWrapper({ scrollY, children }: PageWrapperProps) {

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      // stickyHeaderIndices={[1]}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      style={{ flex: 1 }}
      onMomentumScrollEnd={(e) => {
        const scrollPosition = e.nativeEvent.contentOffset.y;
        const scrollViewHeight = e.nativeEvent.layoutMeasurement.height;
        const contentSize = e.nativeEvent.contentSize.height;
        const isScrolledBottom = scrollViewHeight + scrollPosition;
      }}
    >
      {children}
    </Animated.ScrollView>
  );
};


export default PageWrapper;
