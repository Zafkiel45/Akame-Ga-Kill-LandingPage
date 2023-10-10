import { MainInfos } from './components/MainInfos'
import { Sinopse } from './components/Sinopse'
import { Divisoria } from './components/divisória'
import { Personagens } from './components/Personagens'
import { Divisoria2 } from './components/divisória2'
import { Detalhes } from './components/detalhes'
import { Footer } from './components/footer'

export default function Home() {
  return (
    <div className='h-full w-screen'>
      <MainInfos/>
      <Sinopse/>
      <Divisoria/>
      <Personagens/>
      <Divisoria2/>
      <Detalhes/>
      <Footer/>/
    </div>
  )
}
