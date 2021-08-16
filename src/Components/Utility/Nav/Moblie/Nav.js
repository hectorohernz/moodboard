import React from 'react'

function Nav() {
  // Declare a new state variable, which we'll call "count"
  return (
    <header className="flex justify-around my-5	items-center		">
      <h1 className="font-medium	text-3xl">Mood Board</h1>
      <nav>
        <ul className="flex">
          <li className="mr-2"> Login</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
