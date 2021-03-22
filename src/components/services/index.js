import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Service from './Service';
import { services } from '../../utilities/services';

const useStyles = makeStyles({
	root: {
		padding: '40px 32px 40px 112px',
		minHeight: '75vh',
	},
	filter: {
		padding: '12px 0',
	},
	btn: {
		height: '100%',
	},
});

const Services = () => {
	// States
	const [filter, setFilter] = useState('');
	const [filteredServices, setFilteredServices] = useState(services);

	// Functions
	const filterServices = (e) => {
		setFilter(e.target.value);

		// Wait 1 sec for the user to finish typing
		setTimeout(() => {
			setFilteredServices(
				services.filter((service) => service.name === e.target.value)
			);
		}, 1000);
	};

	const resetFilter = () => {
		setFilter('');
		setFilteredServices(services);
	};

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography variant="h4">Services</Typography>

			<Grid container spacing={1} className={classes.filter}>
				<Grid item xs={3}>
					<TextField
						variant="outlined"
						label="FILTER"
						fullWidth
						size="small"
						value={filter}
						onChange={filterServices}
					/>
				</Grid>
				<Grid item xs={3}>
					<Button
						variant="outlined"
						fullWidth
						className={classes.btn}
						onClick={resetFilter}
					>
						Reset
					</Button>
				</Grid>
			</Grid>

			{filteredServices.length ? (
				filteredServices.map((service, index) => (
					<Service service={service} key={index} index={index} />
				))
			) : (
				<Typography variant="h6" align="center">
					No Services
				</Typography>
			)}
		</div>
	);
};

export default Services;
