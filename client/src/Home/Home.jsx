import React from 'react'
import "./home.css"
// import Mainlayout from '../componenets/Mainlayout/Mainlayout'
// import ProfileSide from '../componenets/profileSide/ProfileSide'
import Posts from '../componenets/posts/Posts'
import Mainlayout from '../componenets/Mainlayout/Mainlayout'

const Home = () => {
  return (
    <div className='Home'>
      <Mainlayout />
        <section className='main-container'>
      <div className='inner-container'>

        <div className='left-section'>
            {/* <Story/> */}
            {/* {
              posts && posts.length > 0
              ?
              posts.map((post,index)=>
              <Posts key={index} post={post} currentUser={currentUser} />
              )
              :
              <h2>Loading</h2>
            } */}
         <Posts />
            
        </div>
        <div className='right-section'>
            {/* <Suggestion/> */}
        </div>
      </div>
      
    </section>
    </div>
  )
}

export default Home