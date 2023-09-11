import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import EditTask from '../pages/EditTask'
import DetailsTask from '../pages/DetailsTask'
import NewTask from '../pages/NewTask'

const Root = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path ='/login' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
                
                <Route path='new-task' element={<NewTask />} />
                <Route path='/tasks/:id' element={<DetailsTask />} />

            </Routes>

        </Router>
    )
}

export default Root