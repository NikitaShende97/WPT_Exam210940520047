import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <div>
      <Mycomponent />
    </div>
  );
}

function Mycomponent() {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const addMessage = async () => {
    const url = "http://localhost:7000/addMessages";
    const data = { message: message };
    await axios.post(url, data);

    const newList = [data, ...list];
    setList(newList);
    setMessage("");
    alert("Message Sent...");
  };

  const getMessages = async () => {
    const url = "http://localhost:7000/messages";
    const res = await fetch(url);
    const list = await res.json();
    const newList = [...list];
    setList(newList);
  };
  useEffect(() => getMessages(), []);
  return (
    <div>
      <div className="row bg-dark text-light fs-2  ">
        <div className="col d-flex justify-content-center align-items-center">
          Message Box
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <input
            type="text"
            value={message}
            onChange={handleMessage}
            className="form-control w-50 form-control-lg"
          ></input>
          <input
            type="button"
            value="Send"
            onClick={addMessage}
            className="mt-2 btn btn-outline-primary btn-lg"
          ></input>
        </div>
      </div>
      <div>
        {list.map((item, index) => (
          <div key={index} className="bg-secondary mt-1 text-light p-2">
            {item.message}
          </div>
        ))}
      </div>
    </div>
  );
}
