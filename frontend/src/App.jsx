import React from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default function App() {
  <>
  {/*Main Content - Graph*/}
  <h2 className="title">Application List</h2>
  <div className="parent">
    <div className="div1"><b>Application</b></div>
    <div className="div2"><b>Status</b></div>
    <div className="div3"><b>Action</b></div>
    <div className="div4"><b>Last Run</b></div>
    <div className="div5"><b>Risk</b></div>
    
    <div className="div6">App Name</div>
    <div className="div7">Allowed</div>
    <div className="div8">
      <button className="allow">Allow</button>
      <button className="block">Block</button>
    </div>
    <div className="div9">Today 1:23pm</div>
    <div className="div10">
      <button className="risk" style={{ backgroundColor: "#0ded19" }}>Low</button>
    </div>
    <div className="div11">App Name</div>
    <div className="div12">Blocked</div>
    <div className="div13">
      <button className="allow">Allow</button>
      <button className="block">Block</button>
    </div>
    <div className="div14">Yesterday 11:20am</div>
    <div className="div15">
      <button className="risk" style={{ backgroundColor: "#FFA70F" }}>Medium</button>
    </div>
    <div className="div16">App Name</div>
    <div className="div17">Pending</div>
    <div className="div18">
      <button className="allow">Allow</button>
      <button className="block">Block</button>
    </div>
    <div className="div19">Today 5:25pm</div>
    <div className="div20">
      <button className="risk" style={{ backgroundColor: "#FF0004" }}>High</button>
    </div>
    <div className="div21">App Name</div>
    <div className="div22">Allowed</div>
    <div className="div23">
      <button className="allow">Allow</button>
      <button className="block">Block</button>
    </div>
    <div className="div24">Yesterday 12:26pm</div>
    <div className="div25">
      <button className="risk" style={{ backgroundColor: "#0ded19cd" }}>Low</button>
    </div>
    <div className="div26">App Name</div>
    <div className="div27">Pending</div>
    <div className="div28">
      <button className="allow">Allow</button>
      <button className="block">Block</button>
    </div>    
    <div className="div29">Today 6:58pm</div>
    <div className="div10">
      <button className="risk" style={{ backgroundColor: "#FFA70F" }}>Medium</button>
    </div>
</div>

{/*Event Log*/}

    <div className="event-log-container">
      {/* Container Header */}
      <div className="log-header">
        <h3>Event Log</h3>
        <span className="more-options">...</span>
      </div>

      {/* Navigation Tabs */}
      <div className="log-tabs">
        <button className="tab active">Events</button>
        <button className="tab">Access Requests</button>
      </div>

      {/* Main List Area */}
      <div className="log-list">
        {/* Individual Log Entry */}
        <div className="log-item">
          <span className="log-time">10:35 AM</span>
          <p className="log-content">
            <strong>/*Blocked:</strong> Unauthorized App on Endpoint-03
          </p>
        </div>

        <div className="log-item">
          <span className="log-time">10:32 AM</span>
          <p className="log-content">
            <strong>Allowed:</strong> Notepad.exe launched on Endpoint-01
          </p>
        </div>

        <div className="log-item">
          <span className="log-time">10:29 AM</span>
          <p className="log-content">
            <strong>Policy Updated:</strong> Default Deny Rule Applied
          </p>
        </div>

        <div className="log-item">
          <span className="log-time">10:25 AM</span>
          <p className="log-content">
            <strong>Access Request:</strong> User John requested access to OBS Studio
          </p>
        </div>

        <div className="log-item">
          <span className="log-time">10:20 AM</span>
          <p className="log-content">
            <strong>Blocked:</strong> Chrome.exe attempted on Endpoint-02
          </p>
        </div>
      </div>

      {/* Footer Action Button */}
      <div className="log-footer">
        <button className="view-all-btn">View All Logs</button>
      </div>
    </div>
  </>
 
}
