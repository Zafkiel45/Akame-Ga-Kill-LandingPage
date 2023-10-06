import Image from 'next/image'
import { Header } from './components/header'
import { MainInfos } from './components/MainInfos'

export default function Home() {
  return (
    <>
      <Header/>
      <MainInfos/>
    </>
  )
}
