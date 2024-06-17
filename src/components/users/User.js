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
    proname: "",
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

  let history = useHistory();

  const redirect = () => {
    history.push(`/personal/${id}`);
  };

  const redirectOne = () => {
    history.push(`/academics/${id}`);
  };

  const redirectTwo = () => {
    history.push(`/cocurricular/${id}`);
  };

  const redirectThree = () => {
    history.push(`/Update/${id}`);
  };

  const redirectFour = () => {
    history.push(`/Placement/${id}`);
  };

  const redirectFive = () => {
    history.push(`/Admission/${id}`);
  };
  const redirectSix = () => {
    history.push(`/Fees/${id}`);
  };

  const redirectSeven = () => {
    history.push(`/Project/${id}`);
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">User Id: {user.username}</h1>
      <hr />

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Personal Information</div>
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">
                  Personal information of student available here
                </p>
                <button className="btn btn-light" onClick={redirect}>
                  Click to know more
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-header">Academics</div>

              <div className="card-body">
                <h5 className="card-title">Sem avg: {user.marks}</h5>
                <p className="card-text">
                  All semester marks and college internal marks displayed here
                </p>
                <button onClick={redirectOne} className="btn btn-light">
                  Click to know more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card text-white bg-success mb-3">
              <div className="card-header">Co-curricular activities</div>
              <div className="card-body">
                <h5 className="card-title">{user.coca}</h5>
                <p className="card-text">
                  MAR and MOOCS marks are displayed here
                </p>
                <button onClick={redirectTwo} className="btn btn-light">
                  Click to know more
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-white bg-danger mb-3">
              <div className="card-header">Fees Record</div>
              <div className="card-body">
                <h5 className="card-title">Paid up to : {user.semfees}</h5>
                <p className="card-text">
                  Fees record of student available here
                </p>
                <button onClick={redirectSix} className="btn btn-light">
                  Click to know more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card text-white bg-warning mb-3">
              <div className="card-header">Placement Status</div>
              <div className="card-body">
                <h5 className="card-title">{user.placed}</h5>
                <p className="card-text">
                  Placement record of student available here
                </p>
                <button onClick={redirectFour} className="btn btn-light">
                  Click to know more
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-white bg-info mb-3">
              <div className="card-header">Admission Details</div>
              <div className="card-body">
                <h5 className="card-title">{user.gen}</h5>
                <p className="card-text">
                  Admission record of student available here
                </p>
                <button onClick={redirectFive} className="btn btn-light">
                  Click to know more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card text-white bg-dark mb-3">
              <div className="card-header">Final Year Project</div>
              <div className="card-body">
                <h5 className="card-title">{user.proname}</h5>
                <p className="card-text">Status of final year project</p>
                <button onClick={redirectSeven} className="btn btn-light">
                  Click to know more
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-light mb-3">
              <div className="card-header">Last updated</div>
              <div className="card-body">
                <h5 className="card-title">{user.update}</h5>
                <p className="card-text">
                  Last updated date and time available here
                </p>
                <button onClick={redirectThree} className="btn btn-light">
                  Click to know more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
