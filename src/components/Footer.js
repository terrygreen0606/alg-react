import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		padding: '18px 32px 18px 112px',
	},
	footer: {
		color: '#7D7D7D',
	},
});

const Footer = () => {
	const classes = useStyles();

	return (
		<footer className={classes.root}>
			<Typography className={classes.footer} align="right">
				&copy; IT Promocodes, 2021
			</Typography>
		</footer>
	);
};

export default Footer;
