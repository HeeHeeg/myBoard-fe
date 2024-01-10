import {createBrowserRouter} from "react-router-dom";
import Template from "./common/Template";
import Board from "./board/Board";
import PostInsert from "./board/PostIntert";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Template/>,
        children: [
            {
                path: '/',
                element: <Board/>, // 기본 경로에 해당하는 리디렉션
            },
            {
                path: '/postInsert',
                element: <PostInsert/>,
            },
        ]
    },
])

export default router;