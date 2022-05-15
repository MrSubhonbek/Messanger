import { Header } from './components/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import st from './styles/App.module.scss'


export function App() {
  return (
    <div className={st.app}>
      <div className={st.container}>
        <Header/>
        <Sidebar/>
      </div>
    </div>
  );
}
