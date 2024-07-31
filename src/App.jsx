import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Inplay from './Pages/Inplay'
import Sport from './Pages/Sport'
import Dashboard from './Pages/Dashboard'
import Multi from './Pages/Multi'
import Account from './Pages/Account'
import LiveCasino from './Pages/LiveCasino'
import MyProfile from './Pages/MyProfile'
import Rolling from './Pages/Rolling'
import PasswordHistory from './Pages/PasswordHistory'
import AccountStatement from './Pages/AccountStatement'
import ActivityLog from './Pages/ActivityLog'
import MyBets from './Pages/MyBets'
import ProfitLoss from './Pages/ProfitLoss'
import CasinoGame from './Pages/CasinoGame'
import Login from './Login/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home}>
              <Route path='/' Component={Dashboard}/>
              <Route path='/inplay' Component={Inplay}/>
              <Route path='/sport' Component={Sport}/>
              <Route path='/multi-markets' Component={Multi}/>
              <Route path='/account' Component={Account}/>
              <Route path='/livecasino' Component={LiveCasino}/>
              <Route path='/myprofile' Component={MyProfile}/>
              <Route path='/rolling-commission' Component={Rolling}/>
              <Route path='/password-history' Component={PasswordHistory}/>
              <Route path='/account-statement' Component={AccountStatement}/>
              <Route path='/activity-log' Component={ActivityLog}/>
              <Route path='/bets-history' Component={MyBets}/>
              <Route path='/profit-loss' Component={ProfitLoss}/>
              <Route path='/casino-3-patti/:id' Component={CasinoGame}/>
        </Route>
              <Route path='/login' Component={Login}/>
      </Routes>
    </div>
  )
}

export default App