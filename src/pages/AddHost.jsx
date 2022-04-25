import React from 'react'
import Heading from '../components/common/Heading'
import HostForm from '../components/admin/HostForm'

const AddHost = () => {
  return (
      <>
        <Heading size="1">Add host</Heading>
        <HostForm />
      </>
  )
}

export default AddHost