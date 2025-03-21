"use client";
import CountUp from "react-countup";

function Counter() {
  return (
    <section className="section sofax-section-padding2 dark-bg" id="fact">
      <div id="sofax-counter"></div>
      <div className="container">
        <div className="sofax-counter-wrap">
          <div className="sofax-counter-data">
            <h2>
              <CountUp end={500} duration={3} redraw={true} enableScrollSpy />
            </h2>
            <p>Total events managed</p>
          </div>
          <div className="sofax-counter-data">
            <h2>
              <CountUp end={150000} duration={3} redraw={true} enableScrollSpy />
            </h2>
            <p>Total attendees registered</p>
          </div>
          <div className="sofax-counter-data">
            <h2>
              <CountUp end={2000} duration={3} redraw={true} enableScrollSpy />
            </h2>
            <p>Total exhibitors</p>
          </div>
          <div className="sofax-counter-data">
            <h2>
              <CountUp end={95} duration={3} redraw={true} enableScrollSpy />%
            </h2>
            <p>Events with real-time tracking</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
