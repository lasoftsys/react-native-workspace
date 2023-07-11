/* eslint-disable @typescript-eslint/no-empty-interface */
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Container } from '@shared-ui';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export interface MapHeaderProps { }

export function MapHeader(
	props: MapHeaderProps
) {
	const insets = useSafeAreaInsets()
	const navigation = useNavigation<any>()
	return (
		<Container
			className='absolute left-4'
			customStyles={{ top: insets.top, borderRadius: 10 }}
		>
			<BlurView intensity={90}
				style={styles.blurStyles}
			>
				<Button onPress={() => navigation.toggleDrawer()}
					className='w-auto'
					customStyles={{ padding: 0 }}>
					<MaterialIcons name="menu" size={30} color="black" />
				</Button>
			</BlurView>
		</Container>
	);
}

export default MapHeader;

const styles = StyleSheet.create({
	blurStyles: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 9,
		paddingHorizontal: 9,
		borderRadius: 10
	}
})