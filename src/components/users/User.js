/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
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
      `https://student-dir-api.herokuapp.com/users/${id}`
    );
    setUser(res.data);
  };

  let history = useHistory();

  const redirect = () => {
    history.push("/sample");
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">User Id: {user.username}</h1>
      <hr />
      <div className="container mb-3 mt-4">
        <table class="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th className="table-primary" scope="col">
                #
              </th>

              <th className="table-primary" onClick={redirect} scope="col">
                Personal info
              </th>

              <th className="table-primary" scope="col">
                Academics
              </th>
              <th className="table-primary" scope="col">
                Co-curricular
              </th>
              <th className="table-primary" scope="col">
                Admission type
              </th>
              <th className="table-primary" scope="col">
                Books + Notes
              </th>
              <th className="table-primary" scope="col">
                Placement
              </th>
              <th className="table-primary" scope="col">
                Tution fees
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Full name: {user.name}</td>

              <td>Semester: {user.marks}</td>

              <td>MAR: {user.coca}</td>
              <td>{user.gen}</td>

              <td>
                {user.books}

                <u>Click to know more</u>
              </td>

              <td>
                {user.placed}
                <u>Click to know more</u>
              </td>

              <td>{user.fees}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>DOB: {user.dob}</td>
              <td>CA : {user.ca}</td>
              <td>MOOCS: {user.moocs}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Address: {user.address}</td>
              <td>PCA : {user.pca}</td>
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
