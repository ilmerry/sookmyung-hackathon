import React from "react";
import Progressbar from "./Progressbar";
import SelectLang from "./SelectLang";
import SelectNum from "./SelectNum";
import SelectAbout from "./SelectAbout";

const backgroundStyle = {
        backgroundImage: 'url(/images/selectLangBackground.png)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh"
}

function SelectPage(){
    return (
        <div style={backgroundStyle}>
            <Progressbar />
            <SelectNum />
        </div>
    );
}

export default SelectPage;