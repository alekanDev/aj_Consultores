import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PublicLayout = ({ Children }) => {
  return (
    <div className='layoutContent'>
        <Navbar />
        <main className='mainLayout'>
            {Children}
            <Footer />
        </main>
    </div>
  )
}

export default PublicLayout