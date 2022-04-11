import type { NextPage } from 'next'
import InfiniteScroll from '../components/InfiniteScroll';

const Home: NextPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <InfiniteScroll />
    </div>
  )
}

export default Home
