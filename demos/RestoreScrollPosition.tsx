import { useCallback, useEffect, useState } from 'react';
import ReactList from 'react-list';
import InfiniteScroll from '../components/InfiniteScroll';


export default function RestoreScrollPosition() {
  const [ visibleList, setVisibleList] = useState(true);
  const [ reactList, setReactList] = useState<ReactList | null>(null);
  const [ initialIndex, saveListIndex] = useState<number>(0);
  const saveRef = useCallback((ref: ReactList | null) => {
    console.log('ref', ref)
    setReactList(ref)
  }, [setReactList])

  const scrollTo = (index: number) => {
    reactList?.scrollTo(index);
  }

  const hideList = () => {
    if (reactList) {
      const [start, _] = reactList.getVisibleRange();
      saveListIndex(start);
    }
    setVisibleList(false)
  }

  const showList = () => {
    setVisibleList(true)
  }

  useEffect(() => {
    function scrollUntilDone() {
      window.requestAnimationFrame(() => {
        if (reactList) {
          const [ start, end ] = reactList.getVisibleRange()
          if (start !== initialIndex) {
            reactList.scrollTo(initialIndex)
            scrollUntilDone()
          }
        }
      })
    }
    scrollUntilDone()
  }, [reactList])

  const toggleListButton =
    visibleList
      ? <button onClick={hideList}>Hide List</button>
      : <button onClick={showList}>Show List</button>

  const scrollToTopButton =
    <button onClick={() => scrollTo(0)}>
      Scroll To Top
    </button>


  return (
    <>
      {toggleListButton}
      {scrollToTopButton}
      { visibleList
      ?
        <InfiniteScroll
        initialIndex={initialIndex}
        ref={saveRef}
        />
      : null
      }
    </>
  )
}
