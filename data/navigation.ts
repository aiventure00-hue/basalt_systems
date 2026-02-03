// Temporary navigation data structure
// TODO: Replace with actual data from CMS or API

export interface NavLink {
  href: string;
  label: string;
}

export const mainNavLinks: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/services', label: 'services' },
  { href: '/products', label: 'products' },
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' },
];

export const footerLinks = {
  primary: [
    { href: '/', label: 'home' },
    { href: '/services', label: 'services' },
    { href: '/products', label: 'products' },
    { href: '/about', label: 'about' },
    { href: '/contact', label: 'contact' },
  ],
  secondary: [
    { href: '/privacy-policy', label: 'privacy policy' },
    { href: '/terms-of-use', label: 'terms of use' },
  ],
};
