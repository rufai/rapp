import "./style.css";
function PersonalVideo() {
  return (
    <section>
      <section>
        <section>
          <span
            className="iconify"
            data-icon="mdi:clipboard-play-multiple-outline"
          ></span>
          Library
        </section>
        <section>
          <span className="iconify" data-icon="fa6-solid:clock-rotate-left"></span>
          History
        </section>
        <section>
          <span
            className="iconify"
            data-icon="ant-design:play-square-outlined"
          ></span>
          Your Videos{" "}
        </section>
        <section>
          <span className="iconify" data-icon="fluent:clock-32-regular"></span>Watch
          Later
        </section>
        <section>
          <span className="iconify" data-icon="ep:arrow-down"></span>Show More
        </section>
      </section>
    </section>
  );
}

export default PersonalVideo;
