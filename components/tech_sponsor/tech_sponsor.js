"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from './tech_sponsor.module.scss'

function getCurrentDimension() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

const TechSponsor = () => {
    const [screenSize, setScreenSize] = useState({ width: 560, height: 30 });
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);


        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize]);
    return (
        <div className={styles.sponsor}>
            <h1>Technical Sponsors</h1>
            <div className={styles.members}>
     <Image src={'sscs.png'} alt='IEEESSCS'
                    width={screenSize.width / 7} height={30} 
                />
     <h3>      </h3> 
     <Image src={'eds.png'} alt='IEEEEDS'
                    width={screenSize.width / 7} height={30} 
                />
     <h3>      </h3> 
     <Image src={'wielogo.jpg'} alt='IEEEWIE'
                    width={screenSize.width / 7} height={30} 
                />
     <h3>      </h3>  
    <Image src={'csi-logo.png'} alt='CSI'
                    width={screenSize.width / 7} height={30} 
                />
     <h3>      </h3>
      <Image src={'IETE.jpg'} alt='IETE'
                    width={screenSize.width / 7} height={30} 
                />
            
                {/* <h3>  </h3> */}
            </div>
        </div>
    )
}

export default TechSponsor
