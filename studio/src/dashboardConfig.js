export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f2c1083914cd3352ade01ac',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-aqd5zgr6',
                  apiId: '3e7a9add-2678-4586-b91a-c23381bb221a'
                },
                {
                  buildHookId: '5f2c1084b96dd434a0f73665',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qs9heqzj',
                  apiId: 'a31d575a-8478-40c3-b1fa-9e81c390b8e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/StevenDixonDev/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qs9heqzj.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
