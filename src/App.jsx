import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='flex flex-wrap '>
        <Card 
        image={'https://images.unsplash.com/photo-1532522750741-628fde798c73?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
        title={'THE REACT USER'}
        description={'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail , LikeButton , and Video . Then combine them into entire screens, pages, and apps.'}


        />

      <Card 
      image={'https://images.unsplash.com/photo-1511287381215-8c58b84f8896?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
      title={'Learning How To Code'}
      description={"Coding is the process of allowing humans to speak to computers. As computers only understand binary language — a series of zeros and ones — humans need to use a programming language as a translator of sorts."}
      />

      <Card />
      <Card />
      <Card />
      <Card />
      
        
    </div>
  )
}

export default App
