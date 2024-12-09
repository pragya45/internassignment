import React, { useState } from "react";
import "./FormDetails.css";
import ProgressBar from "./ProgressBar";

const FormDetails = () => {
  const [formData, setFormData] = useState({
    legalName: "",
    doingBusinessAs: "",
    companyRegistrationNumber: "",
    randomRegistrationNumber: "",
    websiteUrl: "",
    industryName: "",
    dropdownOption: "",
    anotherDropdown: "",
    accountUsage: "",
    randomCount: "",
    expectedVisits: "",
    purposeOfForm: "",
    productDescription: "",
    contactEmail: "",
    incorporationCertificate: null,
    companyLogo: null,
  });

  const [currentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="form-page">
      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} />

      <form className="form-detail" onSubmit={handleSubmit}>
        <h2 className="form-title">Tell us more about your business</h2>
        <p className="form-description">
          Your info is like the Wi-Fi password—totally crucial for keeping
          things running, impressing the money folks, and making sure you get
          top-notch service without any buffering!
        </p>

        <div className="form-grid">
          {/* Form fields */}
          <div className="form-group">
            <label>
              Legal Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="legalName"
              value={formData.legalName}
              onChange={handleInputChange}
              placeholder="Legal name"
              required
            />
          </div>

          <div className="form-group">
            <label>
              Doing Business as <span className="required">*</span>
            </label>
            <input
              type="text"
              name="doingBusinessAs"
              value={formData.doingBusinessAs}
              onChange={handleInputChange}
              placeholder="Doing business as"
              required
            />
          </div>

          <div className="form-group">
            <label>
              Company Registration Number <span className="required">*</span>
            </label>
            <input
              type="text"
              name="companyRegistrationNumber"
              value={formData.companyRegistrationNumber}
              onChange={handleInputChange}
              placeholder="Company Registration Number"
              required
            />
          </div>

          <div className="form-group">
            <label>
              Random Registration Number <span className="required">*</span>
            </label>
            <input
              type="text"
              name="randomRegistrationNumber"
              value={formData.randomRegistrationNumber}
              onChange={handleInputChange}
              placeholder="Random Registration Number"
              required
            />
          </div>

          <div className="form-group">
            <label>
              Website URL <span className="required">*</span>
            </label>
            <input
              type="url"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleInputChange}
              placeholder="Website URL"
              required
            />
          </div>

          <div className="form-group">
            <label>
              Industry Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="industryName"
              value={formData.industryName}
              onChange={handleInputChange}
              placeholder="Industry Name"
              required
            />
          </div>

          {/* Dropdowns */}
          <div className="form-group">
            <label>
              One Random Dropdown <span className="required">*</span>
            </label>
            <select
              name="dropdownOption"
              value={formData.dropdownOption}
              onChange={handleInputChange}
              required
            >
              <option value="">Options nai options</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Which dropdown would you like to select?{" "}
              <span className="required">*</span>
            </label>
            <select
              name="anotherDropdown"
              value={formData.anotherDropdown}
              onChange={handleInputChange}
              required
            >
              <option value="">More Options</option>
              <option value="Option A">Option A</option>
              <option value="Option B">Option B</option>
            </select>
          </div>

          {/* Dropdowns */}
          <div className="form-group">
            <label>
              Another Random Dropdown Appears{" "}
              <span className="required">*</span>
            </label>
            <select
              name="dropdownOption"
              value={formData.dropdownOption}
              onChange={handleInputChange}
              required
            >
              <option value="">Return of options</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Account Usage Intent <span className="required">*</span>
            </label>
            <select
              name="dropdownOption"
              value={formData.dropdownOption}
              onChange={handleInputChange}
              required
            >
              <option value="">Account Usage Intent</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Random Count per Month <span className="required">*</span>
            </label>
            <input
              type="text"
              name="randomCount"
              value={formData.randomCount}
              onChange={handleInputChange}
              placeholder="Put the value get the answer"
              required
            />
          </div>

          <div className="form-group">
            <label>
              Expected Total Visits <span className="required">*</span>
            </label>
            <input
              type="number"
              name="expectedVisits"
              value={formData.expectedVisits}
              onChange={handleInputChange}
              placeholder="In Number"
              required
            />
          </div>

          <div className="form-group">
            <label>
              Purpose of using fake form <span className="required">*</span>
            </label>
            <textarea
              name="purposeOfForm"
              value={formData.purposeOfForm}
              onChange={handleInputChange}
              placeholder="Purpose of using fake form"
              required
            />
          </div>

          <div className="form-group">
            <label>
              Ek description toh banta hai <span className="required">*</span>
            </label>
            <textarea
              name="productDescription"
              value={formData.productDescription}
              onChange={handleInputChange}
              placeholder="Product Description"
              required
            />
          </div>

          <div className="form-group">
            <label>
              Contact email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleInputChange}
              placeholder="Contact email"
              required
            />
          </div>
        </div>

        {/* File upload section */}
        <div className="file-upload-section">
          <div className="form-group bold-label">
            <label>
              Certification of Incorporation <span className="required">*</span>
            </label>
            <p className="upload-instructions">
              Upload the incorporation certificate
            </p>
            <label className="upload-box">
              <input
                type="file"
                name="incorporationCertificate"
                onChange={handleFileChange}
                required
              />
              <div className="upload-icon">
                <img src="assets/images/Frame.png" alt="file icon" />
              </div>
              <p className="upload-text">
                <span className="underline-text">Click to upload</span> or drag
                and drop
              </p>
              <p className="file-size">Maximum file size 50 MB</p>
            </label>
          </div>

          <div className="form-group bold-label">
            <label>
              Company Logo <span className="required">*</span>
            </label>
            <p className="upload-instructions">Upload the company logo</p>
            <label className="upload-box">
              <input
                type="file"
                name="companyLogo"
                onChange={handleFileChange}
                required
              />
              <div className="upload-icon">
                <img src="assets/images/Frame.png" alt="file icon" />
              </div>
              <p className="upload-text">
                <span className="underline-text">Click to upload</span> or drag
                and drop
              </p>
              <p className="file-size">Maximum file size 50 MB</p>
            </label>
          </div>
        </div>

        <div className="form-buttons">
          <button type="button" className="previous-button">
            Previous
          </button>
          <button type="submit" className="next-button">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormDetails;
