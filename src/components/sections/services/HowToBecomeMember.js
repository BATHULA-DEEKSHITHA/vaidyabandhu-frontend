import React, { useEffect, useState } from 'react';

// Import Poppins font
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

import MembershipModal from '../../layouts/MembershipModal';

const HowToBecomeMember = () => {
  const [animated, setAnimated] = useState(false);
  const [hoveredHeading, setHoveredHeading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const baseTransition = "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)";

  return (
    <section
      style={{
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #f5fdfd 0%, #e0f7fa 100%)',
        fontFamily: "'Poppins', sans-serif", // Apply Poppins to all text
        color: '#4a5568',
        lineHeight: '1.6', // Improved line height
        overflow: 'hidden',
        position: 'relative',
        opacity: animated ? 1 : 0,
        transform: animated ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.8s ease-out, transform 0.8s ease-out`,
      }}
    >
      {/* Decorative background elements */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: "min(100px, 10vw)",
          height: "min(100px, 10vw)",
          backgroundColor: "rgba(0, 122, 126, 0.05)",
          borderRadius: "50%",
          filter: "blur(20px)",
          animation: "floatShape1 10s infinite ease-in-out",
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: "min(130px, 13vw)",
          height: "min(130px, 13vw)",
          backgroundColor: "rgba(0, 122, 126, 0.03)",
          borderRadius: "50%",
          filter: "blur(25px)",
          animation: "floatShape2 12s infinite ease-in-out",
          zIndex: 0,
        }}
      ></div>

      <div
        className="container"
        style={{
          maxWidth: '1250px',
          margin: '0 auto',
          padding: '0 10px',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(22px, 4.5vw, 38px)',
            fontWeight: 800,
            color: '#004d4f',
            position: 'relative',
            paddingBottom: '20px',
            marginBottom: '15px',
            transition: baseTransition,
            fontFamily: "'Poppins', sans-serif", // Added Poppins
          }}
          onMouseEnter={() => setHoveredHeading(true)}
          onMouseLeave={() => setHoveredHeading(false)}
        >
          How to Become a <span style={{ color: '#007a7e' }}>Member</span>
        </h2>

        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            boxShadow: '0 12px 35px rgba(0, 77, 79, 0.12)',
            padding: '40px',
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(30px)",
            transition: `opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s`,
          }}
        >
          <p
            style={{
              fontSize: 'clamp(18px, 2.2vw, 20px)',
              color: '#4a5568',
              marginBottom: '25px',
              lineHeight: '1.6', // Improved line height
              fontFamily: "'Poppins', sans-serif", // Added Poppins
            }}
          >
            To become a member, simply fill out the membership form with your details
            (<strong style={{ color: '#007a7e', fontFamily: "'Poppins', sans-serif" }}>name, address, phone number</strong>; PAN & Aadhaar - optional),
            make a payment of <strong style={{ color: '#007a7e', fontFamily: "'Poppins', sans-serif" }}>&#8377;49</strong>, and your membership card will be
            delivered to your address. Your membership is valid for <strong style={{ color: '#007a7e', fontFamily: "'Poppins', sans-serif" }}>1 year</strong>,
            and upon expiration, you can easily renew it.
          </p>

          <MembershipModal />
        </div>
      </div>

      {/* Keyframes for the floating background shapes */}
      <style>
        {`
          @keyframes floatShape1 {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(20px, 20px) rotate(5deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
          }
          @keyframes floatShape2 {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-20px, -20px) rotate(-5deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            section[style*="padding: 40px 20px"] {
              padding: 60px 15px !important;
            }
            h2[style*="font-size: clamp(22px, 4.5vw, 38px)"] {
              font-size: clamp(28px, 5.5vw, 36px) !important;
              padding-bottom: 15px !important;
              margin-bottom: 30px !important;
            }
            div[style*="padding: 40px"] {
              padding: 30px !important;
            }
            p[style*="font-size: clamp(18px, 2.2vw, 20px)"] {
              font-size: clamp(16px, 2.8vw, 18px) !important;
            }
          }

          @media (max-width: 480px) {
            section[style*="padding: 40px 20px"] {
              padding: 40px 10px !important;
            }
            h2[style*="font-size: clamp(22px, 4.5vw, 38px)"] {
              font-size: clamp(24px, 7vw, 30px) !important;
              padding-bottom: 12px !important;
              margin-bottom: 25px !important;
            }
            div[style*="padding: 40px"] {
              padding: 20px !important;
            }
            p[style*="font-size: clamp(18px, 2.2vw, 20px)"] {
              font-size: clamp(15px, 3.5vw, 17px) !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HowToBecomeMember;