import React from "react";
import "./LayoutCard.css";

function LayoutCard() {
  const branches = [
    {
      country: "Singapore",
      type: "Head Office",
      company: "XYZ Pvt. Ltd.",
      address: "Road to nowhere, 06-404, 500 Internal Error",
      flag: "/assets/images/Singapore.png",
    },
    {
      country: "Hong Kong",
      type: "Branches",
      company: "XYZ Pvt. Ltd.",
      address: "The Infinite Loop Office, 404 Timeout Plaza",
      flag: "/assets/images/HongKong.png",
    },
    {
      country: "USA",
      type: "Branches",
      company: "XYZ Inc.",
      address: "NullTown, Buglandia, 500 0xDEADBEEF",
      flag: "/assets/images/USA.png",
    },
  ];

  return (
    <div className="layout-container">
      <div className="ellipse-background"></div> {/* Background ellipse image */}
      <div className="ellipse-overlay"></div> {/* Overlay ellipse */}
      <button className="back-button">← Back</button>
      <h1 className="layout-title">Layout Cards</h1>
      <div className="cards-layout">
        <div className="card top-card">
          <img
            src={branches[0].flag}
            alt={`${branches[0].country} flag`}
            className="flag-image"
          />
          <h2 className="country">{branches[0].country}</h2>
          <p className="type">{branches[0].type}</p>
          <p className="company">{branches[0].company}</p>
          <p className="address">{branches[0].address}</p>
        </div>
        <div className="cards-row">
          {branches.slice(1).map((branch, index) => (
            <div key={index} className="card">
              <img
                src={branch.flag}
                alt={`${branch.country} flag`}
                className="flag-image"
              />
              <h2 className="country">{branch.country}</h2>
              <p className="type">{branch.type}</p>
              <p className="company">{branch.company}</p>
              <p className="address">{branch.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LayoutCard;
