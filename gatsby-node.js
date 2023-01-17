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
        allContentfulCategory {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
      //Create page for each project
      data.allContentfulProject.edges.forEach(edge => {
          actions.createPage ({
              //URL
              path: '/projects/' + edge.node.slug,
              //Tamplate
              component: path.resolve('./src/templates/project.jsx'),
              context: {slug: edge.node.slug}

          })

      })
      //Create page for each category
      data.allContentfulCategory.edges.forEach(edge => {
        actions.createPage ({
            //URL
            path: '/projects/' + edge.node.slug,
            //Tamplate
            component: path.resolve('./src/templates/category.jsx'),
            context: {slug: edge.node.slug}

        })

    })

}