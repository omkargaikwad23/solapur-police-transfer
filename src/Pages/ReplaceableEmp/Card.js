import React from 'react';
import './card.css'

export default function Card() {
  
  return (
    <div className="card">
      <div className="card-content">
        <div >
          <span className="card-number">3214 HC</span>
        </div>
        <div  style={{marginTop: 20}}>
          <span className="card-name">रमेश श्यामराव कोळी</span>
        </div>
        <div style={{marginTop: 15}}>
          <span className="card-reason">वडील आजारी असतात. त्यामुळे गावी बदली हवी</span>
        </div>
        <div style={{marginTop: 15}}>
          <span className="card-type">प्रशासकीय बदली</span>
        </div>
      </div>
    </div>
    
  );
}
