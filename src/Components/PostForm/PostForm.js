import axios, * as others from "axios";
import React, { useState } from "react";

const PostForm = () => {
  const url = "https://63c57732f80fabd877e93ed1.mockapi.io/api/v1/users";
  const [data, setData] = useState({
    name: "",
    email: "",
    photourl: "",
  });

  function submit(e) {
    e.preventDefault();

    axios
      .post(url, {
        name: data.name,
        email: data.email,
        photourl: data.photourl,
      })
      .then((res) => {
        console.log(res.data);
      });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id="name"
          value={data.name}
          type="text"
          placeholder="name"
        ></input>
        <input
          onChange={(e) => handle(e)}
          id="email"
          value={data.email}
          type="text"
          placeholder="email"
        ></input>

        <input
          onChange={(e) => handle(e)}
          id="photourl"
          value={data.photourl}
          placeholder="Photo url"
          type="text"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
