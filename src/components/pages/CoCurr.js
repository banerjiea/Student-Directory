/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const CoCurr = () => {
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
        Co-curricular activities{" "}
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
              <td>MAR points</td>
              <td>{user.coca}</td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>MOOCS points</td>
              <td>{user.moocs}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoCurr;
