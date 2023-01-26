import { Avatar, Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostForm from "../PostForm/PostForm";
import "./Table.css";
const Table = () => {
  const [tableInfos, setTableInfos] = useState([]);
  const [selection, setSelection] = useState(["1"]);

  const toggleRow = (id) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((tableInfo) => tableInfo !== id)
        : [...current, id]
    );

  const toggleAll = () =>
    setSelection((current) =>
      current.length === tableInfos.length
        ? []
        : tableInfos.map((tableInfo) => tableInfo.id)
    );

  useEffect(() => {
    fetch("https://63c57732f80fabd877e93ed1.mockapi.io/api/v1/users")
      .then((res) => res.json())
      .then((data) => setTableInfos(data));
  }, []);
  return (
    <div className="table_style">
      <h1>Table Selection</h1>
      <PostForm></PostForm>
      <div className="table_form">
        <table>
          <th>
            <Checkbox
              onChange={toggleAll}
              checked={selection.length === tableInfos.length}
              indeterminate={
                selection.length > 0 && selection.length !== tableInfos.length
              }
              transitionDuration={0}
            />
          </th>
          <th>User</th>
          <th>Name</th>
          <th>Email Address</th>
          <th>Job</th>

          {tableInfos.map((tableInfo) => {
            const selected = selection.includes(tableInfo.id);
            return (
              <tr key={tableInfo.id} className={selected}>
                <Checkbox
                  checked={selection.includes(tableInfo.id)}
                  onChange={() => toggleRow(tableInfo.id)}
                  transitionDuration={0}
                />

                <td>
                  <Avatar
                    alt="Remy Sharp"
                    src={tableInfo.avatar}
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                </td>
                <td>{tableInfo.name}Robert</td>
                <td>{tableInfo.email}</td>
                <td>Engineer</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Table;
