import { useEffect, useState } from "react";

export default function App() {
  return (
    <div>
      <Mycomponenet />
    </div>
  );
}
function Mycomponenet() {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);
  const [validationM, setValidation] = useState(false);
  const [uname, setName] = useState();
  const [roll, setRoll] = useState("");
  const UserName = "Nikita Shende";
  const RollNumber = "210940520047";
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const setNameFunction = () => {
    uname = "Nikita Shende";
    setName(uname);
  };
  const setRollFunction = () => {
    roll = "210940520047";
    setRoll(roll);
  };
  useEffect(() => {}, []);
  const addMessage = () => {
    if (message == "") {
      setValidation(true);
      return;
    }
    const data = { message: message };
    const newList = [...list, data];
    setList(newList);
    setMessage("");
    alert("Message Sent..");
  };

  return (
    <div>
      <div className="row bg-dark text-light">
        <div className="col-2 fs-4 p-2">Messanger App by</div>
        <div className="col-1 p-2 d-flex justify-content-start align-items-start">
          {UserName}
        </div>
        <div className="col-1 p-2 d-flex justify-content-start align-items-start">
          {RollNumber}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            value={message}
            onChange={handleMessage}
            className={
              message == "" && validationM
                ? "border-danger form-control w-50 mt-2 mx-2"
                : "border-dark form-control w-50 mt-2 mx-2"
            }
          ></input>

          <input
            type="button"
            value="Send"
            onClick={addMessage}
            className="btn btn-primary mx-2 mt-2"
          ></input>
        </div>
      </div>
      <div>
        {list.map((item, index) => (
          <div key={index} className="bg-secondary text-light mt-2 p-1">
            {item.message}
          </div>
        ))}
      </div>
    </div>
  );
}
