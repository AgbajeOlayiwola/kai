'use client'
import { useLottie } from 'lottie-react';
import nurse from '../looties/nurse.json';
const Nurse = () => {
  const options = {
    animationData: nurse,
    loop: true,
    style:{height: 280 }
  };

  const { View } = useLottie(options);
  return (<>
   {View}
   </>
  )
}

export default Nurse