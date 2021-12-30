/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    roll: "",
    email: "",
    phone: "",
    website: "",
    marks: "",
    coca: "",
    books: "",
    fees: "",
    dob: "",
    address: "",
    dept: "",
    placed: "",
    gen: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <div className="container mb-3 mt-4">
        <table class="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Personal info</th>
              <th scope="col">Physical info</th>
              <th scope="col">Academics</th>
              <th scope="col">Co-curricular activities</th>
              <th scope="col">Library books status</th>
              <th scope="col">Placement status</th>
              <th scope="col">Sem fees status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Full name: {user.name}</td>

              <td>Gender:{user.gen}</td>

              <td>Sem avg marks: {user.marks}</td>

              <td>MAR: {user.coca}</td>

              <td>{user.books}</td>

              <td>{user.placed}</td>

              <td>{user.fees}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>DOB: {user.dob}</td>
              <td></td>
              <td>CA avg marks:</td>
              <td>MOOCS:</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Address: {user.address}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Department and year: {user.dept}</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>University roll: {user.username}</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>College roll/ID:{user.roll}</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Email: {user.email}</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Phone: {user.phone}</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Site link: {user.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
