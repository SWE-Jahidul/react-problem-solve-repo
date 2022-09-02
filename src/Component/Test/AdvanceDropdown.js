import { useEffect, useState } from "react";
import { useRef } from "react";

const searchData = [
  {
    label: "Deal",
    value: "Deal",
    data: [
      {
        label: "Deal Name",
        value: "DealName",
      },
      {
        label: "User Id",
        value: "UserId",
      },
      {
        label: "Deal Type",
        value: "DealType",
      },
      {
        label: "Issuer Name",
        value: "Issuer Name",
      },
    ],
  },
  {
    label: "Documents",
    value: "Documents",
    data: [
      {
        label: "Documents",
        value: "Documents",
      },
      {
        label: "Document Name",
        value: "DocumentName",
      },
      {
        label: "Document ID",
        value: "DocumentID",
      },
    ],
  },
  {
    label: "All Accouts",
    value: "AllAccounts",
    data: [
      {
        label: "Account Name",
        value: "AccountName",
      },
    ],
  },
];

const AdvanceDropDown = () => {
  useEffect(() => {
    defaultChid();
  }, []);

  const [allChild, setAllChild] = useState([]);
  const { moduleInputRef } = useRef();
  const moduleRef = useRef();
  const childDataRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const moduleInputName = moduleInputRef.current.value;
    const moduleName = moduleRef.current.value;
    const childDataName = childDataRef.current.value;
    console.log({ moduleName, childDataName, moduleInputName });
  };

  return (
    <div class="pt-5 ">
      <form className="container" onSubmit={handleSubmit}>
        <div className="row">
          <select
            className="col-lg-2 col-md-2 col-sm-12 col-12 py-2"
            onChange={handleChangeModule}
            ref={moduleRef}
          >
            {searchData.map((option, key) => (
              <option value={option.value} data-key={key}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            className="col-lg-2 col-md-2 col-sm-12 col-12 py-2"
            ref={childDataRef}
          >
            {allChild.map((list) => (
              <option
                style={{
                  width: "50%",
                }}
                value={list.value}
              >
                {list.label}
              </option>
            ))}
          </select>

          <input
            className="col-lg-6 col-md-6 col-sm-12 col-12 py-2"
            ref={moduleInputRef}
            type="text"
            placeholder="Search"
            id="searh"
            name="searh"
          />
          <button
            className="btn btn-primary col-lg-2 col-md-2 col-sm-12 col-12 py-2"
            type="submit"
          >
            Show Result
          </button>
        </div>
      </form>
    </div>
  );

  function handleChangeModule(e) {
    var index = e.target.selectedIndex;
    var key = e.target.childNodes[index].getAttribute("data-key");
    setAllChild(searchData[key]?.data);
  }
  function defaultChid() {
    setAllChild(searchData[0]?.data);
  }
};

export default AdvanceDropDown;
