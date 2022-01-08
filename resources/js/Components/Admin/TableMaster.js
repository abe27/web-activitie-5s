import React from "react";
import { Link } from "@chakra-ui/react";
import { AddIcon, DeleteIcon, CheckIcon, SmallCloseIcon } from '@chakra-ui/icons';
import StackSkeleton from '@/Components/StackSkeleton';

const checkIconStatus = (icon) => {
  if (icon) {
    return <CheckIcon viewBox="0 0 18 18" color='green.500' />;
  }
  return <SmallCloseIcon color='red.500' />;
}

const reDate = (dte) => {
  let d = new Date(dte);
  let m = String(d.getMonth() + 1).padStart(2, '0');
  let date = String(d.getDate()).padStart(2, '0');

  let h = String(d.getHours()).padStart(2, '0');
  let mm = String(d.getMinutes()).padStart(2, '0');
  return `${d.getFullYear()}/${m}/${date} ${h}:${mm}`;
};

const MasterTable = ({ href = null, list_data = null, handleModal, handleDelete }) => (
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
          {list_data && list_data.map((i, x) => (
            <tr key={i.id}>
              <th>{x + 1}</th>
              <td>
                <Link href={route(`${href.ref}.show`, i.id)}>{i.title}</Link>
                {/* {route(`${href.ref}.show`, i.id)} */}
              </td>
              <td>{i.description}</td>
              <td>{checkIconStatus(i.is_status)}</td>
              <td>{reDate(i.updated_at)}</td>
              <td>
                <button className="btn btn-error btn-ghost btn-xs" onClick={() => handleDelete(href, i)}>
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

export default MasterTable;
