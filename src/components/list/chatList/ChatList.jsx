import { useState } from "react";
import ListItem from "./ListItem";
import AddUser from "./addUser/AddUser";

function ChatList() {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="flex-1 overflow-scroll">
      <div className="flex items-center gap-5 p-5">
        <div className="flex flex-1 gap-5 rounded-[10px] bg-dark-blue p-[10px]">
          <img className="h-5 w-5" src="./search.png" alt="" />
          <input
            type="text"
            placeholder="Search..."
            className="flex border-none bg-transparent text-white outline-none placeholder:text-sm"
          />
        </div>
        <img
          className="h-9 w-9 cursor-pointer rounded-[10px] bg-dark-blue p-[10px]"
          src={addMode ? "./minus.png" : "./plus.png"}
          onClick={() => setAddMode((prevState) => !prevState)}
          alt=""
        />
      </div>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      {addMode && <AddUser />}
    </div>
  );
}

export default ChatList;