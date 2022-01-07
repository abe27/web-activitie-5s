import React from "react";
import { AddIcon, DeleteIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';

const MasterTable = ({ title = "Test" }) => (
  <>
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>หัวข้อ</th>
            <th>ข้อมูลเพิ่มเติม</th>
            <th>สถานะ</th>
            <th>แก้ไขล่าสุด</th>
            <th>
              <button className="btn btn-success btn-outline btn-circle btn-xs">
                <AddIcon />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>
              <CheckIcon color='green.500'/>
            </td>
            <td>2022-01-01 00:00</td>
            <td>
              <button className="btn btn-error btn-ghost btn-xs">
                <DeleteIcon />
              </button>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td><CloseIcon color='red.500' /></td>
            <td>2022-01-01 00:00</td>
            <td>
              <button className="btn btn-error btn-ghost btn-xs">
                <DeleteIcon />
              </button>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td><CloseIcon color='red.500' /></td>
            <td>2022-01-01 00:00</td>
            <td>
              <button className="btn btn-error btn-ghost btn-xs">
                <DeleteIcon />
              </button>
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>Marjy Ferencz</td>
            <td>Office Assistant I</td>
            <td><CloseIcon color='red.500' /></td>
            <td>2022-01-01 00:00</td>
            <td>
              <button className="btn btn-error btn-ghost btn-xs">
                <DeleteIcon />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default MasterTable;
