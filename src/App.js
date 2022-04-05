import "./styles/style.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import NotFound from "./pages/NotFound";
import {createTheme, ThemeProvider} from '@mui/material'
import {purple} from '@mui/material/colors'
import Layout from "./components/Layout";

const theme = createTheme({
    palette: {
        secondary: purple
    }

});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Layout>
                    <div className="App">
                        <div className="content">
                            <Routes>
                                <Route path={'/'} element={<Notes/>}/>
                                <Route path={'/add'} element={<Create/>}/>
                                <Route path={'*'} element={<NotFound/>}/>
                            </Routes>
                        </div>
                    </div>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;
