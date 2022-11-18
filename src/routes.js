import { DEFAULT_PATHS } from 'config.js';

import ChoosePlatform from 'views/default/ChoosePlatform';
import NewPlatform from 'views/default/NewPlatform';
import DashboardHome from 'views/DashboardHome';

import Missions from 'views/Missions';
import Categories from 'views/Categories';

import AddMission from 'views/AddMission';
import AddCategory from 'views/AddCategory';

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    
    {
      path: `${appRoot}/dashboard`,
      label: 'Dashboard',
      icon: 'home',
      component: DashboardHome,
    },
    {
      path: `${appRoot}/missions`,
      label: 'Missions',
      icon: 'hospital',
      component: Missions,
    },
    {
      path: `${appRoot}/categories`,
      label: 'Categories',
      icon: 'input',
      component: Categories,
    },
    {
      path: `${appRoot}/addMission`,
      label: 'Add Mission',
      icon: 'heart',
      component: AddMission,
    },
    {
      path: `${appRoot}/addCategory`,
      label: 'Add Category',
      icon: 'leaf',
      component: AddCategory,
    },
  ],
  sidebarItems: [],
};
export default routesAndMenuItems;
