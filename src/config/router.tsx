import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  Home,
  Login,
  Vendors,
  VendorDetails,
  Transactions,
  TransactionDetails,
} from "@/pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="vendors">
        <Route index element={<Vendors />} />
        <Route path=":id" element={<VendorDetails />} />
      </Route>
      <Route path="transactions">
        <Route index element={<Transactions />} />
        <Route path=":id" element={<TransactionDetails />} />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
  )
);

export default router;
