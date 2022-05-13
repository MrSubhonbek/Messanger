import { Header } from './components/Header';
import { Sitebar } from './components/sitebar/Sitebar';
import st from './styles/App.module.scss'


export function App() {
  return (
    <div className={st.app}>
      <div className={st.container}>
        <Header/>
        <Sitebar/>
      </div>
    </div>
  );
}
