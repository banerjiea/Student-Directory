/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const academics = () => {
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
    caone: "",
    catwo: "",
    cathree: "",
    cafour: "",
    pcaone: "",
    pcatwo: "",
    semone: "",
    semtwo: "",
    semthree: "",
    semfour: "",
    semfive: "",
    semsix: "",
    semseven: "",
    semeight: "",
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
        Academics{" "}
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
              <td>First Semester marks</td>
              <td>{user.semone}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Second Semester marks</td>
              <td>{user.semtwo}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Third Semester marks</td>
              <td>{user.semthree}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Fourth Semester marks</td>
              <td>{user.semfour}</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Fifth Semester marks</td>
              <td>{user.semfive}</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Sixth Semester marks</td>
              <td>{user.semsix}</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Seventh Semester marks</td>
              <td>{user.semseven}</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Eighth Semester marks</td>
              <td>{user.semeight}</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Semester average marks</td>
              <td>{user.marks}</td>
            </tr>

            <tr>
              <th scope="row">10</th>
              <td>CA 1 marks</td>
              <td>{user.caone}</td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>CA 2 marks</td>
              <td>{user.catwo}</td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>CA 3 marks</td>
              <td>{user.cathree}</td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>CA 4 marks</td>
              <td>{user.cafour}</td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>PCA 1 marks</td>
              <td>{user.pcaone}</td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td>PCA 2 marks</td>
              <td>{user.pcatwo}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default academics;
