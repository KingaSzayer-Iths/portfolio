const path = require('path')

exports.createPages = async ({graphql, actions}) => {

    const {data} = await graphql(` 
    query getAllSlugs {
        allContentfulProject {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
      
      data.allContentfulProject.edges.forEach(edge => {
          actions.createPage ({
              //URL
              path: '/projects/' + edge.node.slug,
              //Tamplate
              component: path.resolve('./src/templates/project.jsx'),
              context: {slug: edge.node.slug}

          })

      })

}