/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
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
    updatetime: "",
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
    moocs: "",
    adyear: "",
    exam: "",
    semfees: "",
    feesdate: "",
    duefees: "",
    placedcomp: "",
    placedjoin: "",
    proname: "",
    promem: "",
    promen: "",
    prodet: "",
    semone: "",
    semtwo: "",
    semthree: "",
    semfour: "",
    semfive: "",
    semsix: "",
    semseven: "",
    semeight: "",
  });

  const {
    name,
    username,
    roll,
    regno,
    email,
    phone,
    website,
    marks,
    coca,
    update,
    updatetime,
    fees,
    dob,
    address,
    dept,
    placed,
    gen,
    caone,
    catwo,
    cathree,
    cafour,
    pcaone,
    pcatwo,
    moocs,
    adyear,
    exam,
    semfees,
    feesdate,
    duefees,
    placedcomp,
    placedjoin,
    proname,
    promem,
    promen,
    prodet,
    semone,
    semtwo,
    semthree,
    semfour,
    semfive,
    semsix,
    semseven,
    semeight,
  } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://users-lptv.onrender.com/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(
      `https://users-lptv.onrender.com/users/${id}`
    );
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Student</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <h3>Personsal Info</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label>Enter date of birth</label>
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter birth date"
              name="dob"
              value={dob}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter address"
              name="address"
              value={address}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter E-mail ID"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter year"
              name="dept"
              value={dept}
              onChange={(e) => onInputChange(e)}
            />
          </div> */}
          <div className="form-group">
            <select
              value={dept}
              name="dept"
              onChange={(e) => onInputChange(e)}
              className="custom-select"
              id="inputGroupSelect01"
            >
              <option>--Enter year--</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter University Roll Number"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter College Roll Number"
              name="roll"
              value={roll}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter University Registration Number"
              name="regno"
              value={regno}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter github link"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <h3>Admission Details</h3>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter admission type"
              name="gen"
              value={gen}
              onChange={(e) => onInputChange(e)}
            />
          </div> */}
          <div className="form-group">
            <select
              value={gen}
              name="gen"
              onChange={(e) => onInputChange(e)}
              className="custom-select"
              id="inputGroupSelect01"
            >
              <option>--Select admission type--</option>
              <option value="Normal">Normal</option>
              <option value="Lateral">Lateral</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter admission year"
              name="adyear"
              value={adyear}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <select
              value={exam}
              name="exam"
              onChange={(e) => onInputChange(e)}
              className="custom-select"
              id="inputGroupSelect01"
            >
              <option>--Name of entrance exam taken--</option>
              <option value="WBJEE">WBJEE</option>
              <option value="JEE MAIN">JEE MAIN</option>
            </select>
          </div>
          <h3>Academics</h3>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Sem One Marks"
              name="semone"
              value={semone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Sem two Marks"
              name="semtwo"
              value={semtwo}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Sem three Marks"
              name="semthree"
              value={semthree}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Sem Four Marks"
              name="semfour"
              value={semfour}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Sem Five Marks"
              name="semfive"
              value={semfive}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Sem Six Marks"
              name="semsix"
              value={semsix}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Sem Seven Marks"
              name="semseven"
              value={semseven}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Sem Eight Marks"
              name="semeight"
              value={semeight}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Average Sem Marks"
              name="marks"
              value={marks}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <label>Current semester CA and PCA marks</label>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter CA 1 marks"
              name="caone"
              value={caone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter CA 2 marks"
              name="catwo"
              value={catwo}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter CA 3 marks"
              name="cathree"
              value={cathree}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter CA 4 marks"
              name="cafour"
              value={cafour}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter PCA 1 marks"
              name="pcaone"
              value={pcaone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter PCA 2 marks"
              name="pcatwo"
              value={pcatwo}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <h3>Co-curricular activities</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter MAR points"
              name="coca"
              value={coca}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter MOOCS points"
              name="moocs"
              value={moocs}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <h3>Placement record</h3>
          <div className="form-group">
            <select
              value={placed}
              name="placed"
              onChange={(e) => onInputChange(e)}
              className="custom-select"
              id="inputGroupSelect01"
            >
              <option>--Enter placement status--</option>
              <option value="Placed">Placed</option>
              <option value="Unplaced">Unplaced</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="If placed,placed in which company/companies"
              name="placedcomp"
              value={placedcomp}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Joined in which company"
              name="placedjoin"
              value={placedjoin}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <h3>Fees record</h3>
          <div className="form-group">
            <select
              value={semfees}
              name="semfees"
              onChange={(e) => onInputChange(e)}
              className="custom-select"
              id="inputGroupSelect01"
            >
              <option>--Semester fees paid up to--</option>
              <option value="SEM1">SEM1</option>
              <option value="SEM2">SEM2</option>
              <option value="SEM3">SEM3</option>
              <option value="SEM4">SEM4</option>
              <option value="SEM5">SEM5</option>
              <option value="SEM6">SEM6</option>
              <option value="SEM7">SEM7</option>
              <option value="SEM8">SEM8</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter sem fees paid(amount)"
              name="fees"
              value={fees}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <label>Enter date of payment</label>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter date of payment"
              name="feesdate"
              value={feesdate}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Due amount up to this sem"
              name="duefees"
              value={duefees}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <h3>Final year project</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Final Year Project Name"
              name="proname"
              value={proname}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Project Members Name"
              name="promem"
              value={promem}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Project Mentor Name"
              name="promen"
              value={promen}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter brief details and condition of the project"
              name="prodet"
              value={prodet}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <h3>Last updated</h3>
          <label>Last updated (today's date and current time) </label>
          <div className="form-group">
            <input
              type="date"
              className="form-control is-invalid"
              id="validationServer03"
              placeholder="Enter today's date"
              name="update"
              value={update}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="time"
              className="form-control is-invalid"
              id="validationServer03"
              placeholder="Enter today's time"
              name="updatetime"
              value={updatetime}
              onChange={(e) => onInputChange(e)}
              required
            />
            <div className="invalid-feedback">
              Please put today's date and current time
            </div>
          </div>
          <button className="btn btn-warning btn-block">
            Update Student Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
