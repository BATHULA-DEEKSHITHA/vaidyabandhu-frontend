import React, { Component } from "react";

// Import Poppins font
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

// Dummy data for whyus since the import was removed
const whyus = [
  {
    icon: "flaticon-doctor",
    title: "Expert Medical Team",
    text: "Our network includes highly qualified doctors and healthcare professionals with years of experience."
  },
  {
    icon: "flaticon-hospital",
    title: "Wide Network",
    text: "Access to a vast network of partner hospitals and diagnostic centers across Karnataka."
  },
  {
    icon: "flaticon-stethoscope",
    title: "Affordable Care",
    text: "Significant discounts on treatments, surgeries, and diagnostics make healthcare accessible."
  },
  {
    icon: "flaticon-clipboard",
    title: "Easy Membership",
    text: "Simple and quick membership process with instant card delivery."
  },
  {
    icon: "flaticon-heart",
    title: "Compassionate Support",
    text: "Personalized support and guidance throughout your healthcare journey."
  },
  {
    icon: "flaticon-call",
    title: "24/7 Helpline",
    text: "Free medical advice and assistance available whenever you need it."
  }
];

class Whyus extends Component {
  render() {
    return (
      <div 
        className="row" 
        style={{ 
          paddingTop: "80px",
          fontFamily: "'Poppins', sans-serif" // Apply Poppins to all text in this section
        }}
      >
        <div className="col-lg-5 order-2 order-lg-1">
          <div className="sigma_about style-21">
            <div className="section-title" style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "clamp(24px, 4vw, 32px)",
                  fontWeight: 800,
                  color: "#fff",
                  textAlign: "center",
                  marginBottom: "8px",
                  lineHeight: "1.3",
                  fontFamily: "'Poppins', sans-serif" // Added Poppins
                }}
              >
                Why Choose VaidyaBandhu?
              </h2>
            </div>
            <div className="sigma_about-content">
              {/* Data */}
              {whyus.slice(0, 6).map((item, i) => (
                <div className="sigma_info style-15" key={i}>
                  <div className="sigma_info-title">
                    <i className={"sigma_info-icon " + item.icon} />
                  </div>
                  <div 
                    className="sigma_info-description"
                    style={{ fontFamily: "'Poppins', sans-serif" }} // Added Poppins
                  >
                    <h5
                      style={{
                        fontFamily: "'Poppins', sans-serif" // Added Poppins
                      }}
                    >
                      {item.title}
                    </h5>
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif" // Added Poppins
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
              {/* Data */}
            </div>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1 order-1 order-lg-2">
          <div className="sigma_about style-21 mt-0 w-100 h-100">
            <div className="relative w-full h-72 flex items-center justify-center">
              {/* First Image */}
              <img
                src={process.env.PUBLIC_URL + "/assets/img/doc-1.jpeg"}
                alt="img"
                className="rounded-lg shadow-lg w-[300px] h-auto object-cover z-10"
              />

              {/* Second Image with left margin */}
              <img
                src={process.env.PUBLIC_URL + "/assets/img/doc-6.jpg"}
                alt="img"
                className="rounded-lg shadow-lg w-[280px] h-auto object-cover hidden sm:block z-0"
                style={{ marginTop: "-6%", marginLeft: "30%" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Whyus;