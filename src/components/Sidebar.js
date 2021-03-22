import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';

import logo from '../assets/logo.svg';

const useStyles = makeStyles({
	iconWidth: {
		minWidth: 0,
	},
	itemHeight: {
		height: 72,
		justifyContent: 'center',
	},
	root: {
		backgroundColor: '#1B1D29',
		width: 80,
	},
	logo: {
		textAlign: 'center',
		height: 40,
		marginTop: 20,
		marginBottom: 20,
	},
});
const menuItems = new Array(8).fill(1);

const Sidebar = () => {
	const classes = useStyles();

	return (
		<Drawer variant="permanent" classes={{ paper: classes.root }}>
			<img src={logo} alt="Logo" className={classes.logo} />
			<List>
				{menuItems.map((item, index) => (
					<ListItem button key={index} className={classes.itemHeight}>
						<ListItemIcon className={classes.iconWidth}>
							<CheckCircleOutline style={{ fill: '#888991' }} />
						</ListItemIcon>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default Sidebar;
