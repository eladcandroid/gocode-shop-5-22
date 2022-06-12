import { useState } from "react";

function ShowTextButton() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <h1>TEXT</h1>}
    </div>
  );
}

export default ShowTextButton;
