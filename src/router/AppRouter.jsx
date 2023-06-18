import { Route, Routes } from "react-router-dom";
import { HomePage, PortfolioPage, ContactPage, AboutPage, ProyectPage, UploadPage, LoginPage} from "../pages";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";
import { useProjectStore } from "../hooks/useProjectStore";

export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();
  const { startGettingProjects } = useProjectStore();

  useEffect(() => {
    checkAuthToken();
    startGettingProjects();
  }, [])
  

  if( status === 'checking'){
    return (
      <h3>Cargando...</h3>
    )
  }

  return (
    
    <Routes>
      {
        (status === 'not-authenticated')
          ?(
            <>
              <Route path="/" element={ <HomePage/> } />
              <Route path="/portfolio" element={ <PortfolioPage/> } />
              <Route path="/about" element={ <AboutPage/> } />
              <Route path="/contact" element={ <ContactPage/> } />
              <Route path="/project/:title" element={ <ProyectPage/> } />
              
              <Route path="/login" element={ <LoginPage/> } />
              
              <Route path="/*" element={ <HomePage/> } />
            </>
          )
          :(
            <>
              <Route path="/" element={ <HomePage/> } />
              <Route path="/portfolio" element={ <PortfolioPage/> } />
              <Route path="/about" element={ <AboutPage/> } />
              <Route path="/contact" element={ <ContactPage/> } />
              <Route path="/project/:title" element={ <ProyectPage/> } />
      
              <Route path="/upload" element={ <UploadPage/> } />
      
              <Route path="/*" element={ <HomePage/> } />
            </>
          )
      }
    </Routes>

  )
}
