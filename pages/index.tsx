import type { NextPage } from 'next'
import ReactRange from '../components/ReactRange';

const Home: NextPage = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <ReactRange />
    </div>
  )
}

export default Home
