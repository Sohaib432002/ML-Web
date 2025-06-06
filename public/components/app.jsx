
import Header from "./header"
import Section_1 from './section_1'
import Section_2 from './section_2'
import Section_3 from './section_3'
import App1 from './app1'
import Footer from "./footer"
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
    const [data, setdata] = useState('')
    const [SelectApp, setSelectApp] = useState('')
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/image_input")
            .then(res => res.json())
            .then(data => setdata(data.message))
            .catch(err => console.log("Error: ", err));
    }, []);
    console.log(data)

    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/home" element={<Section_1 />} />
                    <Route path="/app" element={<Section_2 />} />
                    <Route path="/about" element={<Section_3 />} />
                    <Route path="/contact" element={<Section_3 />} />
                   <Route path="/app1" element={<App1/>} />
                    <Route path="/app/app2" element={<App1/>}/>
                </Routes>
                <Footer />
            </Router>
            
        </>
    )
}

