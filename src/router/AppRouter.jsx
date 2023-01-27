import { Route, Routes } from "react-router-dom";
import { HomePage, PortfolioPage, ContactPage, AboutPage, ProyectPage} from "../pages";

export const AppRouter = () => {
  return (
    
    <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/portfolio" element={ <PortfolioPage/> } />
        <Route path="/about" element={ <AboutPage/> } />
        <Route path="/contact" element={ <ContactPage/> } />
        <Route path="/proyect/:name" element={ <ProyectPage/> } />

        <Route path="/*" element={ <HomePage/> } />
    </Routes>

  )
}
