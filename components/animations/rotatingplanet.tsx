'use client'
import { useLottie } from 'lottie-react';
import planet from '../looties/rotationPlanet.json';
const World = () => {
  const options = {
    animationData: planet,
    loop: true,
    style:{height: 180 }
  };

  const { View } = useLottie(options);
  return (<>
   {View}
   </>
  )
}

export default World