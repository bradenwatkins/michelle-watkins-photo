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
                  buildHookId: '5ea886845f64f68bd9f63675',
                  title: 'Sanity Studio',
                  name: 'michelle-watkins-photo-studio',
                  apiId: '48aaefc8-83b2-4bfc-8640-08dad7f1597d'
                },
                {
                  buildHookId: '5ea886844711ba47e8a964d6',
                  title: 'Portfolio Website',
                  name: 'michelle-watkins-photo',
                  apiId: '39a6dbd9-d69b-476d-99de-e6d8e51dcf74'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bradenwatkins/michelle-watkins-photo',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://michelle-watkins-photo.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent albums', order: '_createdAt desc', types: ['album']},
      layout: {width: 'medium'}
    }
  ]
}
