import Navbar from "./component/Navbar";
import SearchBar from "./component/SearchBar";
import CreateAd from "./component/modals/CreateAd";
import CreateCom from "./component/modals/CreateCom";


function App() {
  return (
    <div className="w-full ">
      <Navbar />
      <SearchBar />
      {/* <CreateAd/> */}
      <CreateCom/>
    </div>
  );
}

export default App;
