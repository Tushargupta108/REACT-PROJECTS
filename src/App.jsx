import { useState } from 'react'
import Sec1 from './components/page1/Sec1.jsx'
import Sec2 from './components/page2/Sec2.jsx'

function App() {
  const [count, setCount] = useState(0)
  const cards = [
    {
         img: 'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
         intro: '',
         tag: 'Satisfied',
         no:'1'
    },
    {
      img: 'https://images.unsplash.com/photo-1661983229178-0cbc8090aa71?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      tag: 'Underserved',
       no:'2'
    },
    { 
      img: 'https://plus.unsplash.com/premium_photo-1661775401262-915aa25e9f44?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      tag: 'Underbanked', 
       no:'3'
    }
  ];

  return (
    <div>
      <Sec1 cards={cards} />
      <Sec2 />
    </div>
  );
}

export default App;