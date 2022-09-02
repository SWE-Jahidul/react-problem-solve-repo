import { useRef } from "react";

const UserForm = () => {
  const usernNameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = usernNameRef.current.value;
    const password = passwordRef.current.value;

    console.log(userName, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName"> UserName : </label>
        <input type="text" id="userName" ref={usernNameRef} />
      </div>
      <div>
        <label htmlFor="userName"> Password : </label>
        <input type="password" id="userName" ref={passwordRef} />
      </div>

      <button type="submit"> Register </button>
    </form>
  );
};
export default UserForm;
