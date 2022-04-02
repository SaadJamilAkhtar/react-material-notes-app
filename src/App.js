import "./styles/style.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import NotFound from "./pages/NotFound";
function App() {
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Routes>
                        <Route path={'/'} element={<Notes/>}/>
                        <Route path={'/add'} element={<Create/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
