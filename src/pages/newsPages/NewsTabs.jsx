import { useState } from 'react';
import {
	Box,
	Tabs,
	Tab,
	Paper,
	Typography,
	Grid,
	Link,
	Pagination,
	useTheme,
	useMediaQuery,
	Fade,
} from '@mui/material';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@/components/cardHeader';
import mockArticles from '@/_mocks/mockData';

function NewsTabs() {
	const [selectedTab, setSelectedTab] = useState(0);
	const [page, setPage] = useState(1);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const itemsPerPage = 5;

	const countries = [
		{ label: 'USA', value: 'usa' },
		{ label: 'India', value: 'india' },
		{ label: 'Germany', value: 'germany' },
		{ label: 'China', value: 'china' },
	];

	const handleTabChange = (_, newIndex) => {
		setSelectedTab(newIndex);
		setPage(1);
	};

	const handlePageChange = (_, newPage) => {
		setPage(newPage);
	};

	const currentCountry = countries[selectedTab].value;
	const allArticles = mockArticles[currentCountry] || [];
	const totalPages = Math.ceil(allArticles.length / itemsPerPage);
	const startIndex = (page - 1) * itemsPerPage;
	const currentArticles = allArticles.slice(startIndex, startIndex + itemsPerPage);

	return (
		<Card
			sx={{
				height: '100%',
			}}
		>
			<Box sx={{ width: '100%', marginBottom: '6px' }}>
				<Paper elevation={2} sx={{ mb: 2, borderRadius: 2 }}>
					<Tabs
						value={selectedTab}
						onChange={handleTabChange}
						variant={isMobile ? 'scrollable' : 'fullWidth'}
						scrollButtons={isMobile ? 'auto' : false}
						textColor="primary"
						indicatorColor="primary"
					>
						{countries.map((country) => (
							<Tab key={country.value} label={country.label} />
						))}
					</Tabs>
				</Paper>

				<Fade in>
					<Card
						sx={{
							height: '100%',
						}}
					>
						<CardHeader title="Lastest News" fontSize={30} subtitle="Last activity was 1 hour ago">
							<Button size="small">See All</Button>
						</CardHeader>
						<Box>
							{currentArticles.length > 0 ? (
								<Grid container spacing={2}>
									{currentArticles.map((article) => (
										<Grid
											item
											xs={12}
											key={article.id}
											sx={{
												display: 'flex',
												alignItems: 'flex-start',
												borderBottom: '1px solid',
												borderColor: 'divider',
												pb: 2,
											}}
										>
											{article.imageUrl && (
												<Box
													component="img"
													src={article.imageUrl}
													alt={article.title}
													sx={{
														width: 100,
														height: 70,
														objectFit: 'cover',
														borderRadius: 1,
														mr: 2,
													}}
												/>
											)}
											<Box sx={{ flexGrow: 1 }}>
												<Typography variant="h6">
													<Link
														href={article.url}
														target="_blank"
														rel="noopener"
														underline="hover"
													>
														{article.title}
													</Link>
												</Typography>
												<Typography variant="body2" color="text.secondary">
													{article.summary}
												</Typography>
											</Box>
										</Grid>
									))}
								</Grid>
							) : (
								<Typography variant="body1" color="text.secondary" sx={{ py: 4, textAlign: 'center' }}>
									No articles available for this country.
								</Typography>
							)}
						</Box>
					</Card>
				</Fade>

				{totalPages > 1 && (
					<Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
						<Pagination count={totalPages} page={page} onChange={handlePageChange} />
					</Box>
				)}
			</Box>
		</Card>
	);
}

export default NewsTabs;
