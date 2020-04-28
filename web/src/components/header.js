import {Link} from 'gatsby'
import React, {useState} from 'react'

const menu = [
  {
    route: `/about`,
    title: `About`
  },
  {
    route: `/contact`,
    title: `Contact`
  }
]

const Header = ({title}) => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header>
      <div className='flex flex-wrap items-center justify-between max-w-5xl mx-auto p-4 md:p-8'>
        <Link className='flex items-center no-underline text-black' to='/'>
          <h1>{title}</h1>
        </Link>

        <button
          className='block md:hidden border border-black flex items-center px-3 py-2 rounded text-black'
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>

        <nav
          className={` md:block md:flex md:items-center w-full md:w-auto ${
            isExpanded ? `block` : `hidden`
          }`}
        >
          {menu.map(link => (
            <Link
              className='block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-black'
              key={link.title}
              to={link.route}
            >
              <h2>{link.title}</h2>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
