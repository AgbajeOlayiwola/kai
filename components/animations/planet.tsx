'use client'
import { useLottie } from 'lottie-react';
import planet from '../looties/planet.json';
const Planet = () => {
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

export default Planet