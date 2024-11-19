

import Dashboard from "@modules/dashboard";
import FormSample from "@modules/samples/formSample";
import TableSample from "@modules/samples/tableSample";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<FormSample />} path="/form" />
      <Route element={<TableSample />} path="/table" />
      <Route element={<Dashboard />} path="*" />
      {/* <Route path="*" element={<NotFound />} /> Catch-all for 404 */}
    </Routes>
  );
};

export default AppRoutes;
