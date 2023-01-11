import * as React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../style/style.css'
import Picture from "../components/Picture"


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
                    <p>{node.description.description}</p>
                    <Picture {...node.featuredImage}/>
                </div>
                
                <section>
                {node.educations.map(education =>
                  <article key={education.contentful_id}>
                    <h2>{education.intitutionName}</h2>
                    <h3>{education.program}</h3>
                    <h6>Startdatum:&nbsp;{education.startDate}</h6>
                    <h6>Slutdatum:&nbsp;{education.endDate}</h6>
                    <Picture {...node.featuredImage}/>
                  </article> 
                )}
                </section>

                <section>
                {node.jobs.map(job =>
                  <article key={job.contentful_id}>
                    <h2>{job.companyName}</h2>
                    <h3>{job.jobTitle}</h3>
                    <h3>{job.jobDescription}</h3>
                    <h6>Startdatum:&nbsp;{job.startDate}</h6>
                    <h6>Slutdatum:&nbsp;{job.endDate}</h6>
                  </article> 
                )}
                </section>

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
            description
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
