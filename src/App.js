import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";
import LayoutComponetn from "./Component/LayoutComponet/LayoutComponetn";

function App() {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPosts(data);
  //     });
  // }, []);

  return (
    // <div className="ex1">
    //   {posts?.map((pd) => (
    //     <div className="compo">
    //       <div> {pd.userId} </div>

    //       <div>{pd.title}</div>
    //     </div>
    //   ))}
    // </div>

    <div >
      <LayoutComponetn></LayoutComponetn>
    </div>
  );
}

export default App;
