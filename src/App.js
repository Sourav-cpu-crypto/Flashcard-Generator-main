import Header from "./Components/Header/Header";
import store from "./state/reduxstore/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createcard from "./Components/CreateFlashCard/Createcard";
import All from "./Components/allgroups/All";
import Carddetails from "./Components/Carddetails/Carddetails";

function App() {
  // store.subscribe(() => {
  //   localStorage.setItem("card",JSON.stringify(store.getState().card ))
  //   console.log("appstore",store.getState() )
  // });
  store.subscribe(() => {
    console.log("getstate", store.getState());
  });

  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route exact path="/" element={<Createcard />} />
            <Route exact path="/allfcard" element={<All />} />
            <Route path="/groupdetails/:id" element={<Carddetails />} />
            <Route path="/groupdetails/:id/:id1" element={<Carddetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
