import * as React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../style/style.css'
import arrowUp from "../images/arrow-up32x32.png"
import Picture from "../components/Picture"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Bold = ({ children }) => <span className="richtext-bold">{children}</span>
const Text = ({ children }) => <p className="about-description">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}


const About = ({data}) => {

    const node = data.contentfulAbout
  
    return (
    <>
    <div class="wrapper">
        <Header/>
        <main>
            <h1>Om mig</h1>
                <div>
                    <h2>{node.name}</h2>
                        {/* <p>{node.description.description}</p> */}
                        <div>{renderRichText(node.description, options)}</div>
                    {/* <Picture {...node.featuredImage}/> */}
                </div>
                
                <section className="edu">
                {/* Loops all educations and creates article */}
                {node.educations.map(education =>
                  <article key={education.contentful_id}>
                    <h2>{education.intitutionName}</h2>
                    <h3>{education.program}</h3>
                    <h6>Startdatum:&nbsp;{education.startDate}</h6>
                    <h6>Slutdatum:&nbsp;{education.endDate}</h6>
                    {/* <Picture {...node.featuredImage}/> */}
                  </article> 
                )}
                </section>

                
                <section  className="job">
                 {/* Sort jobs so newest on top.  */}
                 {/* https://stackoverflow.com/questions/10123953/how-to-sort-an-object-array-by-date-property#:~:text=Using%20the%20arrow%20function%20way */}
                {node.jobs.sort((a,b)=>new Date(b.startDate).getTime()-new Date(a.startDate).getTime()).map(job =>
                  <article key={job.contentful_id}>
                    <h2>{job.companyName}</h2>
                    <h3>{job.jobTitle}</h3>
                    <h3>{job.jobDescription}</h3>
                    <h6>Startdatum:&nbsp;{job.startDate}</h6>
                    <h6>Slutdatum:&nbsp;{job.endDate}</h6>
                  </article> 
                )}
                </section>
                {/* <a href="#" id="fab"><img src={arrowUp} alt="Scroll to top " /></a> */}
        </main>
        <Footer/>
    </div>
    </>
    )
}

export default About

export const Head = () => <title>Om mig</title>

// GraphQL Query
export const query = graphql`
query AboutQuery {
    contentfulAbout {
        name
        featuredImage {
            url
        }
        description {
            raw
        }
        educations {
            contentful_id
            program
            startDate(formatString: "YYYY-MM-DD")
            endDate(formatString: "YYYY-MM-DD")
            intitutionName
            featuredImage {
            url
            }
        }
        jobs {
            companyName
            jobDescription
            jobTitle
            startDate(formatString: "YYYY-MM-DD")
            endDate(formatString: "YYYY-MM-DD")
        }
    }
}`
