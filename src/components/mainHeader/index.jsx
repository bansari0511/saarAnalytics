import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

// assets
import logo from '@/assets/images/logo/png/demand-summary.png';

import LoggedUser from './loggedUser';
import SearchBar from './searchBar';

function MainHeader() {
	return (
		<Box
			component="header"
			py={1.5}
			zIndex={1}
			sx={{
				background: 'linear-gradient(to bottom, #153071, #ccc9c9)',
			}}
		>
			<Stack
				component={Container}
				maxWidth="lg"
				direction="row"
				height={50}
				justifyContent="space-between"
				alignItems="center"
				flexWrap="wrap"
				spacing={3}
				overflow="hidden"
			>
				<Stack direction="row" alignItems="center" spacing={1}>
					<Box
						component="img"
						width={{
							xs: 50,
							sm: 50,
						}}
						src={logo}
						alt="logo"
					/>
					<Typography
						component="sub"
						variant="caption"
						alignSelf="self-end"
						display={{
							xs: 'none',
							sm: 'block',
						}}
						sx={{ color: 'white', fontSize: '20px', fontWeight: 600 }}
					>
						saarAnalytics
					</Typography>
				</Stack>
				<SearchBar />
				<LoggedUser />
			</Stack>
		</Box>
	);
}

export default MainHeader;
