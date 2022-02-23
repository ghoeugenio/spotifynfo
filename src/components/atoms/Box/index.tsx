import React, {useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import PropTypes from 'prop-types';
//import Animated from 'react-native-reanimated';

interface BoxType {
	style?: StyleProp<ViewStyle>;
	children?: React.ReactNode;
}

const Box = ({style, children, ...rest}: BoxType) => {
	return (
		<View style={style} {...rest}>
			{children}
		</View>
	);
};

Box.defaultProps = {
	children: null,
	style: null,
};

Box.propTypes = {
	children: PropTypes.node,
	style: PropTypes.array,
};

export default Box;
