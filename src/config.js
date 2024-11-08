module.exports = {
  email: 'mail@0xprashant.in',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/0xprashant',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/0xprashant',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/0xprashant',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/0xprashant',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Expertise',
      url: '/#expertise',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Certifications',
      url: '/#featured',
    },
    {
      name: 'Blogs',
      url: '/#blogs',
    },
    {
      name: 'Testimonials',
      url: '/#testimonials',
    },
    {
      name: 'Contact',
      url: '/#contact',
    }
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
