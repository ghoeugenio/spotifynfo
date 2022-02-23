import React from 'react';
import Box from '../../components/atoms/Box';
import Typography from '../../components/atoms/Typography';
import Button from '../../components/molecules/Button';
import createStyles from './styles';

const Home = () => {
	const styles = createStyles();

	return (
		<Box style={styles.container}>
			<Box style={styles.box}>
				<Typography>Spotynfo</Typography>
			</Box>
			<Box>
				<Button text="Ver estatísticas"></Button>
			</Box>
		</Box>
	);
};

export default Home;
