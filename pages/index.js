import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import styles from '../styles/Home.module.css'

export default function Home() {

  const handleOnBtnClick = () => {
    console.log('hi')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseuir</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View Stores Nearby" handleOnClick={handleOnBtnClick}/>

      </main>
    </div>
  )
}
