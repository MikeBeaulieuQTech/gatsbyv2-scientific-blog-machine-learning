import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/site/layout'

const Proj = props => (
  <Layout>
    <Helmet>
      <title>Mines Bashboards</title>
      <meta name="description" content="proj" />
    </Helmet>
    <section className="container">
      <header className="bheader">
        <h2> Projects </h2>
      </header>

      <div className="grid-2">
        <div className="box boxshadow">
          <Link className="alink" to="/projects/premierelg">
            FOOTBALL
          </Link>

          <p>
            Football Summaries
          </p>
        </div>
        <div className="box boxshadow">
          <Link className="alink" to="/projects/mnistpred">
            MNIST NEURAL NET
          </Link>

          <p>
            Football Analysis
          </p>
        </div>
        <div className="box boxshadow">
          <Link className="alink" to="/projects/mcrypto">
            Cypto Currencies
          </Link>

          <p>
            Market Summaries
          </p>
        </div>
        <div className="box boxshadow">
          <Link className="alink" to="/projects/mines">
           Historical Dashboard
          </Link>

          <p>
            Mineral Mining History
          </p>
        </div>
        <div className="box boxshadow">
          <Link className="alink" to="/dashboard/AppDashboard1">
            Some more mines stuff
          </Link>

          <p>
            British Columbia open data published....
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default Proj
