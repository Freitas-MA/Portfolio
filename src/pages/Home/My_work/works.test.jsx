import React from 'react'

export default function Works() {
  return (
    <div className="project-container container">
      <div className="division"></div>
      <div className="content-text">
        <h2>Works</h2>
        <p>Check out some of my projects</p>
      </div>
      <React.Fragment>
        <article className="project">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://source.unsplash.com/random/?fruit" alt="A bowl of fruits" />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect Engineer</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://source.unsplash.com/random/?city" alt="A city skyline" />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect Engineer</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://source.unsplash.com/random/?bee" alt="A bee on a flower" />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect Engineer</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://source.unsplash.com/random/?bear" alt="A bear in the forest" />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect Engineer</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://source.unsplash.com/random/?car" alt="A red sports car" />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect Engineer</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://source.unsplash.com/random/?goku" alt="A cartoon character" />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect Engineer</p>
              </div>
            </div>
          </div>
        </article>
      </React.Fragment>
    </div>
  )
}