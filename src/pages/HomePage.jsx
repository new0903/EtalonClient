import { StoreService } from "../shared/lib/services/storeService";
import { NavigationBar } from "../shared/ui/NavigationBar/index";


export const HomePage = () => {
  // const store = new StoreService("activePanel");

  return (
    <div className="homePage">
      <NavigationBar />
    </div> 
  );
}
