
import styles from '../style';
import { invest } from '../assets';
import GetStarted from './GetStarted';

const Main = () => (
  
    <section id='home' className= {`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} ${styles.padding} flex-col xl:px-0 sm:px-16 px-6`}>
        
        
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex1 flex-row font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]'>
            The Next <br className='sm:block hidden' />{''}
            
            <span className='text-cyan-500'>Generation</span>{''}
            
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
              <GetStarted/>
             </div>
             
          
        </div>
        
         
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading[75px] w-full'>Investing Method.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.We examine annual percentage rates, annual fees.</p>
        
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <div className={`flex-1 ${styles.flexStart}  flex-col xl:px-0 sm:px-16 px-6`}>
      <img src={invest} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>
        
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 white__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 pink__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>


      </div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>

    </section>

    
  
)

export default Main