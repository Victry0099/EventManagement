import React from "react";
import VendorCard from "./VendorCard";

const VendorList = ({ vendors, onVendorSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {vendors.map((vendor) => (
        <VendorCard
          key={vendor.id}
          vendor={vendor}
          onVendorSelect={onVendorSelect}
        />
      ))}
    </div>
  );
};

export default VendorList;
