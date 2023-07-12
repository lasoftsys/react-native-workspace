/* eslint-disable @typescript-eslint/no-empty-interface */
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@shared-ui';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';

/* eslint-disable-next-line */
export interface DrawerButtonProps {
}

export function DrawerButton(props: DrawerButtonProps) {

  const navigation = useNavigation<any>()
  return (
    <BlurView intensity={100}
      style={styles.blurStyles}
      tint='light'
    >
      <Button onPress={() => navigation.toggleDrawer()}
        className='w-auto'
        customStyles={{ padding: 0 }}>
        <MaterialIcons name="menu" size={30} color="black" />
      </Button>
    </BlurView>

  );
};

export default DrawerButton;

const styles = StyleSheet.create({
  blurStyles: {
    height: 40,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  }
})