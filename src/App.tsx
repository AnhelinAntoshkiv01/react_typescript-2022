import {FC} from "react";
import {CarForm, Cars} from "./components";

const App: FC = () => {
  return (
      <div>
        <CarForm/>
        <hr/>
        <Cars/>
      </div>
  )
}

export default App;
