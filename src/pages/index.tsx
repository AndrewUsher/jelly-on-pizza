import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className="w-full h-screen py-12 md:py-24 lg:py-32 flex items-center justify-center bg-gradient-to-r from-orange-500 to-purple-500">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
            Jelly is great on pizza!
          </h2>
        </div>
      </div>
    </section>
  )
}
