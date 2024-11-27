import './App.scss';
import { IndexPage } from './pages';
import { StoreService } from './shared/lib/services/storeService';
import { NavigationBar } from './shared/ui/NavigationBar/index';

function App() {
  const store = new StoreService("activePanel");
  
  store.updateStore("setActivePanel", "category");

  console.debug(store.getActivePanel())

  return (
    <>
      {/* <IndexPage /> */}
      <NavigationBar />
    </>
  );
}

export default App;
