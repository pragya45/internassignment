import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ currentStep }) => {
  const steps = [
    "Business Type",
    "Business Details",
    "Authorized Representative",
    "Business Owners",
    "Company Directors",
    "Support Information",
    "Add Details",
    "Complete Registration",
  ];

  return (
    <div className="progress-bar-wrapper">
      {/* Top Left Text */}
      <div className="after-otp">After-OTP</div>

      {/* Title */}
      <h2 className="progress-title">Multi-Step Process Form Assignment</h2>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <img
          src="/assets/images/group.png"
          alt="Progress Bar"
          className="progress-bar-image"
        />
        <div className="progress-labels">
          {steps.map((step, index) => (
            <span
              key={index}
              className={`progress-label ${
                index === currentStep ? "active" : ""
              }`}
            >
              {step}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
