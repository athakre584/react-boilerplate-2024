import TableSample from '@modules/samples/tableSample'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <>
    <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/table">Table Sample</Link>
          </li>
          <li>
            <Link to="/form">Form Sample</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
