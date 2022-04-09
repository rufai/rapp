import "./index.css";
import VideoCard from "../VideoCard";
import Student from "../Student";

// data
import country_data from "./../data/country_images";
console.log(country_data);

// let VideoCards = []; // to hold all the video cards
// for (let i = 0; i < country_data.length; i++) {
//   VideoCards.push(
//     <VideoCard
//       flag={country_data[i].file_url}
//       country_name={country_data[i].name}
//       wiki={country_data[i].url}
//     />
//   );
// }

// // es6 declarative version
const VideoCards = country_data.map((item) => (
  <VideoCard flag={item.file_url} country_name={item.name} wiki={item.url} />
));

let students = [
  <Student name="adeyemi" age="9" />,
  <Student name="talabi" age="3" />,
  <Student
    name="ogochukwu"
    age="7"
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWN4OgziY6MyGT_anninWK5U5MC8nMWtLaZw&usqp=CAU"
  />,
];

let links = [
  <a href="lagos.com" key="1" />,
  <a href="abuja.com" key="2" />,
  <a href="enugu.com" key="3" />,
  <a href="utiva.com" key="5" />,
  <a href="utiva.io" key="4" />,
  <a href="nigeria.io" key="8" />,
];
const adeyemi = 2;
const ibrahim = "talabi";
const yusuf = "olanrewaju";
// {} evaluate js
function Center() {
  return (
    <div className="center">
      <h1>Center component</h1>
      {/* <h2>Ogochukwu</h2> */}
      {/* <h3>{adeyemi}</h3> */}
      {/* <h4>{ibrahim}</h4> */}
      {/* <h5>{yusuf}</h5> */}
      {/* {VideoCards} */}
      {/* <input type="text" placeholder="" value="" /> */}
      {/* <img src="" alt="" /> */}

      {/* {links} */}

      {students}
    </div>
  );
}
export default Center;
