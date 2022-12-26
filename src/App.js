import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Logos from './components/logos';
import { useEffect,useRef } from 'react';
import { usePageContext } from './context';
function App() {
  const {logo1ref} = usePageContext()
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry);
    },{
  root: null,
  rootMargin: '0px',
  threshold: 1.0
});
    observer.observe(logo1ref.current);
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
