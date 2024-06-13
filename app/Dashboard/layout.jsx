import React from 'react'
import Navbar from '../UI/dashboard/Navbar/navbar'
import Sidebar from '../UI/dashboard/Sidebar/sidebar'




const layout = ({children}) => {
  return (
    <div>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Navbar/>
            {children}
        </div>

    
    </div>
  )
}

export default layout