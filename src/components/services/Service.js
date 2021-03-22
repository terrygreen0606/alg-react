import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FileCopyOutlined from '@material-ui/icons/FileCopyOutlined';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Snackbar from '@material-ui/core/Snackbar';

import Alert from '../Alert';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '24px 0',
		display: 'flex',
		backgroundColor: '#FFF',
		padding: '26px 32px',
		border: '1px solid #E2E5EC',
		borderRadius: 6,
	},
	title: {
		fontSize: 29,
	},
	description: {
		fontSize: 15,
		color: '#7D7D7D',
	},
	item: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'flex-start',
			margin: '20px 0',
		},
	},
	textfield: {
		width: '95%',
		height: 42,
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
	label: {
		marginLeft: 14,
		marginTop: -8,
	},
	input: {
		padding: '12.5px 14px',
	},
}));

const Service = ({ service, index }) => {
	// States
	const [clipboardTxt, setClipboardTxt] = useState('');
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [active, setActive] = useState(service.active);

	// Functions
	const copyToClipboard = () => {
		const text = clipboardTxt || service.code;
		navigator.clipboard.writeText(text);
		setSnackbarOpen(true);
	};

	const onClose = () => {
		setSnackbarOpen(false);
	};

	const handlePromocode = (e) => {
		setClipboardTxt(e.target.value);
	};

	const activate = () => {
		setActive(!active);
	};

	const classes = useStyles();

	return (
		<Grid container className={classes.root + ' services'}>
			<Grid xs={12} md={6} item>
				<Typography className={classes.title} noWrap>
					{service.name}
				</Typography>
				<Typography className={classes.description} noWrap>
					Description
				</Typography>
			</Grid>
			<Grid item xs={12} md={3} className={classes.item}>
				<FormControl className={classes.textfield}>
					<InputLabel htmlFor={'promocode' + index} className={classes.label}>
						PROMOCODE
					</InputLabel>
					<OutlinedInput
						id={'promocode' + index}
						defaultValue={service.code}
						onChange={handlePromocode}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="Copy to Clipboard"
									onClick={copyToClipboard}
									edge="end"
								>
									<FileCopyOutlined />
								</IconButton>
							</InputAdornment>
						}
						labelWidth={100}
					/>
				</FormControl>
			</Grid>
			<Grid item xs={12} md={3} className={classes.item}>
				<Button
					color={active ? 'inherit' : 'primary'}
					variant="contained"
					fullWidth
					size="large"
					onClick={activate}
				>
					{active ? 'Deactivate' : 'Activate Bonus'}
				</Button>
			</Grid>

			<Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={onClose}>
				<Alert severity="success" onClose={onClose}>
					Copied to clipboard.
				</Alert>
			</Snackbar>
		</Grid>
	);
};

export default Service;
