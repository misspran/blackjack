import Image from 'next/image'
import { BlackJackTable } from './components/Table'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
          <BlackJackTable/>
        </div>
    </main>
  )
}
