import React from 'react'
import { AddRecord } from '../AddRecord/AddRecord'

export default function Opex() {
    return (
        <>
        <div className="container p-5 w-full bg-slate-400">
          <AddRecord />
        </div>
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols mt-10 ml-10">
            <thead>
              <tr>
                <td>Item</td>
                <td>Rate</td>
                <td>Qty</td>
                <td>Year1</td>
                <td>Year2</td>
                <td>Year3</td>
                <td>Year4</td>
                <td>Year5</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nutanix 2-node Solution add-on to existing cluster</td>
                <td>INR 2,650,000</td>
                <td>2</td>
                <td>INR 0000000</td>
                <td>INR 0000000</td>
                <td>INR 0000000</td>
                <td>INR 0000000</td>
                <td>INR 0000000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
}
