import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageheaderContent from '../../components/pageHeaderContent'
const Resume = () => {

  
  return (
    <section id='resume' className='resume'>
      <PageheaderContent
        headerText='My Resume'
        icon={<BsInfoCircleFill size={40} />}
      />
      
    </section>
  )
}

export default Resume

