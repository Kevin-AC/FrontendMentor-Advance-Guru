import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Sidebard from "./components/Sidebard"
import Transactions from "./pages/Transactions"
import Overview from './pages/Overview';
import Budgets from './components/Budgets';


function App() {

  return (
    <BrowserRouter>
      <main className="w-full h-screen flex flex-col lg:flex-row font-public-sans  bg-beige-100 lg:overflow-hidden ">
        <Sidebard />
        <section className="flex-1 h-full overflow-y-auto pb-28 lg:pb-0 ">
          <Routes>
            <Route path='/' element={<Overview/>}/>
            <Route path='/transactions' element={<Transactions/>}/>
            <Route path="/budgets" element={<Budgets />}/>
            {/*
            <Route path="/pots" element={<Pots />} />
            <Route path="/recurring-bills" element={<RecurringBills />} /> */}
            
          </Routes>
        </section>

      </main>
    
    </BrowserRouter>
    
  )
}

export default App
