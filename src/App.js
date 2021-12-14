import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";
import { TASKS } from "./Component/DragAndDrop/Constants";
import TaskList from "./Component/DragAndDrop/TaskList";
// import LayoutComponetn from "./Component/LayoutComponet/LayoutComponetn";
// import From from "./Component/From/From";
// import Card from "./Component/Card/Card";
// import ExcelDataShowing from "./Component/ExcleDataShowing/ExcelDataShowing";
// import PostData from "./Component/PostDataToApiUseingReact/PostData";
// import Map from "./Component/Map/Map";
import ExportDataInJsonFormet from "./Component/ExportJsonDataInExcelFormet/ExportDataInJsonFormet";

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

    <div>
      {/* <LayoutComponetn></LayoutComponetn> */}
      {/* <From></From> */}

      {/* <Card></Card> */}

      {/* <ExcelDataShowing></ExcelDataShowing> */}

      {/* <PostData></PostData> */}

      {/* <Map></Map> */}

      {/* <ExportDataInJsonFormet></ExportDataInJsonFormet> */}

      <TaskList tasks={TASKS} ></TaskList>
    </div>
  );
}

export default App;
