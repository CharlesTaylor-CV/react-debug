import {useState} from 'react'
import { ReactList } from 'react-list';

type Props = {
}

ReactRange.defaultProps = {
}

export default function ReactRange(_props: Props) {
  const [visible, setVisibility] = useState(false);
  const [values, setValues] = useState([24, 50]);
  return (
    <>
      <button onClick={() => setVisibility(v => !v)}>
        Show/Hide
      </button>
      <div
        style={{visibility: visible ? 'visible' : 'hidden'}}
      >
        <Range
            values={values}
            onChange={setValues}
            min={0}
            max={100}
            step={1}
            renderTrack={(args) => {
              console.log("track", args)
              return (
                <div
                  {...args.props}
                  style={{
                    ...args.props.style,
                    height: '10px',
                    width: '300px',
                    borderRadius: '20px',
                    background: 'green',
                  }}
                >
                  {args.children}
                </div>
              )
            }}
            renderThumb={(args) => {
              console.log("thumb", args)
              return (
                <div
                  {...args.props}
                  style={{
                    ...args.props.style,
                    width: '10px',
                    height: '10px',
                    borderRadius: '10px',
                    background: 'blue',
                  }}
                />
              )
            }}
          />
      </div>
    </>
  )
}
