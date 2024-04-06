import React, { Component, useEffect, useState } from "react";
const API_KEY = '3539b9add5a94ce3ac88172837958cf2';

const HealthChart = ({ symbol, market }) => {
    const [histData, setHistData] = useState(null);

      return (
        <div>
          {histData ? (
            <div>
              
            </div>
          ) : null}
        </div>
      );
    
  };

export default HealthChart;