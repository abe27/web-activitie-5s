import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Breadcrumb from '@/Components/Breadcrumb';
import TabMenu from '@/Components/TabMenu';
import MasterTable from '@/Components/Admin/TableMaster';

const bCrumb = [
  { name: "Home", href: "#" },
  { name: "Administrator", href: "#" },
  { name: "Reporting", href: "#" },
];

const mTabMaster = [
  {
    name: "master_data", title: "ข้อมูลจัดการระบบ", children: [
      { name: "address_province", title: "จังหวัด", ref: ''},
      { name: "address_district", title: "อำเภอ", ref: ''},
      { name: "address_zipcode", title: "รหัสไปรษณี", ref: ''},
      { name: "master_edu", title: "ระดับการศึกษา", ref: ''},
      { name: "master_section", title: "แผนก", ref: ''},
      { name: "master_department", title: "ฝ่าย", ref: ''},
      { name: "master_position", title: "ตำแหน่ง", ref: ''},
      { name: "master_org", title: "องค์กร", ref: ''},
      { name: "master_shift", title: "การเข้างาน", ref: ''},
      { name: "master_whs", title: "คลังสินค้า", ref: ''},
      { name: "master_whs_zone", title: "พื้นที่คลังสินค้า", ref: ''},
      { name: "master_category", title: "หมวดหมู่หัวข้อ", ref: ''},
    ]
  },
  {
    name: "active_data", title: "ข้อมูลหัวข้อการทำกิจกรรม", children: [
      { name: "act_title", title: "หัวข้อเรื่องกิจกรรม", ref: ''},
      { name: "act_area", title: "พื้นที่การทำกิจกรรม", ref: ''},
    ]
  },
];

const AdminPage = (props) => {
  const [tabName, setTabName] = useState("กรุณาเลือกข้อมูลที่ต้องการจัดการ");

  const handleClick = (e) => {
    console.dir(e.target);
    setTabName(e.target.id);
  }

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<Breadcrumb bcrumb={bCrumb} />}
    >
      <Head title="Administrator" />

      <div className="grid grid-cols-4 gap-4 space-x-6">
        <div className="">
          <TabMenu menu={mTabMaster} handleClick={handleClick} />
        </div>
        <div className="bg-base-200 col-span-3 rounded-box shadow">
          <MasterTable title={tabName} />
        </div>
      </div>
    </Authenticated>
  );
}

export default AdminPage;
