import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import { Header } from '../components';
import { board } from '../data/dummy';


const Kanban = () => {
  return (
    <div>
      <Header category="App" title="Kanban" />
      <Board initialBoard={board} />
    </div>
  )
}

export default Kanban