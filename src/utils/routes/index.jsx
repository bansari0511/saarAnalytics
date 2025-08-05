import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ScrollToTopOnRouteChange from '@hocs/withScrollTopOnRouteChange';
import withLazyLoadably from '@hocs/withLazyLoadably';
import MainLayout from '@/components/layouts/mainLayout';

import Page404 from '@/pages/errorPages/404';

const Dashboard3Page = withLazyLoadably(lazy(() => import('@/pages/dashboardsPages/dashboard3')));
const WIPPage = withLazyLoadably(lazy(() => import('@/pages/wip')));
const SamplePage = withLazyLoadably(lazy(() => import('@/pages/sample')));

function Router() {
	return (
		<BrowserRouter>
			<ScrollToTopOnRouteChange>
				<Routes>
					{/* <Route path="/" element={<MinimalLayout />}>
						<Route path="pages/">
							<Route path="login" element={<LoginPage />} />
							<Route path="login/simple" element={<LoginSimplePage />} />
							<Route path="login/split" element={<LoginSplitPage />} />
							<Route path="signup" element={<SignupPage />} />
							<Route path="signup/simple" element={<SignupSimplePage />} />
							<Route path="signup/split" element={<SignupSplitPage />} />
						</Route>
					</Route> */}
					<Route path="/" element={<MainLayout />}>
						<Route index element={<Dashboard3Page />} />
						<Route path="dashboard3" element={<Dashboard3Page />} />
						<Route path="samplePage" element={<SamplePage />} />

						{/* <Route path="dashboards/">
							<Route path="dashboard1" element={<Dashboard1Page />} />
							<Route path="dashboard2" element={<Dashboard2Page />} />
							<Route path="dashboard3" element={<Dashboard3Page />} />
							<Route path="dashboard4" element={<Dashboard4Page />} />
							<Route path="dashboard5" element={<Dashboard5Page />} />
						</Route> */}

						{/* <Route path="components/">
							<Route path="forms" element={<FormsComponentPage />} />
							<Route path="loaders" element={<LoadersComponentPage />} />
							<Route path="tables" element={<TablesComponentPage />} />
							<Route path="modal" element={<ModalComponentPage />} />
							<Route path="snackbar" element={<SnackbarComponentPage />} />
							<Route path="carousel" element={<CarouselComponentPage />} />
							<Route path="navigation" element={<NavigationComponentPage />} />
							<Route path="card" element={<CardComponentPage />} />
							<Route path="cardHeader" element={<CardHeaderComponentPage />} />
							<Route path="pageHeader" element={<PageHeaderComponentPage />} />
						</Route> */}

						{/* <Route path="theme/">
							<Route path="typography" element={<ThemeTypographyPage />} />
							<Route path="colors" element={<ThemeColorsPage />} />
							<Route path="boxShadow" element={<ThemeShadowPage />} />
						</Route> */}

						{/* <Route path="pages/">
							<Route path="settings" element={<EditProfilePage />} />
							<Route path="notifications" element={<NotificationsPage />} />
							<Route path="pricing/">
								<Route path="pricing1" element={<Pricing1Page />} />
								<Route path="pricing2" element={<Pricing2Page />} />
							</Route>
							<Route path="error/">
								<Route path="404" element={<Page404 />} />
								<Route path="403" element={<Page403 />} />
								<Route path="500" element={<Page500 />} />
								<Route path="503" element={<Page503 />} />
								<Route path="505" element={<Page505 />} />
							</Route>
						</Route> */}
					</Route>
					<Route path="/" element={<MainLayout container={false} pb={false} />}>
						<Route path="pages/">
							<Route path="wip" element={<WIPPage />} />
						</Route>
					</Route>
					<Route path="*" element={<Page404 />} />
				</Routes>
			</ScrollToTopOnRouteChange>
		</BrowserRouter>
	);
}

export default Router;
