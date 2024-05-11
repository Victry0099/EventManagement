import React, { useState } from "react";

const VendorCard = ({ vendor, onVendorSelect }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => setShowOptions(true);
  const handleMouseLeave = () => setShowOptions(false);
  const handleOptionSelect = (option) => {
    onVendorSelect(vendor, option);
    setShowOptions(false);
  };

  return (
    <div
      className={`bg-gray-100 rounded-lg hover:shadow-md p-4 flex flex-col items-center cursor-pointer relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="text-lg font-medium mb-2">{vendor.name}</h3>
      <p className="text-gray-600 text-sm">{vendor.description}</p>
      {showOptions && (
        <div className="absolute bottom-0 left-0 w-full bg-white rounded-lg shadow-md mt-2">
          {vendor.options.map((option) => (
            <button
              key={option}
              className="w-full p-2 text-left hover:bg-gray-100"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default VendorCard;
