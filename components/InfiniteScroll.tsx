import {useEffect, useState, useRef} from 'react'
import ReactList from 'react-list';

const items = Array.from({length: 100}, (_, k) => String(k))

type Props = {
  onScroll: (start: number, end: number) => void
}

InfiniteScroll.defaultProps = {
  onScroll: (x: number, y: number) => console.log(x, y)
}

export default function InfiniteScroll(props: Props) {
  const { onScroll } = props;
  const [ index, setIndex ] = useState(0);
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      const el = ref.current as any
      el.scrollTo(index)
    }
  }, [index]);
  return (
    <>
      <input type="number" onChange={(e) => setIndex(Number(e.target.value))} />
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
          initialIndex={index}
          length={items.length}
          itemRenderer={(index: number, key: string) => (
            <div key={key} >
              {items[index]}
            </div>
          )}
        />
      </div>
    </>
  )
}
