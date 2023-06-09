/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'HTML-CSS',
      link: { type: 'generated-index', description: 'HTML-CSS docs', slug: '/html-css' },
      items: [{ type: 'autogenerated', dirName: 'html-css' }],
    },
    {
      type: 'category',
      label: 'Javascript',
      link: { type: 'generated-index', description: 'Javascript docs', slug: '/javascript' },
      items: [{ type: 'autogenerated', dirName: 'javascript' }],
    },
    {
      type: 'category',
      label: 'React',
      link: { type: 'generated-index', description: 'React docs', slug: '/react' },
      items: [{ type: 'autogenerated', dirName: 'react' }],
    },
  ],
};

module.exports = sidebars;
