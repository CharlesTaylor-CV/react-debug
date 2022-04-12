import type { NextPage } from 'next'
import {useState} from 'react';
import InfiniteScroll from '../components/InfiniteScroll';

const Home: NextPage = () => {
  const [ current, setCurrent ] = useState(0);
  const [ pending, setPending ] = useState(0);
  const [ visibleList, setVisibleList] = useState(true);

  const hideList = () => {
    setVisibleList(false)
  }
  const showList = () => {
    setVisibleList(true)
    setCurrent(pending)
  }

  return (
    <div style={{
      display: 'flex',
      gap: '100px',
      marginLeft: '30vw',
      alignItems: 'center',
      height: '100vh',
    }}>

      <input type="number" onChange={(e) => setCurrent(Number(e.target.value))} />
      { visibleList
        ? <button onClick={hideList}>Hide</button>
        : <button onClick={showList}>Show</button>
      }
      { visibleList
        ? (
          <InfiniteScroll
            scrollToIndex={current}
            onScroll={(s, _) => setPending(s)}
          />
        ) : null
      }
    </div>
  )
}

export default Home
