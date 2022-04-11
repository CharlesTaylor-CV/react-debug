import {useEffect, useState, useRef} from 'react'
import ReactList from 'react-list';

type Props = {
  items: Array<string>
}

InfiniteScroll.defaultProps = {
  items: Array.from({length: 100}, (_, k) => String(k)),
}

export default function InfiniteScroll(props: Props) {
  const { items } = props;
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
        }}
      >
        <ReactList
          ref={ref}
          type="variable"
          initialIndex={index}
          length={items.length}
          itemRenderer={(index: number, key: string) => (
            <div
              key={key}
            >
              {items[index]}
            </div>
          )}
        />
      </div>
    </>
  )
}
