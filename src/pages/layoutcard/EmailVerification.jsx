import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./EmailVerification.css";

function EmailVerification({
  email = "s********@example.com",
  title = "Verify your Email",
}) {
  const [code, setCode] = useState(new Array(6).fill(""));
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    if (value) {
      setCode((prev) => {
        const updatedCode = [...prev];
        updatedCode[index] = value;
        return updatedCode;
      });
      if (e.target.nextSibling) {
        e.target.nextSibling.focus(); // Focus on the next input
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      setCode((prev) => {
        const updatedCode = [...prev];
        updatedCode[index] = ""; // Clear the current input
        return updatedCode;
      });
      if (e.target.previousSibling) {
        e.target.previousSibling.focus(); // Focus on the previous input
      }
    }
  };

  const handleVerify = () => {
    // Add verification logic here if needed
    navigate("/form-details"); // Navigate to FormDetails page
  };

  return (
    <div className="email-verification-container">
      {/* Logo */}
      <img src="/assets/icons/logo.png" alt="Logoipsum" className="logo" />

      {/* Title */}
      <h1>{title}</h1>

      {/* Email Instructions */}
      <p>
        Please enter the 6-digit code we just sent to <strong>{email}</strong>
      </p>

      {/* Input Fields for Code */}
      <div className="code-input">
        {code.map((digit, index) => (
          <React.Fragment key={index}>
            <input
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
            {index === 2 && <span className="hyphen">-</span>}{" "}
            {/* Add hyphen after 3rd input */}
          </React.Fragment>
        ))}
      </div>

      {/* Verify Button */}
      <button className="verify-button" onClick={handleVerify}>
        Verify
      </button>

      {/* Timer */}
      <p className="timer">Wait 1:39 seconds before requesting a new code.</p>

      {/* Footer */}
      <p className="footer">
        By continuing, you agree to Nobody's <a href="/">Terms of Service</a>,{" "}
        <a href="/">Privacy Policy</a>, and <a href="/">Cookie Policy</a>.
      </p>
    </div>
  );
}

export default EmailVerification;
