import React from 'react';
import './stationReportHtml.css'

export default function BasicTable() {

  return (
    <div>
      <table style={{ width: '100%' }}>
        <tr>
          {/* <th>Sr. No.</th> */}
          <th rowSpan="2">पो.ठाणे नाव</th>
          <th colSpan="5">Sanctioned Police</th>
          <th colSpan="5">Present Police</th>
          <th colSpan="5">Difference</th>
          <th rowSpan="2">Female Count</th>
          <th rowSpan="2">Driver Count</th>
          <th rowSpan="2">going</th>
          <th rowSpan="2">gone</th>
          <th rowSpan="2">came</th>
          <th rowSpan="2">Rise/Fall</th>
        </tr>
        <tr>
          {/* Sanctioned */}
          <th>ASI</th>
          <th >HC</th>
          <th >PN</th>
          <th >PC</th>
          <th >TOTAL</th>

          {/* Present */}
          <th>ASI</th>
          <th >HC</th>
          <th >PN</th>
          <th >PC</th>
          <th >TOTAL</th>

          {/* Diff */}
          <th>ASI</th>
          <th >HC</th>
          <th >PN</th>
          <th >PC</th>
          <th >TOTAL</th>
          
        </tr>
        <tr>
          {/* <td style={{ width: '5%' }}>1</td> */}
          <td style={{ width: '20%' }}>सोलापूर तालुका पोलीस ठाणे</td>
          
          {/* sanctioned */}
          <td style={{ width: '5%' }}>2</td>
          <td style={{ width: '5%' }}>4</td>
          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '10%' }}>12</td>

          {/* present */}
          <td style={{ width: '5%' }}>4</td>
          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '5%' }}>2</td>
          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '10%' }}>12</td>

          {/* differences */}
          <td style={{ width: '5%' }}>4</td>
          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '5%' }}>2</td>
          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '10%' }}>12</td>

          <td style={{ width: '10%' }}>3</td>
          <td style={{ width: '10%' }}>3</td>

          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '10%' }}>-1</td>
        </tr>

        <tr>
          {/* <td style={{ width: '5%' }}>1</td> */}
          <td style={{ width: '20%' }}>सोलापूर तालुका पोलीस ठाणे</td>
          
          {/* sanctioned */}
          <td style={{ width: '5%' }}>2</td>
          <td style={{ width: '5%' }}>4</td>
          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '10%' }}>12</td>

          {/* present */}
          <td style={{ width: '5%' }}>4</td>
          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '5%' }}>2</td>
          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '10%' }}>12</td>

          {/* differences */}
          <td style={{ width: '5%' }}>4</td>
          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '5%' }}>2</td>
          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '10%' }}>12</td>

          <td style={{ width: '10%' }}>3</td>
          <td style={{ width: '10%' }}>3</td>

          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '5%' }}>3</td>
          <td style={{ width: '10%' }}>-1</td>
        </tr>

        
      </table>
    </div>
  );
}
