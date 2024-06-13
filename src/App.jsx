import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Content from './components/Content'

export default function App() {
  return (
    <main className='w-full min-h-screen grid p-[1rem] grid-cols-[20%_auto] grid-rows-[3.2rem_auto]'>
      <Navbar />
      <Menu />
      <Content />
    </main>
  )
}
