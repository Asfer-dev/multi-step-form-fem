import { useState } from "react";
import SideNav from "./SideNav";
import Form from "./Form";

function App() {

    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="form-container">
            <SideNav activeTab={activeTab} setActiveTab={setActiveTab} />
            <Form  activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    )
}

export default App;