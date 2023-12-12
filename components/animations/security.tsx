'use client'
import { useLottie } from 'lottie-react';
import security from '../looties/security.json';
const Security = () => {
  const options = {
    animationData: security,
    loop: true,
    style:{height: 180 }
  };

  const { View } = useLottie(options);
  return (<>
   {View}
   </>
  )
}

export default Security