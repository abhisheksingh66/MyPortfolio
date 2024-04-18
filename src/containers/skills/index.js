
import { Line } from 'rc-progress'
import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageheaderContent from '../../components/pageHeaderContent'
import { skillsData } from './utils'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import './style.scss';


const Skills = () => {
  return (
    <section id='skills' className='skills'>
      <PageheaderContent
        headerText='My Skills'
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='skills__content-wrapper'>
        
        {
          skillsData.map((item, i) => (
            <div key={i} className='skills__content-wrapper__inner-content'>
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: 'translatex(-200px)'
                }}
                end={{
                  transform: 'translatex(0px)'
                }}

              >
                <h3 className='skills__content-wrapper__inner-content__category-text'>{item.label}</h3>
                <div className='skills__content-wrapper__inner-content__progressbar-container'>
                  {
                    item.data.map((skillItem, j) => (
                      <AnimateKeyframes
                      key={j}
                        play
                        duration={1}
                        keyframes={["opacity : 1", "opacity : 0"]}
                        iterationCount="1"

                      >
                        <div className='progressbar-wrapper' key={j}>
                          <h1>{skillItem.skillName} <p className='icon-show' > {skillItem.skil}</p></h1>
                          <Line
                            percent={skillItem.percentage}
                            strokeWidth="2"
                            strokeColor="var( --yellow-theme-main-color)"
                            trailWidth="2"
                            strokeLinecap="square"
                            >
                          </Line>
                          <div className='icon-show '>

                          <p className="rotate-frequently">

                            {/* {skillItem.skil} */}
                          </p>
                          </div>
                        </div>
                      </AnimateKeyframes>
                    ))
                  }
                </div>
              </Animate>
            </div>
          ))
        }
        
      </div>
    </section>
  )
}

export default Skills