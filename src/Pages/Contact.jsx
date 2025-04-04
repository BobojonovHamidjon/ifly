import React from 'react'
import ContactModal from './ContactModal'

const Contact = () => {
  return (
    <div> 
      <ContactModal isOpen={modalOpen} onClose={closeModal} />
       
    </div>
  )
}

export default Contact