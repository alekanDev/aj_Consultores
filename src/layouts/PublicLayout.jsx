import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PublicLayout = (Children) => {
  return (
    <div>
        <Navbar />
        <main>
            {Children}
        </main>
        <Footer />
    </div>
  )
}

export default PublicLayout