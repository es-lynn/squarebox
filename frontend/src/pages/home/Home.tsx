import React, { useEffect } from 'react'
import { isCredentialsConfigured, isDeviceConfigured, redirectToSetupPage } from './Home.func'
import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'

export const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      if (!isCredentialsConfigured()) {
        Nav.url(path.login.index)
      } else if (!isDeviceConfigured()) {
        Nav.url(path.setup.index)
      } else {
        redirectToSetupPage()
      }
    }, 50)
  }, [])

  return <>Home</>
}
