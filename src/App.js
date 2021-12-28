import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
// import BarChart from "./Component/BarChar";
// import LineDemo from "./Component/LineDemo";
import { render } from "react-dom";
import FormValidation from "./Component/FormValidation/FormValidation";
import Like from "./Component/Like/Like";
import PdfGenarator from "./Component/PdfGenarator/PdfGenarator";
import Promise from "./Component/Promise/Promise";
import PureCom from "./Component/ReactAdvance/PureCom";
import RegComponent from "./Component/ReactAdvance/RegComponent";
import RealtimeChatingWithMessenger from "./Component/RealTimeChatingWithMessenger/RealtimeChatingWithMessenger";
import Seracch from "./Component/Search/Seracch";
import SortByCatagory from "./Component/SortByCatagory/SortByCatagory";
import UploadImages from "./Component/UploadImages/UploadImages";

// import { useEffect, useState } from "react";
// import { TASKS } from "./Component/DragAndDrop/Constants";
// import TaskList from "./Component/DragAndDrop/TaskList";
// import LayoutComponetn from "./Component/LayoutComponet/LayoutComponetn";
// import From from "./Component/From/From";
// import Card from "./Component/Card/Card";
// import ExcelDataShowing from "./Component/ExcleDataShowing/ExcelDataShowing";
// import PostData from "./Component/PostDataToApiUseingReact/PostData";
// import Map from "./Component/Map/Map";
// import ExportDataInJsonFormet from "./Component/ExportJsonDataInExcelFormet/ExportDataInJsonFormet";

class App extends Component {
  state = {
    name: "Jahidul Islam",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Jahidul Islam" });
    }, 500);
  }

  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPosts(data);
  //     });
  // }, []);

  render() {
    return (
      <div className="App">
        <h1> test</h1>
        <FormValidation></FormValidation>
        {/* <UploadImages></UploadImages> */}
        {/* <PdfGenarator></PdfGenarator> */}
        {/* <Like></Like> */}
        {/* <PureCom name={this.state.name}></PureCom> */}
        {/* <RegComponent name={this.state.name}></RegComponent> */}
        {/* <Seracch></Seracch> */}
        {/* <SortByCatagory></SortByCatagory> */}
        {/* <RealtimeChatingWithMessenger></RealtimeChatingWithMessenger> */}
      </div>
    );
  }
}

export default App;
