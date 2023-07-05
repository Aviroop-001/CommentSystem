import { useState } from 'react';
import './../styles/Comment.css'
import { addNode } from '../utils/addNode';

function Comments({data}) {
    const [replybtn, setreplybtn] = useState(false)
    const [text, settext] = useState("")

    function submitHandler(data, text) {
        // e.preventDefault()
        addNode(data, text)
        setreplybtn(false);
    }

  return (
    <div className="Comments">
      <img className='img' src={data.pic} alt="" />
      <span className="name">{data.name}</span>
      <span className="comment">{data.comment}</span>
      <button onClick={() => {setreplybtn(!replybtn)}}>Reply</button>
      {replybtn && <div><input onChange={(e) => {settext(e.target.value)}}/><button onClick={submitHandler}>Submit</button></div>}
    </div>
  );
}

export default Comments;