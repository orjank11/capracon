import React from "react";
import FaBeer from "react-icons/lib/fa/beer";
import FaAdjust from "react-icons/lib/fa/adjust";
import FaDesktop from "react-icons/lib/fa/desktop";
import FaInfo from "react-icons/lib/fa/info";
import FaTie from "react-icons/lib/fa/black-tie";
import FaBug from "react-icons/lib/fa/bug";
import FaAmbulanse from "react-icons/lib/fa/ambulance";

const Icon = ({ type }) => {
  if (type === "info") return <FaInfo />;
  if (type === "tech") return <FaDesktop />;
  if (type === "break") return <FaBeer />;
  if (type === "boss") return <FaTie />;
  if (type === "food") return <FaBug />;
  if (type === "party") return <FaAmbulanse />;
  return <FaBeer />;
};

export default Icon;
