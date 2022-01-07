import React from "react";
import { AddIcon, DeleteIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import StackSkeleton from '@/Components/StackSkeleton';

const MasterTable = ({ list_data = null, handleModal }) => (
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
              <button className="btn btn-success btn-outline btn-circle btn-xs" onClick={handleModal}>
                <AddIcon />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {!list_data && (
            <tr>
              <th colSpan={6}>
                <StackSkeleton />
              </th>
            </tr>
          )}
          {list_data && (
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <CheckIcon color='green.500' />
              </td>
              <td>2022-01-01 00:00</td>
              <td>
                <button className="btn btn-error btn-ghost btn-xs">
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </>
);

export default MasterTable;
