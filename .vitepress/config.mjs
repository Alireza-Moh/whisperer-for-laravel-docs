import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Idea Whisperer for Laravel",
  description: "Idea Whisperer For Laravel is a PhpStorm plugin designed to boost your productivity by streamlining the development process for Laravel applications. With a set of powerful features, this plugin helps you work faster when developing Laravel applications in PhpStorm.",
  base: '/idea-whisperer-for-laravel/',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/installation' },
      { text: 'Issues', link: 'https://github.com/Alireza-Moh/idea_whisperer_for_laravel/issues' }
    ],

    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Settings', link: '/settings' },
          { text: 'Changelog', link: '/changelog' }
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Code generation', link: '/code-generation' },
          { text: 'Helper code generation', link: '/helper-code-generation' },
          { text: 'Routing', link: '/routing' },
          { text: 'Request validation', link: '/request' },
          { text: 'Blade', link: '/blade' },
          { text: 'Config', link: '/config' },
        ]
      },
      {
        text: 'Packages',
        items: [
          { text: 'Inertia', link: '/inertia' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Alireza-Moh/idea_whisperer_for_laravel' }
    ]
  }
})
