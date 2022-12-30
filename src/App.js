import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Logos from './components/logos';
import { useEffect,useRef } from 'react';
import { usePageContext } from './context';
function App() {
  const {logo1ref,setclassName} = usePageContext()
  useEffect(() => {
    try {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if(entry.isIntersecting){
            setclassName("show")
            console.log("visible")
          }else{
            setclassName("remove")
            console.log("")
          }
        },
        {
          root: null,
          rootMargin: '10%',
          threshold: 0.4,
        }
      );
      observer.observe(logo1ref.current);
    } catch (error) {
      console.log(error)    }
  }, []);
  return (
    <div className='main-page'>
        <Header/>
        <Logos/>
        <Footer/>
    </div>
  );
}

export default App;
