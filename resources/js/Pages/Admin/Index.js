import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm } from '@inertiajs/inertia-react';
import Breadcrumb from '@/Components/Breadcrumb';
import TabMenu from '@/Components/TabMenu';
import MasterTable from '@/Components/Admin/TableMaster';
import ModalDialog from '@/Components/Admin/ModalDialog';
import { useToast, useDisclosure } from '@chakra-ui/react';

const bCrumb = [
  { name: "Home", href: "#" },
  { name: "Administrator", href: "#" },
  { name: "List", href: "#" },
];

const mTabMaster = [
  {
    name: "master_data", title: "ข้อมูลจัดการระบบ", children: [
      { name: "address_province", title: "จังหวัด", ref: '', element: MasterTable },
      { name: "address_district", title: "อำเภอ", ref: '', element: MasterTable },
      { name: "address_zipcode", title: "รหัสไปรษณีย์", ref: '', element: MasterTable },
      { name: "master_edu", title: "ระดับการศึกษา", ref: '', element: MasterTable },
      { name: "master_section", title: "แผนก", ref: 'administrator.section', element: MasterTable },/* get,post,put,delete */
      { name: "master_department", title: "ฝ่าย", ref: 'administrator.department', element: MasterTable },
      { name: "master_position", title: "ตำแหน่ง", ref: '', element: MasterTable },
      { name: "master_org", title: "องค์กร", ref: '', element: MasterTable },
      { name: "master_shift", title: "การเข้างาน", ref: '', element: MasterTable },
      { name: "master_whs", title: "คลังสินค้า", ref: '', element: MasterTable },
      { name: "master_whs_zone", title: "พื้นที่คลังสินค้า", ref: '', element: MasterTable },
      { name: "master_category", title: "หมวดหมู่หัวข้อ", ref: '', element: MasterTable },
    ]
  },
  {
    name: "active_data", title: "ข้อมูลหัวข้อการทำกิจกรรม", children: [
      { name: "act_title", title: "หัวข้อเรื่องกิจกรรม", ref: '', element: MasterTable },
      { name: "act_area", title: "พื้นที่การทำกิจกรรม", ref: '', element: MasterTable },
    ]
  },
];

const AdminPage = (props) => {
  const toast = useToast();
  const { delete: destroy } = useForm({});
  const [tabName, setTabName] = useState("กรุณาเลือกข้อมูลที่ต้องการจัดการ");
  const [selectElement, setSelectElement] = useState(null);
  const [postLink, setPostLink] = useState(null);
  const [objData, setObjectData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const get = async (obj) => {
    const g = await axios.get(route(`${obj.ref}.get`));
    let data = await g.data;
    if (data.length <= 0) {
      data = null;
    }
    // console.dir(data);
    setSelectElement(<obj.element href={obj} list_data={data} handleModal={onOpen} handleDelete={handleDelete} handleEdit={handleEdit}/>);
    setObjectData(obj);
  };

  const handleClick = (obj) => {
    setTabName(`จัดการข้อมูล ${obj.title}`);
    setPostLink(`${obj.ref}.post`);
    get(obj);
  };

  const handleEdit = (obj, i) => {}

  const handleDelete = (obj, i) => {
    destroy(route(`${obj.ref}.destroy`, i.id), {
      onSuccess: (r) => {
        let txt_success = 'error';
        if (r.props.flash.success) {
          txt_success = 'success';
        }

        toast({
          title: r.props.flash.header,
          description: r.props.flash.message,
          status: 'success',
          duration: 2500,
          position: 'top-right',
          isClosable: true,
        });
        console.dir(r);
        get(obj);
      }
    });
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
          <div className="p-4 mx-auto text-center">
            <p className="font-semibold">{tabName}</p>
          </div>
          {selectElement}
        </div>
      </div>
      <ModalDialog obj={objData} title="เพิ่มข้อมูล" isOpen={isOpen} onClose={onClose} routeLink={postLink} handleModal={handleClick} />
    </Authenticated>
  );
}

export default AdminPage;
