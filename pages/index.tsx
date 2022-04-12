import type { NextPage } from 'next'
import {useState} from 'react';
import InfiniteScroll from '../components/InfiniteScroll';

const Home: NextPage = () => {
  const [ scrollTo, setScrollTo ] = useState(0);
  const [ saved, save ] = useState(0);
  const [ visibleList, setVisibleList] = useState(true);

  const hideList = () => {
    setVisibleList(false)
  }
  const showList = () => {
    setVisibleList(true)
    setScrollTo(saved)
  }

  const button =
    visibleList
      ? <button onClick={hideList}>Hide</button>
      : <button onClick={showList}>Show</button>

  return (
    <div style={{
      display: 'flex',
      gap: '100px',
      marginLeft: '30vw',
      alignItems: 'center',
      height: '100vh',
    }}>
      <div>
        {button}
        <p>{`lastScroll: ${scrollTo}`}</p>
        <p>{`savedPosition: ${saved}`}</p>
      </div>
      { visibleList
        ? (
          <InfiniteScroll
            scrollToIndex={scrollTo}
            onScroll={(s, _) => save(s)}
          />
        ) : null
      }
    </div>
  )
}

export default Home
