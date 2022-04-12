import {useEffect, useLayoutEffect, useRef, useState} from 'react'
import ReactList from 'react-list';

type Props = {
  onScroll: (start: number, end: number) => void
  scrollToIndex: number,
  changeToScroll?: string,
}

InfiniteScroll.defaultProps = {
  onScroll: (x: number, y: number) => console.log(x, y),
  scrollToIndex: 0,
}

export default function InfiniteScroll(props: Props) {
  const { onScroll, scrollToIndex, changeToScroll } = props;
  const [ length, setLength ] = useState(10);
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      const list = (ref.current as any)
      window.requestAnimationFrame(() => {
        list.scrollTo(scrollToIndex)
        console.log('scroll to:', scrollToIndex)
      })
    }
  }, [changeToScroll]);
  return (
    <div
      style={{
        width: '100px',
        overflowY: 'scroll',
        maxHeight: '50vh',
        border: '1px solid black',
      }}
      onWheel={() => {
        if (ref.current) {
          const el = ref.current as any
          const [start, end] = el.getVisibleRange()
          onScroll(start, end)
        }
      }}
    >
      <ReactList
        ref={ref}
        type="variable"
        length={length}
        initialIndex={scrollToIndex}
        itemRenderer={(index: number, key: string | number) => {
          if (index >= length / 2) {
            setLength(l => 2*l);
          }
          return (
            <div key={key} >
              {index}
            </div>
          )
        }}
      />
    </div>
  )
}
