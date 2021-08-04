import React, { useEffect } from 'react'
import { isCredentialsConfigured, isDeviceConfigured, redirectToPage } from './Home.func'
import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'

export const Home = () => {
  useEffect(() => {
    if (!isCredentialsConfigured()) {
      Nav.url(path.login.index)
    } else if (!isDeviceConfigured()) {
      Nav.url(path.setup.index)
    } else {
      redirectToPage()
    }
  }, [])

  return <></>
}
