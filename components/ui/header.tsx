"use client"

import React from 'react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-9">
      <nav className="flex items-center px-6 py-3">
        <Link 
          href="/" 
          className="text-white text-lg  font-bold hover:text-gray-300 transition-colors duration-200 mr-32"
        >
          mustafa enes öztürk
        </Link>
        <div className="flex items-center space-x-8">
                    <Link 
            href="/" 
            className="text-white/90 text-base hover:text-white transition-colors duration-200"
          >
            about
          </Link>
        <Link 
          href="/projects" 
          className="text-white/90 text-base hover:text-white transition-colors duration-200"
        >
          projects
        </Link>
          <Link 
            href="/writing" 
            className="text-white/90 text-base hover:text-white transition-colors duration-200"
          >
            blog
          </Link>
        </div>
      </nav>
    </header>
  )
} 