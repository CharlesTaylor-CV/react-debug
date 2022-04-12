import type { NextPage } from 'next'
import {useState} from 'react';
import InfiniteScroll from '../components/InfiniteScroll';
import { v4 as uuid} from 'uuid';


const Home: NextPage = () => {
  const [ scrollActionIndex, setScrollActionIndex ] = useState(0);
  const [ scrollActionId, setScrollActionId] = useState('');
  const [ savedScrollIndex, saveScrollIndex ] = useState(0);
  const [ visibleList, setVisibleList] = useState(true);

  const scrollTo = (index: number) => {
    setScrollActionIndex(index)
    setScrollActionId(uuid())
    saveScrollIndex(index)
  }

  const hideList = () => {
    setVisibleList(false)
  }

  const showList = () => {
    setVisibleList(true)
    scrollTo(savedScrollIndex)
  }

  const toggleListButton =
    visibleList
      ? <button onClick={hideList}>Hide List</button>
      : <button onClick={showList}>Show List</button>

  const scrollToTopButton =
    <button onClick={() => scrollTo(0)}>
      Scroll To Top
    </button>

  return (
    <div style={{
      display: 'flex',
      gap: '100px',
      marginLeft: '30vw',
      alignItems: 'center',
      height: '100vh',
    }}>
      <div>
        {toggleListButton}
        {scrollToTopButton}
        <p>{`scrollActionIndex: ${scrollActionIndex}`}</p>
        <p>{`scrollActionId: ${scrollActionId}`}</p>
        <p>{`savedScrollIndex: ${savedScrollIndex}`}</p>
      </div>
      { visibleList
        ? (
          <InfiniteScroll
            scrollToIndex={scrollActionIndex}
            changeToScroll={scrollActionId}
            onScroll={(s, _) => saveScrollIndex(s)}
          />
        ) : null
      }
    </div>
  )
}

export default Home
