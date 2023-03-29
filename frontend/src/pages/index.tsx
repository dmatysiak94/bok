
import { Inter } from 'next/font/google'
import StartingPage from "@/component/StartingPage";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <StartingPage/>
  )
}
