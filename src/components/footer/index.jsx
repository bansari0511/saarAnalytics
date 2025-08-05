import constants from '@/utils/constants';
// MUI
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
// assets
import logo from '@/assets/images/logo/png/footer2.png';

function Footer() {
	return (
		<Box bgcolor={(theme) => theme.palette.background.paper} py={3} borderTop={1} borderColor="cuaternary.300">
			<Container maxWidth="lg" component={Stack} direction="column" spacing={5}>
				<Grid container spacing={3} alignContent="center" justifyContent="center" alignItems="center">
					<Grid item xs={12} sm={6} md={4}>
						<Box component="img" src={logo} alt="slim logo" width="30%" />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Stack spacing={1} alignItems="center" direction="column">
							<Typography variant="h6">Announcements</Typography>
							<Stack direction="row" spacing={1}>
								<Link href={constants.siteData.siteRepo} target="_blank" rel="noreferrer noopener">
									<IconButton aria-label="network" color="primary">
										<FacebookIcon />
									</IconButton>
								</Link>
								<Link href={constants.siteData.siteRepo} target="_blank" rel="noreferrer noopener">
									<IconButton aria-label="network" color="primary">
										<TwitterIcon />
									</IconButton>
								</Link>
								<Link href={constants.siteData.siteRepo} target="_blank" rel="noreferrer noopener">
									<IconButton aria-label="network" color="primary">
										<GoogleIcon />
									</IconButton>
								</Link>
								<Link href={constants.siteData.siteRepo} target="_blank" rel="noreferrer noopener">
									<IconButton aria-label="network" color="primary">
										<GitHubIcon />
									</IconButton>
								</Link>
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
				<Stack direction="row" justifyContent="space-between" alignItems="center">
					<Typography variant="body1" textAlign="center">
						Copyright 2025 © Government of India
					</Typography>
					<Typography variant="subtitle1" textAlign="center">
						💻 - GOI
						{/* Built by antonio ayola and contributors */}
					</Typography>
				</Stack>
			</Container>
		</Box>
	);
}

export default Footer;
