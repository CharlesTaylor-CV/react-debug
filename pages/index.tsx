import type { NextPage } from 'next'
import {useState} from 'react'
import { Range } from 'react-range';

const Home: NextPage = () => {
  const [visible, setVisibility] = useState(false);
  const [values, setValues] = useState([24, 50]);
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
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
    </div>
  )
}

export default Home
