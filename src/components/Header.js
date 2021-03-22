import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		padding: '18px 32px 18px 112px',
		backgroundColor: '#FFF',
	},
	titleMargin: {
		marginRight: 24,
	},
	title: {
		color: '#7D7D7D',
		fontSize: 13,
	},
	value: {
		color: '#262626',
		fontSize: 19,
	},
});

const Header = () => {
	const classes = useStyles();

	return (
		<header className={classes.root}>
			<div className={classes.titleMargin}>
				<Typography className={classes.title}>Balance</Typography>
				<Typography className={classes.value}>231 920 $</Typography>
			</div>
			<div>
				<Typography className={classes.title}>Payout</Typography>
				<Typography className={classes.value}>159 465 $</Typography>
			</div>
		</header>
	);
};

export default Header;
