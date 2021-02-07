import { Cve } from './components/Cve';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Talk } from './components/Talks';
import { Projets } from './components/Projets';
import { Challenge } from './components/Challenges';

export const routes = [
  {
    label: 'Home',
    path: '/',
    component: Home,
  },
  {
    label: 'Profile',
    path: '/profile',
    component: Profile,
  },
  {
    label: 'Talks',
    path: '/talks',
    component: Talk,
  },
  {
    label: 'Projets',
    path: '/projets',
    component: Projets,
  },
  {
    label: 'My Challenges',
    path: '/challenge',
    component: Challenge,
  },
  {
    label: 'CVE',
    path: '/cve',
    component: Cve,
  }
];
