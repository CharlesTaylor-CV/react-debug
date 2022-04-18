import type { NextPage } from 'next'
import RestoreScrollPosition from '../demos/RestoreScrollPosition'

const Home: NextPage = function() {
  return (
    <div style={{
      display: 'flex',
      gap: '100px',
      marginLeft: '30vw',
      alignItems: 'center',
      height: '100vh',
    }}>
      <RestoreScrollPosition />
    </div>
  )
}

export default Home
