import { v4 as uuid } from 'uuid';
// Icons
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NewspaperOutlined from '@mui/icons-material/NewspaperOutlined';
import MapOutlined from '@mui/icons-material/MapOutlined';

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
		title: 'Home',
		Icon: BarChartOutlinedIcon,
		href: '/dashboard3',
	},
	{
		id: uuid(),
		type: 'group',
		title: 'Newsroom',
		Icon: NewspaperOutlined,
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
		title: 'Map',
		Icon: MapOutlined,
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
		title: 'Search and Analysis',
		Icon: SearchOutlined,
		href: '/profile',
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
