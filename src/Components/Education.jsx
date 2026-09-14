import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">

        {/* HEADER */}
        <div className="education-header">
          <p className="education-label">EDUCATION</p>

          <h1>
            Academic
            <br />
            <span>Background</span>
          </h1>

         
        </div>

        {/* B.TECH - MAIN EDUCATION */}
        <div className="education-main-card">

          <div className="education-number">01</div>

          <div className="education-content">
            <div className="education-top">
              <span className="education-type">UNDERGRADUATE DEGREE</span>
              <span className="education-year">2022 — 2026</span>
            </div>

            <h2>B.Tech Computer Science & Engineering</h2>

            <p className="college-name">
              VISAT Engineering College
            </p>

            <p className="university-name">
              APJ Abdul Kalam Technological University
            </p>

            <div className="education-result">
              <div>
                <span>RESULT</span>
                <strong>66.8%</strong>
              </div>

              <div>
                <span>CLASS</span>
                <strong>First Class</strong>
              </div>
            </div>
          </div>

          <div className="education-arrow">↗</div>
        </div>

        {/* SCHOOL EDUCATION */}
        <div className="school-education">

          {/* 12th */}
          <div className="school-card">
            <div className="school-number">02</div>

            <div className="school-content">
              <span className="school-type">HIGHER SECONDARY</span>

              <h3>Higher Secondary Education</h3>

              <p>Science</p>

              <div className="school-result">
                <span>RESULT</span>
                <strong>77%</strong>
              </div>
            </div>
          </div>

          {/* 10th */}
          <div className="school-card">
            <div className="school-number">03</div>

            <div className="school-content">
              <span className="school-type">SECONDARY EDUCATION</span>

              <h3>Secondary Education</h3>

              <p>SSLC</p>

              <div className="school-result">
                <span>RESULT</span>
                <strong>93%</strong>
              </div>
            </div>
          </div>

        </div>

        {/* FOOTER */}
        
      </div>
    </section>
  );
}

export default Education;
