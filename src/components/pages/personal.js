/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const personal = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    roll: "",
    regno: "",
    email: "",
    phone: "",
    website: "",
    marks: "",
    coca: "",
    update: "",
    fees: "",
    dob: "",
    address: "",
    dept: "",
    placed: "",
    gen: "",
    ca: "",
    pca: "",
    moocs: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(
      `https://users-lptv.onrender.com/users/${id}`
    );
    setUser(res.data);
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary mr-2" to="/">
        Back to Home
      </Link>
      <Link to={`/users/${id}`} className="btn btn-primary mr-2">
        Back to previous page
      </Link>
      <h1 className="display-4">User Id:{user.username}</h1>
      <h2>
        Personal information{" "}
        <Link
          class="btn btn-outline-primary mr-2"
          to={`/users/edit/${user.id}`}
        >
          Edit
        </Link>
      </h2>
      <hr />

      <div className="container mb-3 mt-4">
        <table class="table table-striped table-bordered table-hover">
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Full name</td>
              <td>{user.name}</td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>DOB</td>
              <td>{user.dob}</td>
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>Phone</td>
              <td>{user.phone}</td>
            </tr>

            <tr>
              <th scope="row">4</th>
              <td>Address</td>
              <td>{user.address}</td>
            </tr>

            <tr>
              <th scope="row">5</th>
              <td>Email id</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Year</td>
              <td>{user.dept}</td>
            </tr>

            <tr>
              <th scope="row">7</th>
              <td>University roll</td>
              <td>{user.username}</td>
            </tr>

            <tr>
              <th scope="row">8</th>
              <td>College roll/ID</td>
              <td>{user.roll}</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>University Registration Number</td>
              <td>{user.regno}</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Site link</td>
              <td>{user.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default personal;
