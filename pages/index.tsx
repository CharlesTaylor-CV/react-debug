import type { NextPage } from 'next'
import {useState} from 'react';
import InfiniteScroll from '../components/InfiniteScroll';
import { v4 as uuid} from 'uuid';


const Home: NextPage = () => {
  const [ scrollActionIndex, setScrollActionIndex ] = useState(0);
  const [ scrollActionId, setScrollActionId] = useState('');

  const [ visibleList, setVisibleList] = useState(true);

  const scrollTo = (index: number) => {
    setScrollActionIndex(index)
    setScrollActionId(uuid())
  }

  const hideList = () => {
    setVisibleList(false)
  }

  const showList = () => {
    setVisibleList(true)
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
      marginLeft: '20vw',
      alignItems: 'center',
      height: '100vh',
    }}>
      <div>
        {toggleListButton}
        {scrollToTopButton}
        <p>{`scrollActionIndex: ${scrollActionIndex}`}</p>
        <p>{`scrollActionId: ${scrollActionId}`}</p>
      </div>
      <div style={{ display: visibleList ? 'block' : 'none' }}>
        <InfiniteScroll
          scrollToIndex={scrollActionIndex}
          changeToScroll={scrollActionId}
        />
      </div>
    </div>
  )
}

export default Home
