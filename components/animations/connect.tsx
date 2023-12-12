'use client'
import { useLottie } from 'lottie-react';
import connect from '../looties/world.json';
const Connect = () => {
  const options = {
    animationData: connect,
    loop: true,
    style:{height: 180 }
  };

  const { View } = useLottie(options);
  return (<>
   {View}
   </>
  )
}

export default Connect