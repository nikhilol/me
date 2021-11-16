import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {SocialIcon} from 'react-social-icons'
import pic from '../public/pp.jpg' 

export default function Home() {
  return (
    <>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
        </style>
      </head>
      <div className={styles.container}>
        <div className={styles.verticalContainer}>
          <div className={styles.glass}>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', alignSelf:'center'}}>
              <Image src='/pp.jpg' width='75px' height='75px'></Image>
              <div style={{display:'flex', flexDirection:'column', margin:'3vh'}}>
                <h2 style={{padding:'0', margin:'0vh 0vh', color:'rgba(255, 255, 255, 0.699)', lineHeight:'2'}}>Hey! I'm Nikhil</h2>
                <h2 style={{padding:'0', margin:'0'}}> 👽 🤖 🚀</h2>
              </div>
            </div>
          </div>
          <div style={{backgroundColor:'rgba(255, 59, 0, 0.2) !important',borderBottom: '2px solid #FF3B00', flexDirection:'row', justifyContent:'space-around'}} className={styles.glass}>
            <SocialIcon url="https://github.com/nikhilol" bgColor='#FF3B00' fgColor='#FFFFFF' style={{maxHeight:'4vh', maxWidth:'4vh'}}></SocialIcon>
            <SocialIcon url="https://twitter.com/Niikhiil_P" bgColor='#FF3B00' fgColor='#FFFFFF' style={{maxHeight:'4vh', maxWidth:'4vh'}}></SocialIcon>
            <SocialIcon url="mailto:nikhil.patel.np@outlook.com" bgColor='#FF3B00' fgColor='#FFFFFF'style={{maxHeight:'4vh', maxWidth:'4vh'}}></SocialIcon>
            <SocialIcon url="https://www.linkedin.com/in/nikhi1patel" bgColor='#FF3B00' fgColor='#FFFFFF' style={{maxHeight:'4vh', maxWidth:'4vh'}}></SocialIcon>
          </div>
          <div className={styles.glass}>
            <h2 className={styles.Title} style={{marginBottom:'1vh'}}>About</h2>
            <p>Nikhil is a full stack developer based in the UK. He is passionate about design, crafting software and anything digital.<br></br><br></br>He studied engineering at university and has persued a career in software. This was due to his love of building and software made this accessible.</p>
          </div>
          <div className={styles.glass}>
            <h2 className={styles.Title} style={{marginBottom:'1vh'}}>Bio</h2>
            <ul style={{width:'100%', margin:0, padding:'2vh', color:'#FF3B00', marginTop:'2vh'}}>
              <li>
                <p style={{display:'flex', justifyContent:'space-between',margin:0}}>
                  <p>Entered University</p>
                  <p style={{color:'#FF3B00', fontWeight:'bolder'}}>2017</p>
                </p>
              </li>
              <li>
                <p style={{display:'flex', justifyContent:'space-between',margin:0}}>
                  <p>Developer Internship</p>
                  <p style={{color:'#FF3B00', fontWeight:'bolder'}}>2019/20</p>
                </p>
              </li>
              <li>
                <p style={{display:'flex', justifyContent:'space-between',margin:0}}>
                  <p>Graduated University</p>
                  <p style={{color:'#FF3B00', fontWeight:'bolder'}}>2021</p>
                </p>
              </li>
              <li>
                <p style={{display:'flex', justifyContent:'space-between',margin:0}}>
                  <p>Started developer position</p>
                  <p style={{color:'#FF3B00', fontWeight:'bolder'}}>2021</p>
                </p>
              </li>
            </ul>
          </div>
          <h2 style={{backgroundColor:'rgba(255, 59, 0, 0.2) !important',borderBottom: '2px solid #FF3B00', color:'#FF3B00', fontWeight:'bolder'}} className={styles.glass}>Recent Projects</h2>
          <div style={{height:'25vh'}} className={styles.product}></div>
          <div style={{height:'25vh'}} className={styles.product}></div>
          <div style={{height:'25vh'}} className={styles.product}></div>
          <div style={{height:'25vh'}} className={styles.product}></div>
        </div>
      </div>
    </>
  )
}
