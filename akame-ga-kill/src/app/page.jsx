import { MainInfos } from './components/MainInfos'
import { Sinopse } from './components/Sinopse'
import { Divisoria } from './components/divisória'
import { Personagens } from './components/Personagens'
import { Divisoria2 } from './components/divisória2'

export default function Home() {
  return (
    <>
      <MainInfos/>
      <Sinopse/>
      <Divisoria/>
      <Personagens/>
      <Divisoria2/>
    </>
  )
}
