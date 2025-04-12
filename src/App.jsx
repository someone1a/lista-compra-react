// Suggested code may be subject to a license. Learn more: ~LicenseLog:2091630140.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1451779728.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1313075030.
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ShoppingList from "./components/ShoppingList";
import ShareList from "./components/ShareList";
import CreateItem from "./components/CreateItem";
import UpdateItem from "./components/UpdateItem";
import DeleteItem from "./components/DeleteItem";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <h1>Lista de Compras</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Lista
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
                Agregar Lista
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/share" className="nav-link">
                Compartir
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ShoppingList />} />
          <Route path="/share" element={<ShareList />} />
          <Route path="/create" element={<CreateItem />} />
          <Route path="/update/:id" element={<UpdateItem />} />
          <Route path="/delete/:id" element={<DeleteItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;