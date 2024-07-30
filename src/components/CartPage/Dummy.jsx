import React from "react";

export default function Dummy() {
  return (
    <>
      <div className="flex items-center justify-between">
        <p>Discount</p>
        <p>
          BDT <span className="lws-discount">0</span>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p>VAT</p>
        <p>
          BDT <span className="vat">0</span>
        </p>
      </div>
    </>
  );
}
