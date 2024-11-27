import { NavigationBar } from "../../../shared/ui/NavigationBar/index";


export const HomePage = ({ extraClasses = [], extraAttrs = [] } = {}) => {
  // const store = new StoreService("activePanel");

  return (
    <div className="homePage">
      <NavigationBar />
    </div> 
  );
}
