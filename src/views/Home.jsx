import React from 'react'
import { Hero } from '../cmps/Hero'
import { Nav } from '../cmps/Nav'

export function Home() {


  return (
    <section className="home padding-x-30">
      <div>
      <Nav />
      <Hero />
      </div>
    </section>
  )
}