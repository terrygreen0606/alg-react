import { makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/services';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#0085FF',
		},
	},
});

const useStyles = makeStyles({
	root: {
		backgroundColor: '#E5E5E5',
		minHeight: '100vh',
	},
});

function App() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Sidebar />
				<main className={classes.root}>
					<Header />
					<Services />
					<Divider />
					<Footer />
				</main>
			</div>
		</ThemeProvider>
	);
}

export default App;
