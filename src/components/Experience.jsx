import React from 'react'
import { TiTick } from 'react-icons/ti';
import './Experience.css';

const Experience = () => {
  return (
    <div id="experience">
      <h2>
        Experience
      </h2>
      <div className='experience_content'>
        <article className="card">
          <TiTick />
          <h4>
            HTML
          </h4>
          <small>
            Proficient
          </small>
        </article><article className="card"><TiTick />
          <h4>
            CSS
          </h4>
          <small>
            Skilled
          </small>
        </article><article className="card"><TiTick />
          <h4>
            JS
          </h4>
          <small>
            Skilled
          </small>
        </article><article className="card"><TiTick />
          <h4>
            React
          </h4>
          <small>
            Skilled
          </small>
        </article><article className="card"><TiTick />
          <h4>
            NodeJS
          </h4>
          <small>
            Beginner
          </small>
        </article><article className="card"><TiTick />
          <h4>
            C++
          </h4>
          <small>
            Advanced
          </small>
        </article><article className="card"><TiTick />
          <h4>
            DSA
          </h4>
          <small>
            Skilled
          </small>
        </article>
      </div>
    </div>
  )
}

export default Experience