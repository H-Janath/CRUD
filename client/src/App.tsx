import './App.css'
import Home from './Home'
import { cn } from './lib/utils'
// Inside src/index.tsx or src/App.tsx
import "@fontsource/plus-jakarta-sans"; // Defaults to weight 400
import "@fontsource/plus-jakarta-sans/300.css"; // Light weight
import "@fontsource/plus-jakarta-sans/500.css"; // Medium weight
import "@fontsource/plus-jakarta-sans/700.css"; // Bold weight


function App() {
 

  return (
    <>
    
    <div className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
        )}><Home/></div>
        
    </>
  )
}

export default App
