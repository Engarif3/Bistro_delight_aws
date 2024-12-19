import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import MenuList from "../pages/Our Menu/MenuList";
import CartPage from "../pages/Cart/CartPage";
import UserDash from "../Dashboard/User/UserDash";
import Login from "../pages/shared/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <MenuList></MenuList>,
      },
      {
        path: "dashboard/mycart",
        element: <CartPage></CartPage>,
      },
      {
        path: "/dashboard/adminhome",
        element: <UserDash></UserDash>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      //   {
      //     path: "order/:category",
      //     element: <Order></Order>,
      //   },
      //   {
      //     path: "login",
      //     element: <Login></Login>,
      //   },
      //   {
      //     path: "signup",
      //     element: <SignUp></SignUp>,
      //   },
      //   {
      //     path: "secret",
      //     element: (
      //       <PrivateRoute>
      //         <Secret></Secret>
      //       </PrivateRoute>
      //     ),
      //   },
    ],
  },
  //   {
  //     path: "dashboard",
  //     element: (
  //       <PrivateRoute>
  //         <Dashboard></Dashboard>
  //       </PrivateRoute>
  //     ),
  //     children: [
  //       {
  //         path: "userhome",
  //         element: <UserHome></UserHome>,
  //       },
  //       {
  //         path: "mycart",
  //         element: <MyCart></MyCart>,
  //       },
  //       {
  //         path: "payment",
  //         element: <Payment></Payment>,
  //       },
  //       // admin routes
  //       {
  //         path: "adminhome",
  //         element: (
  //           <AdminRoute>
  //             <AdminHome></AdminHome>
  //           </AdminRoute>
  //         ),
  //       },
  //       {
  //         path: "allusers",
  //         element: (
  //           <AdminRoute>
  //             <AllUsers></AllUsers>
  //           </AdminRoute>
  //         ),
  //       },
  //       {
  //         path: "addItem",
  //         element: (
  //           <AdminRoute>
  //             <AddItem></AddItem>
  //           </AdminRoute>
  //         ),
  //       },
  //       {
  //         path: "manageitems",
  //         element: (
  //           <AdminRoute>
  //             <ManageItems></ManageItems>
  //           </AdminRoute>
  //         ),
  //       },
  //     ],
  //    },
]);
