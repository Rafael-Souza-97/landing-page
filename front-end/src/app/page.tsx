import Image from 'next/image';
import Logo from '../assets/howhow-logo.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Transformando <span className='font-bold text-primary'>conteúdos</span> em negócios</h1>
      </div>
    </main>
  )
}
