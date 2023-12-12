'use client'
import { useLottie } from 'lottie-react';
import nursing from '../looties/nurses.json';
const Nursing = () => {
  const options = {
    animationData: nursing,
    loop: true,
    style:{height: 180 }
  };

  const { View } = useLottie(options);
  return (<>
   {View}
   </>
  )
}

export default Nursing