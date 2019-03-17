import React, { Component } from 'react'
import AnnualCoalComponent from '../../components/mines/bcannualcoalproduction'
import Helmet from 'react-helmet'
import Layout from '../../components/site/layout'
import { graphql } from 'gatsby'

export default class MiningCoalSummary extends Component {
  render() {
    const data = this.props.data.allBcannualcoalproductionCsv.edges
    return (
      <Layout bs={false}>
        <Helmet>
          <title>Mines Historical Production</title>
          <meta name="description" content="Generic Page" />
        </Helmet>
        <section className="container">
          <header className="bheader">
            <h2> Historical Dashboard</h2>
          </header>
          <AnnualCoalComponent data={data} />
        </section>
      </Layout>
    )
  }
}

export const CsvQuery = graphql`
  query {
    allBcannualcoalproductionCsv {
     edges{
       node{
         Year
         Coal_tonnes
         Coal_value_C
       }
     }
   }
 }
`
