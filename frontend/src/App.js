import { GlobalState, initialState, reducer } from "./middlewares/global-states";
import { useReducer } from "react";

import Navbar from "./component/Navbar";
import SearchBar from "./component/SearchBar";
import CreateAd from "./component/modals/CreateAd";
import CreateCom from "./component/modals/CreateCom";



function App() {
  const [data, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalState.Provider value={{ data: data, dispatch: dispatch }} >
      <div className="w-full ">
        <Navbar />
        <SearchBar />
        {data.currentModal &&
          data.currentModal === "Ad" ?
          <CreateAd /> :
          data.currentModal === "Company" ?
            <CreateCom /> :
            null
        }
      </div>
    </GlobalState.Provider>
  );
}

export default App;
