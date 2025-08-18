import UseStickyBar from "../utils/UseStickyBar";

const TapTop = () => {
  const fix = UseStickyBar(100);

  const executeScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <div className="go_top" id="Gotop" onClick={executeScroll} style={{ display: fix ? "block" : "none" }}>
      <span>
        <i className="icofont-arrow-up" />
      </span>
    </div>
  );
};

export default TapTop;
