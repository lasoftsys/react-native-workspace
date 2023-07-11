
import { Container } from '@shared-ui';
import React, { useCallback, useEffect, } from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';
import { GestureDetector } from 'react-native-gesture-handler';



/* eslint-disable-next-line */
export interface LocationFinderProps {
}

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;


export function LocationFinder(props: LocationFinderProps) {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  //index screen gesture
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate(evt => {
      translateY.value = evt?.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y + 250);
      translateY.value = Math.min(translateY.value, MAX_TRANSLATE_Y / 3);
    })
    .onEnd(() => {
      if (translateY.value < -SCREEN_HEIGHT / 2) {
        translateY.value = withSpring(-SCREEN_HEIGHT / 2, { damping: 50 });
      }
    });


  const scrollTo = useCallback(pos => {
    'worklet';

    translateY.value = withSpring(pos, { damping: 50 });
  }, []);

  useEffect(() => {
    scrollTo(-SCREEN_HEIGHT / 3);
  }, []);

  const animContainerStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: translateY.value }] };
  });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[animContainerStyle, styles.wrapperStyles]}>

      </Animated.View>
    </GestureDetector>

  );
};

export default LocationFinder;

const styles = StyleSheet.create({
  wrapperStyles: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    width: '100%',
    top: SCREEN_HEIGHT,
  }
})