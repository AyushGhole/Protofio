import React from "react";
import "../App.css";

function Footer() {
  return (
    <>
      <div className="Footer d-flex gap-5 bg-body-tertiary border-top justify-content-center py-5">
        <a href="https://www.instagram.com/ayush_ghole?igsh=MWk0YXg0cW9vcGNvNA==">
          <span className="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill">
            <img
              className="rounded-circle me-1"
              width="24"
              height="24"
              src="https://images.unsplash.com/photo-1634942537034-2531766767d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdGFncmFtJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            Instagram
          </span>
        </a>

        <a href="mailto:ayushghole@gmail.com">
          <span className="badge d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
            <img
              className="rounded-circle me-1"
              width="24"
              height="24"
              src="https://images.unsplash.com/photo-1704642325848-8cbee46aab53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEdtYWlsJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />{" "}
            Gmail
          </span>
        </a>
        <a href="https://x.com/ayushghole?t=3jw8kCYSRtxnDmNb6xVBVA&s=09">
          <span className="badge d-flex align-items-center p-1 pe-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-pill">
            <img
              className="rounded-circle me-1"
              width="24"
              height="24"
              src="https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFR3aXR0ZXJ8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            Twitter
          </span>
        </a>

        <a href="https://github.com/AyushGhole">
          <span className="badge d-flex align-items-center p-1 pe-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-pill">
            <img
              className="rounded-circle me-1"
              width="24"
              height="24"
              src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2l0aHVifGVufDB8fDB8fHww"
              alt=""
            />
            GitHub
          </span>
        </a>
      </div>
    </>
  );
}

export default Footer;
