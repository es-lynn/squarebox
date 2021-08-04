import React, { useEffect } from 'react'
import { redirect } from './Home.func'

export const Home = () => {
  useEffect(() => {
    setTimeout(() => redirect(), 50)
  }, [])

  return <>Home</>
}
