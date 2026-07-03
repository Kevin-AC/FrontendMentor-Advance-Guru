import Sidebard from "./components/Sidebard"
import Overview from "./pages/Overview"

function App() {

  return (
    <main className="w-full h-screen flex font-public-sans bg-bg overflow-hidden">
      <Sidebard />
      <section className="flex-1 h-full px-200 py-300 sm:px-500 sm:py-400 overflow-y-auto">
        <Overview />
      </section>
     
    </main>
  )
}

export default App
