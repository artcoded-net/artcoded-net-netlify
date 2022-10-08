import { NextPage } from "next";
import dynamic from "next/dynamic";
import config from "../content/config";

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      (cms as any).init({ config });
    }) as any,
  { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage: NextPage = () => {
  return <CMS />;
};
export default AdminPage;
