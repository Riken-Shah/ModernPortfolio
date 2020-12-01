import React, { useEffect, useState } from 'react';
import { RellaxWrapper } from 'react-rellax-wrapper';
// Imgs
import img1 from '../Images/achivement1.jpg'
import img2 from '../Images/achivement2.jpg'
import img3 from '../Images/achivement3.jpg'
import img4 from '../Images/achivement4.jpg'

function Achievements() {
  const [isDesktop, setIsDesktop] = useState(true)
  const [opacity, setOpacity] = useState(0);
  const [active, setActive] = useState(true);
  const [inserting, setInserting] = useState(false)
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }, [])
  // Refresh the section to properly configured the section
  useEffect(() => {
    // console.log('Height Changed', active, inserting);
    if (!inserting) {
      if (active && document.querySelector('.achiviments-wrapper')) {
        setActive(false);
        setTimeout(() => { activate() }, 1);
      }
      else {
        activate()
      }
    }
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [document.getElementById('root').offsetHeight, isDesktop])
  const activate = () => {
    setInserting(true)
    setActive(true)
    setTimeout(() => setInserting(false), 100)
  }
  // To detect if device screen is small
  useEffect(() => {
    setActive(true)
    if (document.body.offsetWidth > 700) setIsDesktop(true)
    else setIsDesktop(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document.body.offsetWidth])

  const calcOpacity = (y) => {
    if (y > 0) {
      let value = (Math.abs(y) * .01) * .5;
      value = value < .3 ? 0 : value;
      return (value)
    }

    if (y < -(window.innerHeight * .2))
      return 1
    else {
      return (Math.abs(y) * .1) * .5
    }

  };
  return (
    <div className="achiviments-wrapper">
      {active ?
        <>
          <div className="hide" style={{ opacity: opacity - (isDesktop ? .2 : - 0) }} />
          <RellaxWrapper speed={isDesktop ? 2 : 1} callback={({ _, y }) => { /*console.log('Kk', y, '->', calcOpacity(y));*/ setOpacity(calcOpacity(y)) }} percentage={2} centered={false} style={{ zIndex: 1, position: 'absolute', top: `${isDesktop ? '-200px' : '150px'}`, left: '0px', visibility: 'hidden' }}>
            <div className="text" >My <br className="break" />Achievement</div>
          </RellaxWrapper>
          <div className="text" >My <br className="break" />Achievement</div>
          <div className="cols">
            <RellaxWrapper className="col" speed={isDesktop ? 10 : 1} center={false} percentage={isDesktop ? .6 : 0} style={{ zIndex: 0 }}>
              <div className="hide" style={{ opacity: opacity }} />
              <img src={img1} alt="Achivement 1" />
              <img src={img2} alt="Achivement 2" />
            </RellaxWrapper>
            <RellaxWrapper className="col" speed={isDesktop ? -40 : -1} center={false} percentage={isDesktop ? .3 : 1} style={{ zIndex: 2 }}>
              <div className="hide" style={{ opacity: opacity }} />
              <img src={img3} alt="Achivement 3" />
              <img src={img4} alt="Achivement 4" />
            </RellaxWrapper>
          </div>
        </>
        : <></>}</div >)
}

export default Achievements
