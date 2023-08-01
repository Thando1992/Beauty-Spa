import React from 'react'
import './Pricelist.css'
import Header from '../Components/Header'
function Pricelist() {
  return (
    <>
    <Header/>
    <div>
      <div className='Pricelist'>
        <h1>Pricelist</h1>
          <ul>
            <li>Full body <span>60 mins R600</span></li>
            <li>Half body <span>30 mins R300</span></li>
            <li>Full back <span>45 mins R450</span></li>
            <li>Half back <span>30 mins R300</span></li>
            <li>Half arm(to elbow) <span>25 mins R250</span></li>
            <li>Full arm <span>30 mins R300</span></li>
            <li>Half leg <span>25 mins R300</span></li>
            <li>Full Leg <span>35 mins R350</span></li>
            <li>Ear/nose/lip/chin/cheeks wax <span>15 mins R150</span></li>
            <li>Men cave <span>40 mins R400</span></li>
          </ul>
            <img src="https://images.unsplash.com/photo-1555820585-c5ae44394b79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=425&q=80" alt="" />
            <img src="https://plus.unsplash.com/premium_photo-1678216312448-9b53a5e7be46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
            <img src="https://images.unsplash.com/photo-1675159364623-6938e10245f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwYSUyMGZ1bGwlMjBib2R5fGVufDB8fDB8fHww&auto=format&fit=crop&w=387&q=80" alt="" />

              <img src="" alt="" />
      </div>
    </div>
    </>
  )
}

export default Pricelist
