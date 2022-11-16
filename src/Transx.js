import React from 'react'
import Map from "./transximg/map.png"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'
const transx = () => {
  return (
    
    <div className='transx-container'>
<div className="transx_content">



<div className="mytext">
<p className='tran'><h1>TransX</h1></p>
  </div>


<div className="animation_numbers">
<div className="cities">
      <div className="card_cities">
      <div className="number_cities">
      <CountUp  
  start={0}
  end={50}
  duration={2}
  separator=" "
  decimals={0}

  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
    <VisibilitySensor onChange={start}>
      <span ref={countUpRef} />
      </VisibilitySensor>
    </div>
  )}
</CountUp>
</div>

<div className="cities_years"> cities </div> 
<div className="world">Around the world</div>
      
      </div>
      </div>

      <div className="clients">
      <div className="card_clients">
      <div className="number_clients">
      <CountUp  
  start={0}
  end={50}
  duration={2}
  separator=" "
  decimals={0}

  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
    <VisibilitySensor onChange={start}>
      <span ref={countUpRef} />
      </VisibilitySensor>
    </div>
  )}
</CountUp>
</div>

<div className="happy"> million </div> 
<div className="happy_clients">Happy clients</div>
      
      </div>
      </div>

      <div className="millions">
      <div className="card_millions">
      <div className="number_millions">
      <CountUp  
  start={0}
  end={50}
  duration={2}
  separator=" "
  decimals={0}

  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
    <VisibilitySensor onChange={start}>
      <span ref={countUpRef} />
      </VisibilitySensor>
    </div>
  )}
</CountUp>
</div>

<div className="deliver"> million </div> 
<div className="week">Deliver goods every week</div>
      
      </div>
      </div>
      </div>
      
      </div>
    </div>

  )
}

export default transx