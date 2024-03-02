import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <section>
        <nav>
            <button>resume</button>
        </nav>
        {children}
    </section>
  )
}
