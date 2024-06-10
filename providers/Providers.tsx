'use client'
import store from '@/store/store'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
export default function Providers({children}:{children:React.ReactNode}) {
  let persistor = persistStore(store)
  return (
   <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      {children}
    </PersistGate>
    

   </Provider>
  )
}
