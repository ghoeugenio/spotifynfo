import {StyleSheet} from 'react-native';

const createStyles = () => {
	return StyleSheet.create({
		button: {
			alignItems: 'center',
			justifyContent: 'center',
			borderWidth: 1,
			backgroundColor: '#fff',
			borderRadius: 5,
		},
		text: {
			color: '#000',
			padding: 5,
		},
	});
};

export default createStyles;
