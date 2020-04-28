import React from 'react'

const Footer = () => (
  <footer>
    <nav className='flex justify-between max-w-5xl mx-auto p-4 md:p-8 text-sm'>
      <h3 className='text-black'>
        Created by{` `}
        <a className='font-bold no-underline text-black' href='https://bradenwatkins.dev'>
          Braden Watkins
        </a>
      </h3>

      <h3>
        <a
          className='font-bold no-underline text-black'
          href='https://www.instagram.com/michellewatkinsphoto/?hl=en'
        >
          Instagram
        </a>
      </h3>
    </nav>
  </footer>
)

export default Footer
