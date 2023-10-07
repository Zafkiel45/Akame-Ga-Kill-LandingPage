import Image from 'next/image'
import { MainInfos } from './components/MainInfos'
import { Sinopse } from './components/Sinopse'
import { Divisoria } from './components/divisória'

export default function Home() {
  return (
    <>
      <MainInfos/>
      <Sinopse/>
      <Divisoria/>
    </>
  )
}
