import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import img from "./images/FutureLogo.png";

const Home = () => {
  const [users, setUser] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      "https://student-dir-api.herokuapp.com/users"
    );
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`https://student-dir-api.herokuapp.com/users/${id}`);
    loadUsers();
  };

  const filteredUsers = useMemo(() => {
    if (!searchText) return users;
    let updatedUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.username.toLowerCase().includes(searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(searchText.toLowerCase()) ||
        user.dept.toLowerCase().includes(searchText.toLowerCase())
    );

    return updatedUsers;
  }, [users, searchText]);

  return (
    <div className="container">
      <div className="text-center">
        <img src={img} className="rounded" alt="FutureLogo" />
        <br />
        <h1 className="py-8">Student Directory</h1>
        <h2 className="py-4">Get | Add | Edit | Delete any details here!</h2>
        <Link className="btn btn-primary mr-2" to="/">
          AEIE
        </Link>
        <Link className="btn btn-outline-primary mr-2" to="/denied">
          ECE
        </Link>
        <Link className="btn btn-outline-primary mr-2" to="/denied">
          CSE
        </Link>
        <Link className="btn btn-outline-primary mr-2" to="/denied">
          IT
        </Link>
        <Link className="btn btn-outline-primary mr-2" to="/denied">
          EE
        </Link>
        <Link className="btn btn-outline-primary mr-2" to="/denied">
          ME
        </Link>
        <Link className="btn btn-outline-primary mr-2" to="/denied">
          CIVIL
        </Link>
      </div>
      <div className="py-4">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search and filter on basis of Name,Univ. roll no. and year(eg:1st/2nd/3rd/4th)"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          aria-label="Search"
        />
        <h1 style={{ "margin-top": "0.5rem" }}>Details of all students</h1>
        {filteredUsers.length === 0 ? (
          <div style={{ margin: "0.5rem" }}>No Results found ...</div>
        ) : (
          <table class="table border shadow">
            <thead class="thead-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">University Roll Number</th>
                <th scope="col">Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      class="btn btn-outline-primary mr-2"
                      to={`/users/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      class="btn btn-outline-success mr-2"
                      to={`/users/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      class="btn btn-outline-danger mr-2"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <footer className="text-center text-lg-start bg-light text-muted">
          For the best view use Mozila Firefox, Google Chrome Browser |
          Copyright © 2022,Student Directory. All right reserved.
        </footer>
      </div>
    </div>
  );
};

export default Home;
