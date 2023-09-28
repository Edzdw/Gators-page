const Home = () => {
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Welcome<span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">To</span>
              <span className="intro animated-layer">
                "Giải pháp thu nhập thụ động ổn định - đơn giản, đáng tin cậy"
              </span>
            </span>
            <span>
              <span className="animated-layer">The Gators</span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};
export default Home;
