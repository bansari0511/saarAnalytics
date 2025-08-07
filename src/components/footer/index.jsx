// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

// assets
import logo from '@/assets/images/logo/png/footer2.png';

function Footer() {
	return (
		<Box
			sx={{
				background: 'linear-gradient(to top, #153071, #ccc9c9)',
			}}
			py={3}
		>
			<Container maxWidth="lg" component={Stack} direction="column" spacing={5}>
				<Grid container spacing={3} alignContent="center" justifyContent="center" alignItems="center">
					<Grid item xs={12} sm={6} md={6}>
						<Box
							component="img"
							src={logo}
							alt="Slim Logo"
							sx={{
								width: '17%',
								borderRadius: '4px',
								padding: '4px',
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={4} md={6}>
						<Stack spacing={1} alignItems="right" direction="column">
							<Stack direction="row" spacing={1}>
								<Typography
									variant="body1"
									textAlign="center"
									sx={{
										fontSize: '16px',
										color: 'white',
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
