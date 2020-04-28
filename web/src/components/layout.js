import {graphql, StaticQuery} from 'gatsby'
import React from 'react'

import Header from './header'
import Footer from './footer'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
    }
  }
`

function LayoutContainer ({children, data}) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          )
        }
        return (
          <div className='flex flex-col font-sans min-h-screen text-gray-900'>
            <Header title={data.site.title} />
            <main className='flex flex-col flex-1 md:justify-center max-w-5xl mx-auto px-4 py-8 md:p-8 w-full'>
              {children}
            </main>
            <Footer />
          </div>
        )
      }}
    />
  )
}

export default LayoutContainer
