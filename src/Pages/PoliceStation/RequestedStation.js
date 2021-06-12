import React from 'react';
import './requestedStation.css'

export default function Card() {

  return (
    <div className="req-card">
      <div className="req-content">
        <div className="req-station">
          मोहोळ पोलीस ठाणे
        </div>
        <div className="table-one">
          <table>
            <tr>
              <th></th>
              <th>ASI</th>
              <th>DC</th>
              <th>PN</th>
              <th>HC</th>
              <th>Total</th>
            </tr>
            <tr>
              <th>उपस्थित</th>
              <td>5</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>11</td>
            </tr>
            <tr>
              <th>मंजूर</th>
              <td>5</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>11</td>
            </tr>
            <tr>
              <th>फरक</th>
              <td>5</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>11</td>
            </tr>
          </table>
        </div>
        
        <div className="table-two">
          <table>
            <tr>
              <th>जात-आहेत</th>
              <th>गेले</th>
              <th>परवानगी-नाही</th>
            </tr>
            <tr>
              <td>3</td>
              <td>2</td>
              <td>1</td>
            </tr>
          </table>
        </div>

        <div className="req-Color">
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
        <div className="rise-fall">
          Rise/Fall: 12
        </div>
      </div>
    </div>

  );
}
