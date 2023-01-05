import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#services',
    text: 'services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'tours',
  },
];

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.twitter.com',
    iconClass: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    iconClass: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.twitter.com',
    iconClass: 'fab fa-squarespace',
  },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'sLorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'sLorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'sLorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26, 2023',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquvitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'august 30, 2023',
    title: 'kenyan hike',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquvitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: 10,
    cost: 3000,
  },
  {
    id: 3,
    image: tour3,
    date: 'july 22, 2023',
    title: 'city tour',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquvitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'california',
    duration: 2,
    cost: 1200,
  },
  {
    id: 4,
    image: tour4,
    date: 'june 26, 2023',
    title: 'african safari',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquvitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'congo',
    duration: 6,
    cost: 2300,
  },
];
