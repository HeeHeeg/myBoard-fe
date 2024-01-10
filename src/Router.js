import {createBrowserRouter} from "react-router-dom";
import Template from "./common/Template";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Template />,
//     children: [
//     {
//         path: '',
//         element: <Board />, // 기본 경로에 해당하는 리디렉션
//     },
//     {
//         path: '/',
//         element: < />,
//     },
// ]
    },
])

export default router;