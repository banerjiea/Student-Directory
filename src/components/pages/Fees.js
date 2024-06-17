/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Fees = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    roll: "",
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
    semfees: "",
    feesdate: "",
    duefees: "",
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
        Semester Fees status{" "}
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
              <td>Semester fees paid up to</td>
              <td>{user.semfees}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Semester fees paid(amount)</td>
              <td>{user.fees}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Date of payment</td>
              <td>{user.feesdate}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Due amount up to this semester</td>
              <td>{user.duefees}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fees;
