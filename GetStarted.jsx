import styles from '../style';
//import { arrowUp } from '../assets';

const GetStarted = () => (
    <div className={`${styles.flexCenter}  w-[140px] h-[140px] rounded-full bg-black-gradient p-[2px] cursor-pointer `}>
      <div className={`${styles.flexCenter}  w-[100%] h-[100%] rounded-full bg-primary`}>
      <div className={`${styles.flexStart} flex-col`}> 
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-1'>
            <span className='text-black'>Get</span>
           
          </p>
         
          
        </div>
        
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
             <span 
              className='text-black'>Started</span>
          </p>
        </div>
        

      </div>

    </div>
  )


export default GetStarted