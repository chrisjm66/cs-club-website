import { Outlet } from 'react-router-dom'
import Header from '../Header'
import './index.css'
const Layout = () => {
    return (
        <>
            <Header />

            <div className="page-zone">
                <Outlet /> { /* This returns the nested route/component here from App.js */}
            </div>
        </>
        
    )
}

export default Layout;