// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

// assets
import logo from '@/assets/images/logo/png/summary_1.png';

function Footer() {
	return (
		<Box
			sx={{
				background: 'linear-gradient(to top, #153071, #ccc9c9)',
				borderTop: '1px solid',
				borderColor: 'cuaternary.300',
			}}
			py={3}
		>
			<Container maxWidth="lg" component={Stack} direction="column" spacing={5}>
				<Grid container spacing={3} alignContent="center" justifyContent="center" alignItems="center">
					<Grid item xs={12} sm={6} md={6}>
						<Box component="img" src={logo} alt="slim logo" width="17%" />
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Stack spacing={1} alignItems="center" direction="column">
							<Stack direction="row" spacing={1}>
								<Typography
									variant="body1"
									textAlign="right"
									sx={{
										placeItems: 'right', // Note: 'placeItems' is a CSS Grid property — are you sure you want 'placeItems'? Maybe you meant 'justifyContent' or 'alignItems'?
										color: '#fff',
										fontSize: '16px',
										fontWeight: 600,
									}}
								>
									Copyright 2025 © Government of India (💻 - GOI)
								</Typography>
							</Stack>
						</Stack>
					</Grid>
				</Grid>

				<Divider
					variant="middle"
					sx={{
						bgcolor: (theme) => theme.palette.secondary.main,
					}}
				/>
			</Container>
		</Box>
	);
}

export default Footer;
