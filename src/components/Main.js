import Comments from "./Comment";
import { Data } from "../data/data";
import { useState } from "react";

function Main({jsonData}) {

    if(jsonData.hasReplies === false){
        // console.log("false", jsonData);
        return (
        <Comments key={jsonData.id} data={jsonData}/>
  )
}
return <div className="Main">
    <Comments key={jsonData.id} data={jsonData}/>
    <div style={{marginLeft: '2rem'}}>
    {jsonData.replies.map((d) =>{
        // console.log(d);
        return <Main key={jsonData.id} jsonData={d}/>
    })}
    </div>
</div>
}
export default Main;