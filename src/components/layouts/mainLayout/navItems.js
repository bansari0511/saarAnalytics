import { v4 as uuid } from 'uuid';
// Icons
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

/**
 * @example
 * {
 *	id: number,
 *	type: "group" | "item",
 *	title: string,
 *	Icon: NodeElement
 *	menuChildren?: {title: string, href: string}[]
 *  menuMinWidth?: number
 * }
 */

const NAV_LINKS_CONFIG = [
	{
		id: uuid(),
		type: 'item',
		title: 'Dashboard',
		Icon: BarChartOutlinedIcon,
		href: '/dashboard3',
	},
	{
		id: uuid(),
		type: 'group',
		title: 'Components',
		Icon: GridViewOutlinedIcon,
		menuChildren: [
			{
				title: 'Forms',
				href: '/components/forms',
			},
		],
	},
	{
		id: uuid(),
		type: 'group',
		title: 'Pages',
		Icon: AutoStoriesOutlinedIcon,
		menuChildren: [
			{
				id: uuid(),
				title: 'Sign in',
				type: 'group',
				menuChildren: [
					{
						title: 'Sign in',
						href: '/pages/login',
					},
				],
			},
		],
	},
	{
		id: uuid(),
		type: 'item',
		title: 'Profile',
		Icon: AccountCircleOutlinedIcon,
		href: '/profile',
	},
];

export default NAV_LINKS_CONFIG;
