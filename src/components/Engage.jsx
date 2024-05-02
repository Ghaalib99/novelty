import "../assets/engage.css";

export default function Engage({
  first_step,
  second_step,
  third_step,
  fourth_step,
  fifth_step,
  sixth_step,
  seventh_step,
  eighth_step,
  ninth_step,
  tenth_step,
  eleventh_step,

  call_to_action,
  call_to_action2,
  title,
  useAutoContainer,
  subtitle,
  howToOur = false,
  remove3rdButton = false,
}) {
  return (
    <>
      <div className={useAutoContainer ? "auto-container" : ""}>
        <div className="sec-title text-center">
          <h2 className="text-[#000] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] font-bold leading-[3.5rem]">
            {title}
          </h2>
          <p className="font-bold text-xl mb-5 text-[#e9ad53]">{subtitle}</p>
        </div>

        <div className="schedule-tabs tabs-box">
          <div className="tabs-content">
            {/*Tab*/}
            <div className="tab active-tab" id="tab-1">
              <div className="schedule-timeline">
                {/* schedule Block */}
                <div className="schedule-block">
                  <div className="inner-box">
                    <div className="inner">
                      <div
                        style={{
                          fontSize: "20px",
                          color: "#105c04",
                          fontWeight: "bold",
                          "@media (min-width: 599px)": {
                            paddingTop: "0",
                          },
                        }}
                        className="date text-jaza-main text-2xl font-bold"
                      >
                        1
                      </div>
                      {/* <h4>Click Button</h4> */}
                      {/* <div className="text" style={{color: '#000000', display: 'none'}}>Enter your correct information <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" style={{textDecoration: 'underline'}}>here</a> with all the necessary documents
                        </div> */}
                      <div className="text-jaza-main text-[0.7rem] leading-[1rem]  md:text-[1rem] text-justify md:leading-[1.5rem]">
                        {first_step}
                      </div>
                    </div>
                  </div>
                </div>
                {/* schedule Block */}
                <div className="schedule-block even">
                  <div className="inner-box">
                    <div className="inner">
                      <div
                        style={{
                          fontSize: "20px",
                          color: "#105c04",
                          fontWeight: "bold",
                        }}
                        className="date"
                      >
                        2
                      </div>
                      {/* <h4>Review</h4> */}
                      <div className="text-jaza-main text-[0.7rem] leading-[1rem]  md:text-[1rem] text-justify md:leading-[1.5rem]">
                        {second_step}
                      </div>
                    </div>
                  </div>
                </div>
                {/* schedule Block */}
                <div className="schedule-block">
                  <div className="inner-box">
                    <div className="inner">
                      <div
                        style={{
                          fontSize: "20px",
                          color: "#105c04",
                          fontWeight: "bold",
                        }}
                        className="date"
                      >
                        3
                      </div>
                      {/* <h4>Payment</h4> */}
                      {/* <div class="text" style="color: #000000">Submit Service Information.</div> */}
                      {remove3rdButton ? (
                        <div className="text-jaza-main text-[0.7rem] leading-[1rem]  md:text-[1rem] text-justify md:leading-[1.5rem]">
                          {third_step}
                        </div>
                      ) : (
                        <div
                          className="theme-btn btn-style-three"
                          style={{ textDecoration: "none" }}
                        >
                          <span className="btn-title">{third_step}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* schedule Block */}
                {!useAutoContainer && (
                  <div className="schedule-block even">
                    <div className="inner-box">
                      <div className="inner">
                        <div
                          style={{
                            fontSize: "20px",
                            color: "#105c04",
                            fontWeight: "bold",
                          }}
                          className="date"
                        >
                          4
                        </div>
                        {/* <h4>Review</h4> */}
                        <div className="text-jaza-main text-[0.7rem] leading-[1rem]  md:text-[1rem] text-justify md:leading-[1.5rem]">
                          {fourth_step}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* schedule Block */}
                {!useAutoContainer && (
                  <div className="schedule-block">
                    <div className="inner-box">
                      <div className="inner">
                        <div
                          style={{
                            fontSize: "20px",
                            color: "#105c04",
                            fontWeight: "bold",
                          }}
                          className="date"
                        >
                          5
                        </div>
                        {/* <h4>Click Button</h4> */}
                        {/* <div className="text" style={{color: '#000000', display: 'none'}}>Enter your correct information <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" style={{textDecoration: 'underline'}}>here</a> with all the necessary documents
                        </div> */}
                        <div className="text-jaza-main text-[0.7rem] leading-[1rem]  md:text-[1rem] text-justify md:leading-[1.5rem]">
                          {fifth_step}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* schedule Block */}
                {!useAutoContainer && (
                  <div className="schedule-block even">
                    <div className="inner-box">
                      <div className="inner">
                        <div
                          style={{
                            fontSize: "20px",
                            color: "#105c04",
                            fontWeight: "bold",
                          }}
                          className="date"
                        >
                          6
                        </div>
                        {/* <h4>Review</h4> */}
                        <div className="text-jaza-main text-[0.7rem] leading-[1rem]  md:text-[1rem] text-justify md:leading-[1.5rem]">
                          {sixth_step}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* schedule Block */}
                {!useAutoContainer && (
                  <div className="schedule-block">
                    <div className="inner-box">
                      <div className="inner">
                        <div
                          style={{
                            fontSize: "20px",
                            color: "#105c04",
                            fontWeight: "bold",
                          }}
                          className="date"
                        >
                          7
                        </div>
                        {/* <h4>Click Button</h4> */}
                        {/* <div className="text" style={{color: '#000000', display: 'none'}}>Enter your correct information <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" style={{textDecoration: 'underline'}}>here</a> with all the necessary documents
                        </div> */}
                        <div className="text-jaza-main text-[0.7rem] leading-[1rem]  md:text-[1rem] text-justify md:leading-[1.5rem]">
                          {seventh_step}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* schedule Block */}
                {!useAutoContainer && (
                  <div className="schedule-block even">
                    <div className="inner-box">
                      <div className="inner">
                        <div
                          style={{
                            fontSize: "20px",
                            color: "#105c04",
                            fontWeight: "bold",
                          }}
                          className="date"
                        >
                          8
                        </div>
                        {/* <h4>Review</h4> */}
                        <div className="text-jaza-main text-[0.7rem] leading-[1rem]  md:text-[1rem] text-justify md:leading-[1.5rem]">
                          {eighth_step}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* schedule Block */}
                {!useAutoContainer && (
                  <div className="schedule-block">
                    <div className="inner-box">
                      <div className="inner">
                        <div
                          style={{
                            fontSize: "20px",
                            color: "#105c04",
                            fontWeight: "bold",
                          }}
                          className="date"
                        >
                          9
                        </div>
                        {/* <h4>Click Button</h4> */}
                        {/* <div className="text" style={{color: '#000000', display: 'none'}}>Enter your correct information <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" style={{textDecoration: 'underline'}}>here</a> with all the necessary documents
                        </div> */}
                        <div className="text-jaza-main text-[0.7rem] leading-[1rem]  md:text-[1rem] text-justify md:leading-[1.5rem]">
                          {ninth_step}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* schedule Block */}
                {!useAutoContainer && (
                  <div className="schedule-block even">
                    <div className="inner-box">
                      <div className="inner">
                        <div
                          style={{
                            fontSize: "20px",
                            color: "#105c04",
                            fontWeight: "bold",
                          }}
                          className="date"
                        >
                          10
                        </div>
                        {/* <h4>Review</h4> */}
                        <div className="text-jaza-main text-[0.7rem] leading-[1rem]  md:text-[1rem] text-justify md:leading-[1.5rem]">
                          {tenth_step}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* schedule Block */}
                {!useAutoContainer && (
                  <div className="schedule-block">
                    <div className="inner-box">
                      <div className="inner">
                        <div
                          style={{
                            fontSize: "20px",
                            color: "#105c04",
                            fontWeight: "bold",
                          }}
                          className="date"
                        >
                          11
                        </div>
                        {/* <h4>Click Button</h4> */}
                        {/* <div className="text" style={{color: '#000000', display: 'none'}}>Enter your correct information <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" style={{textDecoration: 'underline'}}>here</a> with all the necessary documents
                        </div> */}
                        <div className="text-jaza-main text-[0.7rem] leading-[1rem]  md:text-[1rem] text-justify md:leading-[1.5rem]">
                          {eleventh_step}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {call_to_action}

      {!remove3rdButton && call_to_action2}
    </>
  );
}
