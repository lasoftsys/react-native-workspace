import * as Location from 'expo-location';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


/* eslint-disable-next-line */
export interface MapProps {
}

type LocationProp = {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number,
}
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.006339428281933124;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export function Map(props: MapProps) {
  const _map = useRef(null);
  const [location, setLocation] = useState<LocationProp>({
    latitude: -1.9401634437981434,
    longitude: 30.08007229308605,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    (async () => {

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      const loc = await Location.getCurrentPositionAsync({});
      if (loc) {
        const { coords } = loc;
        setLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }
    })();
  }, []);

  if (location) {
    return (
      <MapView
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
        ref={_map}
        // customMapStyle={lightMap}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        showsCompass={true}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
        provider={PROVIDER_GOOGLE}
        initialRegion={location}>

      </MapView>
    );
  }
  return <View style={{ flex: 1, backgroundColor: 'transparent' }} />;

};


export default Map;
