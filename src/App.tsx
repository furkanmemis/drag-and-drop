import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { StyleItem } from "./Models/StyleItem";
import { useState } from "react";

function App() {
  const [styleList, setStyleList] = useState<StyleItem[]>([]);
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Navbar list={styleList} />
        <Router>
          <Routes>
            <Route path="/" element={<Main onChangeList={(list)=>{setStyleList(list)}} />} />
          </Routes>
        </Router>
      </div>
    </DndProvider>
  );
}

export default App;
