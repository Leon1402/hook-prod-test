import React from 'react';
import './App.css';

function App() {

  const [size, setSize] = React.useState(true);
  const ref = React.useRef(null)

  const handlerScrool = () => {
    if (ref.current.scrollTop >= 100) {
      setSize(false)
    }
    if (ref.current.scrollTop <= 10) {
      setSize(true)
    }
  }

  return (
    <div ref={ref} className='App' onScroll = {handlerScrool}>
      <header className={size ? 'header' : 'header header-active'}>
        wqeqweqwe
      </header>
      <div className='content'></div>
    </div>
  );
}

export default App;
