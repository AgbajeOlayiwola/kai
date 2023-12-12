'use client'
import { useLottie } from 'lottie-react';
import cleaning from '../looties/cleaning.json';
const Cleaning = () => {
  const options = {
    animationData: cleaning,
    loop: true,
    style:{height: 280 }
  };

  const { View } = useLottie(options);
  return (<>
   {View}
   </>
  )
}

export default Cleaning