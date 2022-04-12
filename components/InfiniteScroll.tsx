import {useEffect, useLayoutEffect, useRef, useState} from 'react'
import ReactList from 'react-list';

type Props = {
  onScroll: (start: number, end: number) => void
  scrollToIndex: number,
}

InfiniteScroll.defaultProps = {
  onScroll: (x: number, y: number) => console.log(x, y),
  scrollToIndex: 0,
}

export default function InfiniteScroll(props: Props) {
  const { onScroll, scrollToIndex } = props;
  const [ length, setLength ] = useState(10);
  const ref = useRef();
  useLayoutEffect(() => {
    if (ref.current) {
      window.requestAnimationFrame(() => {
        (ref.current as any).scrollTo(scrollToIndex)
        console.log('scroll to:', scrollToIndex)
      })
    }
  }, [scrollToIndex]);
  return (
    <div
      style={{
        width: '100px',
        overflowY: 'scroll',
        maxHeight: '50vh',
        border: '1px solid black',
      }}
      onScroll={() => {
        if (ref.current) {
          const el = ref.current as any
          const range = el.getVisibleRange()
          onScroll(range[0], range[1])
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
