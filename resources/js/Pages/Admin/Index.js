import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Breadcrumb from '@/Components/Breadcrumb';

const bCrumb = [
  { name: "Home", href: "#" },
  { name: "Administrator", href: "#" },
  { name: "Reporting", href: "#" },
];

const AdminPage = (props) => {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<Breadcrumb bcrumb={bCrumb} />}
    >
      <Head title="Administrator" />

      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div className="p-6 bg-white border-b border-gray-200">You're logged in! Admin</div>
      </div>
    </Authenticated>
  );
}

export default AdminPage;
