import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import myRoutes from "../filebased";

// const routes = [
//   {
//     path:'',
//     async lazy(){
//       const file = await import('./../../pages/index')
//       return {
//         Component: file.default
//       }
//     },
//     children:[
//       {
//         path:'',
//         async lazy(){
//           const file = await import('./../../pages/index')
//           return {
//             Component: file.default
//           }
//         }
//       },
//       {
//         path:'about',
//         async lazy(){
//           const file = await import('./../../pages/about')
//           return {
//             Component: file.default
//           }
//         }
//       },
//       {
//         path:'contacts',
//         // async lazy(){
//         //   const file = await import('./../../pages/contacts')
//         //   return {
//         //     Component: file.default
//         //   }
//         // },
//         element:'',
//         children: [
//           {
//             path:'hi',
//             async lazy(){
//               const file = await import('./../../pages/contacts')
//               return {
//                 Component: file.default
//               }
//             },
//           }
//         ]
//       },
//     ]
//   }
// ]

const router = createBrowserRouter(myRoutes() as RouteObject[]);
function RoutersProvider() {
  return <RouterProvider router={router} />;
}

export default RoutersProvider;
