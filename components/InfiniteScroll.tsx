import {forwardRef, useState} from 'react'
import type { Ref } from 'react'
import ReactList from 'react-list';

type Props = {
  initialIndex: number,
}


const InfiniteScroll = forwardRef((props: Props, ref: Ref<ReactList>) => {
  const { initialIndex } = props;
  const [ length, setLength ] = useState(10);
  return (
    <div
      style={{
        width: '100px',
        overflowY: 'scroll',
        maxHeight: '50vh',
        border: '1px solid black',
      }}
    >
      <ReactList
        ref={ref}
        type="variable"
        length={length}
        initialIndex={initialIndex}
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
})

export default InfiniteScroll
