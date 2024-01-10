import {useNavigate} from "react-router";
import './Board.css';

const Board = () => {
    const nav = useNavigate();

    const handlePostInsert = () => {
        nav('/postInsert')
    }

  return <>
      <div className="button_container">
          <button onClick={handlePostInsert} className="insertButton">✏️ 글쓰기</button>
      </div>
  </>
}
export default Board;