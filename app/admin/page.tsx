import Link from 'next/link'
import React from 'react'

type Props = {}

function AdminDashboard({}: Props) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      Only allowed if logged in
      <div>
        <Link href='/'>Home</Link>
      </div>
    </div>
  )
}

export default AdminDashboard
