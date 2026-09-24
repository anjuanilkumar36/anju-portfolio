import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">

        <div className="education-heading">
          <p>EDUCATION</p>
          <h1>My Academic Journey</h1>
        </div>

        <div className="education-path">

          {/* Secondary */}
          <div className="education-stop">
            

            <div className="education-card">
              <span>2020</span>
              <h2>Secondary Education</h2>
              <p>S.T Joseph's C H S S, Kottayam, Kerala</p>
            </div>
          </div>

          {/* Straight dashed road */}
          <div className="road-line">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <b>→</b>
          </div>

          {/* Higher Secondary */}
          <div className="education-stop">
           

            <div className="education-card">
              <span>2020 — 2022</span>
              <h2>Higher Secondary</h2>
              <p>M.T Seminary H S S, Kottayam, Kerala</p>
            </div>
          </div>

          {/* Straight dashed road */}
          <div className="road-line">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <b>→</b>
          </div>

          {/* B.Tech */}
          <div className="education-stop">
            <div className="stop-dot"></div>

            <div className="education-card">
              <span>2022 — 2026</span>
              <h2>B.Tech Computer Science & Engineering</h2>
              <p>
                A P J Abdul Kalam Technological University, Trivandrum
              </p>
             
            </div>
          </div>
          {/* Straight dashed road */}
          <div className="road-line">
            <span></span>
            <span></span>
            <span></span>
            <b>→</b>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Education;