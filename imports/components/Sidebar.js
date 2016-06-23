import React from 'react'

const Sidebar = () => (
  <div className="overlay" style={sidebar}>
    <h3>Sidebar</h3>
  </div>
)

let sidebar = {
  width: 200,
  position: 'absolute',
  top: 15, left: 15, bottom: 10,
}

export default Sidebar