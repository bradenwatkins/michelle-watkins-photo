import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function ContactPage () {
  return (
    <Layout>
      <SEO keywords={[`photography`, `photographer`, `utah`, `family`, `film`]} title='Contact' />
      <section>
        <form
          className='mx-auto md:w-1/2'
          name='contact'
          method='post'
          netlify-honeypot='bot-field'
          data-netlify='true'
        >
          <input type='hidden' name='bot-field' />
          <p className='mb-8 leading-loose'>
            Thank you so much for visiting! I’m honored you are interested in working together.
            Please fill out the form below and I will get in touch!
          </p>

          <label className='block mb-2 text-xs font-bold uppercase' htmlFor='first-name'>
            Name
          </label>

          <input
            className='w-full mb-6 form-input'
            id='first-name'
            placeholder='Michelle Watkins'
            type='text'
            name='name'
          />

          <label className='block mb-2 text-xs font-bold uppercase' htmlFor='last-name'>
            Email
          </label>

          <input
            className='w-full mb-6 form-input'
            id='last-name'
            placeholder='youremail@photo.com'
            type='text'
            name='email'
          />

          <label className='block mb-2 text-xs font-bold uppercase' htmlFor='message'>
            Message
          </label>

          <textarea
            className='w-full mb-6 form-textarea'
            id='message'
            placeholder='Say something...'
            rows='8'
            name='message'
          />

          <button className='px-4 py-2 text-sm font-bold text-white bg-gray-600 border-gray-600 rounded hover:border-gray-700 hover:bg-gray-700'>
            Submit
          </button>
        </form>
      </section>
    </Layout>
  )
}

export default ContactPage
