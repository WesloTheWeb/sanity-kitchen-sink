export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60d5f243fbc8c658e167e036',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hcru2nhf',
                  apiId: '90c3de94-2640-4218-9e74-45107dba631d'
                },
                {
                  buildHookId: '60d5f24344093557f4f14eec',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-g5g12udt',
                  apiId: '49af9d24-e399-46d5-8a06-5834fe2d6083'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/WesloTheWeb/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-g5g12udt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
