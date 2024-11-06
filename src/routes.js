import Colors from "@modules/colors/colors";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Colors />} path="/" />
      {/* <Route path="*" element={<NotFound />} /> Catch-all for 404 */}
    </Routes>
  );
};

export default AppRoutes;
