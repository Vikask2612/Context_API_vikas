import React, { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {

    let userdata = "vikas's data";

  return (
        <DataContext.Provider value={userdata}>
            {children}
        </DataContext.Provider>
  )
}

export default UserContext
