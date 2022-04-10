import React from "react";

import "./Home.css";

function Home() {
  return (
    <>
      <div className='home-container'>
        <section className='hero-section'>
          <h1 className='hero-title'>
            Welcome to <span>The Beacon</span>
          </h1>
        </section>
        <section className='home-content'>
          <h4 className='title'>Our Mission</h4>
          <p className='desc'>
            As we worship God, we will reach the unreached, mend the wounded, teach believers, and send Christ-like
            servants into the world.
          </p>
        </section>
        <section className='home-content'>
          <h4 className='title'>Our Vision</h4>
          <p className='desc'>
            To be a growing community that seeks to reflect God's glory and see lives transformed by the Holy Spirit
            through the gospel of Jesus Christ.
          </p>
        </section>
      </div>
    </>
  );
}

export default Home;
