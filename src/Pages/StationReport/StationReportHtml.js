import React from 'react';
import './stationReportHtml.css'

export default function BasicTable() {

  return (
    <div className = "stationReport">
      <table className="report2"  style={{ width: '100%' }}>
        <tr className="tr2">
          {/* <th>Sr. No.</th> */}
          <th className="th" rowSpan="2">पो.ठाणे नाव</th>
          <th className="th" colSpan="5">Sanctioned Police</th>
          <th className="th" colSpan="5">Present Police</th>
          <th className="th" colSpan="5">Difference</th>
          <th className="th" rowSpan="2">Female Count</th>
          <th className="th" rowSpan="2">Driver Count</th>
          <th className="th" rowSpan="2">going</th>
          <th className="th" rowSpan="2">gone</th>
          <th className="th" rowSpan="2">came</th>
          <th className="th" rowSpan="2">Rise/Fall</th>
        </tr>
        <tr className="tr2">
          {/* Sanctioned */}
          <th className="th">ASI</th>
          <th className="th">HC</th>
          <th className="th">PN</th>
          <th className="th">PC</th>
          <th className="th">TOTAL</th>

          {/* Present */}
          <th className="th">ASI</th>
          <th className="th">HC</th>
          <th className="th">PN</th>
          <th className="th">PC</th>
          <th className="th">TOTAL</th>

          {/* Diff */}
          <th className="th">ASI</th>
          <th className="th">HC</th>
          <th className="th">PN</th>
          <th className="th">PC</th>
          <th className="th">TOTAL</th>
          
        </tr>
        <tr className="tr2">
          {/* <td style={{ width: '5%' }}>1</td> */}
          <td className="td" style={{ width: '20%' }}>सोलापूर तालुका पोलीस ठाणे</td>
          
          {/* sanctioned */}
          <td className="td" style={{ width: '5%' }}>2</td>
          <td className="td" style={{ width: '5%' }}>4</td>
          <td className="td" style={{ width: '5%' }}>3</td>
          <td className="td"  style={{ width: '5%' }}>3</td>
          <td className="td" style={{ width: '10%' }}>12</td>

          {/* present */}
          <td className="td" style={{ width: '5%' }}>4</td>
          <td className="td" style={{ width: '5%' }}>3</td>
          <td className="td" style={{ width: '5%' }}>2</td>
          <td className="td" style={{ width: '5%' }}>3</td>
          <td className="td" style={{ width: '10%' }}>12</td>

          {/* differences */}
          <td className="td" style={{ width: '5%' }}>4</td>
          <td className="td" style={{ width: '5%' }}>3</td>
          <td className="td" style={{ width: '5%' }}>2</td>
          <td className="td" style={{ width: '5%' }}>3</td>
          <td className="td" style={{ width: '10%' }}>12</td>

          <td className="td" style={{ width: '10%' }}>3</td>
          <td className="td" style={{ width: '10%' }}>3</td>

          <td className="td" style={{ width: '5%' }}>3</td>
          <td className="td" style={{ width: '5%' }}>3</td>
          <td className="td" style={{ width: '5%' }}>3</td>
          <td className="td" style={{ width: '10%' }}>-1</td>
        </tr>

        

        
      </table>
    </div>
  );
}
