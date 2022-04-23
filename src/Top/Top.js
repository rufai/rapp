import "./style.css";

import TopItem from "../TopItem";

// component
// will return ui
// Top (parent) ---> TopItem(child)
function Top() {
  return (
    <div className="top">
      <h1>Top component</h1>
      <TopItem
        src="sdfsdfd"
        alt=""
        className=""
        id=""
        height="200"
        width="600"
      />
      <img src="" alt="" className="" id="" height="" width="" />
    </div>
  );
}

// normal js function
// return normal js data type  ( boolean, number, null, undefined )
function Ogo() {
  console.log("I am Okey!");
}

export default Top;
// export { Top, Ogo };
