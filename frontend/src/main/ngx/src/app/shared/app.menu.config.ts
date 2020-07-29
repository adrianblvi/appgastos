import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'MOVEMENTS', icon: 'view_list', route: '/main/home' },
  { id: 'gasto', name: 'SPENDINGS', icon: 'add_shopping_cart', route: '/main/gasto' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
