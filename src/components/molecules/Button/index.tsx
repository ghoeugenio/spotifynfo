import React from 'react';
import {TouchableOpacity, StyleProp, TextStyle, ViewStyle} from 'react-native';
import Box from '../../atoms/Box';
import Typography from '../../atoms/Typography';
import createStyle from './styles';

interface TypographyType {
	text?: string;
	buttonStyle?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
	children?: React.ReactNode;
}

const Button = ({
	text,
	buttonStyle,
	textStyle,
	children,
	...rest
}: TypographyType) => {
	const styles = createStyle();

	return (
		<TouchableOpacity>
			<Box style={[styles.button, buttonStyle]}>
				<Typography style={[styles.text, textStyle]}>
					{text}
				</Typography>
			</Box>
		</TouchableOpacity>
	);
};

export default Button;
