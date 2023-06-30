import Home from 'views/Home.js';
import GW from 'views/GW.js';
import PlayersTable from 'views/PlayersTable.js';
import CaposList from 'views/CaposList';
import UserProfile from 'views/UserProfile.js';
import TestCommand from 'views/TestCommand.js';

const routes = [
  {
    path: '/home',
    name: 'HOME',
    rtlName: 'لوحة القيادة',
    icon: 'tim-icons icon-chart-pie-36',
    component: Home,
    layout: '/admin'
  },
  {
    path: '/gw',
    name: 'GW',
    rtlName: 'لوحة القيادة',
    icon: 'tim-icons icon-chart-pie-36',
    component: GW,
    layout: '/admin'
  },
  {
    path: '/playersTable',
    name: 'PLAYERS',
    icon: 'tim-icons icon-trophy',
    component: PlayersTable,
    layout: '/admin'
  },
  {
    path: '/capos',
    name: 'CAPOS LIST',
    icon: 'tim-icons icon-user-run',
    component: CaposList,
    layout: '/admin'
  },
  {
    path: '/profile',
    name: 'profile',
    rtlName: 'الرموز',
    icon: 'tim-icons icon-single-02',
    component: UserProfile,
    layout: '/admin'
  },
  {
    path: '/command',
    name: 'COMMAND',
    rtlName: 'الرموز',
    icon: 'tim-icons icon-single-02',
    component: TestCommand,
    layout: '/admin'
  }
];
export default routes;
