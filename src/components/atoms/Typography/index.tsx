import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import PropTypes from 'prop-types';
//import Animated from 'react-native-reanimated';

interface TypographyType {
	style?: StyleProp<TextStyle>;
	children?: React.ReactNode;
}

const Typography = ({style, children, ...rest}: TypographyType) => {
	return (
		<Text style={style} {...rest}>
			{children}
		</Text>
	);
};

Typography.defaultProps = {
	children: null,
	style: null,
};

Typography.propTypes = {
	children: PropTypes.node,
	style: PropTypes.array,
};

export default Typography;
