import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import decode from 'jwt-decode'

function Dashboard() {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(token)
    const decoded = decode(token)
    console.log(decoded)
    const profileId = useParams();
    const { data } = useQuery(QUERY_ME, {
        variables: { profileId: decoded.data._id }
    })

    const profile = data?.me || {}
    console.log(profile);

      const [checked, setChecked]=React.useState(false);
      const [checkedOne, setCheckedOne] = React.useState(false);
      const [checkedTwo, setCheckedTwo] = React.useState(false);
      const [checkedThree, setCheckedThree] = React.useState(false);
      const [checkedFour, setCheckedFour] = React.useState(false);
      const [checkedFive, setCheckedFive] = React.useState(false);
      const [checkedSix, setCheckedSix] = React.useState(false);
      const [checkedSeven, setCheckedSeven] = React.useState(false);
      const [checkedEight, setCheckedEight] = React.useState(false);
      const [checkedNine, setCheckedNine] = React.useState(false);
      const [checkedTen, setCheckedTen] = React.useState(false);
      const [checkedEleven, setCheckedEleven] = React.useState(false);
      const [checkedTwelve, setCheckedTwelve] = React.useState(false);
      const [checkedThirteen, setCheckedThirteen] = React.useState(false);
      const [checkedFourteen, setCheckedFourteen] = React.useState(false);
    
      const handleChange = () => {
          setChecked(!checked)
      }
      const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
      };
      const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
      };
      const handleChangeThree = () => {
        setCheckedThree(!checkedThree);
      };
      const handleChangeFour = () => {
        setCheckedFour(!checkedFour);
      };
      const handleChangeFive = () => {
        setCheckedFive(!checkedFive);
      };
      const handleChangeSix = () => {
        setCheckedSix(!checkedSix);
      };
      const handleChangeSeven = () => {
        setCheckedSeven(!checkedSeven);
      };
      const handleChangeEight = () => {
        setCheckedEight(!checkedEight);
      };
      const handleChangeNine = () => {
        setCheckedNine(!checkedNine);
      };
      const handleChangeTen = () => {
        setCheckedTen(!checkedTen);
      };
      const handleChangeEleven = () => {
        setCheckedEleven(!checkedEleven);
      };
      const handleChangeTwelve = () => {
        setCheckedTwelve(!checkedTwelve);
      };
      const handleChangeThirteen = () => {
        setCheckedThirteen(!checkedThirteen);
      };
      const handleChangeFourteen = () => {
        setCheckedFourteen(!checkedFourteen);
      };
    return (
        <div className="container ">
            <div className="row flex-lg-row-reverse align-items-center">
                <div className="col bg-primary rounded m-1 mt-3 p-3 text-center text-white">
                    <h1>User Dashboard</h1>
                </div>
            </div>            
            <div class="row">
                <div className="col-lg-4 bg-primary rounded m-1 pb-4 mt-4 text-white">
                    <h2>Education</h2>
                    <ul className="list-group checkbox-list-group">
                        {/* Template for Item List */}
                        <a href="#dashboard" className="list-group-item list-group-item-action" aria-current="true"  >
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            checked={checked}
                                            onChange={handleChange}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">School</h5>
                                        </div>
                                        <p className="mb-1">Degree and Major</p>
                                        <small>Year of Graduation</small>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#dashboard" className="list-group-item list-group-item-action" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            checked={checkedOne}
                                            onChange={handleChangeOne}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">School</h5>
                                        </div>
                                        <p className="mb-1">Degree and Major</p>
                                        <small>Year of Graduation</small>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#dashboard" className="list-group-item list-group-item-action" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            checked={checkedTwo}
                                            onChange={handleChangeTwo}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">School</h5>
                                        </div>
                                        <p className="mb-1">Degree and Major</p>
                                        <small>Year of Graduation</small>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#dashboard" className="list-group-item list-group-item-action" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            checked={checkedThree}
                                            onChange={handleChangeThree}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">School</h5>
                                        </div>
                                        <p className="mb-1">Degree and Major</p>
                                        <small>Year of Graduation</small>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#dashboard" className="list-group-item list-group-item-action" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            checked={checkedFour}
                                            onChange={handleChangeFour}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">School</h5>
                                        </div>
                                        <p className="mb-1">Degree and Major</p>
                                        <small>Year of Graduation</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </ul>
                </div>
                <div className="col-lg bg-primary rounded m-1 mt-4 pb-2 text-white">
                    <h2>Skills</h2>
                    <ul className="list-group">
                        {/* Template for Item List */}
                        <a href="#dashboard" className="list-group-item list-group-item-action" aria-current="true"  >
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            checked={checkedFive}
                                            onChange={handleChangeFive}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Skill Name</h5>
                                        </div>
                                        <p className="mb-1">Skill Type</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#dashboard" className="list-group-item list-group-item-action">
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            checked={checkedSix}
                                            onChange={handleChangeSix}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Skill Name</h5>
                                        </div>
                                        <p className="mb-1">Skill Type</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#dashboard" className="list-group-item list-group-item-action">
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            checked={checkedSeven}
                                            onChange={handleChangeSeven}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Skill Name</h5>
                                        </div>
                                        <p className="mb-1">Skill Type</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#dashboard" className="list-group-item list-group-item-action">
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            checked={checkedEight}
                                            onChange={handleChangeEight}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Skill Name</h5>
                                        </div>
                                        <p className="mb-1">Skill Type</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#dashboard" className="list-group-item list-group-item-action">
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            checked={checkedNine}
                                            onChange={handleChangeNine}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Skill Name</h5>
                                        </div>
                                        <p className="mb-1">Skill Type</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        
                        <a href="#dashboard" className="list-group-item list-group-item-action">
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Skill Name</h5>
                                        </div>
                                        <p className="mb-1">Skill Type</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#dashboard" className="list-group-item list-group-item-action">
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Skill Name</h5>
                                        </div>
                                        <p className="mb-1">Skill Type</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </ul>
                </div>
                <div className="col-lg bg-primary rounded m-1 mt-4 pb-2 text-white">
                    <h3>Experience</h3>
                    <ul className="list-group">
                        {/* Template for Item List */}
                        <a href="#dashboard" className="list-group-item list-group-item-action" aria-current="true"  >
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            checked={checkedTen}
                                            onChange={handleChangeTen}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Organization</h5>
                                        </div>
                                        <p className="mb-1">Title</p>
                                        <small>Years Active</small>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#dashboard" className="list-group-item list-group-item-action">
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            checked={checkedEleven}
                                            onChange={handleChangeEleven}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Organization</h5>
                                        </div>
                                        <p className="mb-1">Title</p>
                                        <small>Years Active</small>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#dashboard" className="list-group-item list-group-item-action">
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            checked={checkedTwelve}
                                            onChange={handleChangeTwelve}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Organization</h5>
                                        </div>
                                        <p className="mb-1">Title</p>
                                        <small>Years Active</small>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#dashboard" className="list-group-item list-group-item-action">
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            checked={checkedThirteen}
                                            onChange={handleChangeThirteen}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Organization</h5>
                                        </div>
                                        <p className="mb-1">Title</p>
                                        <small>Years Active</small>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#dashboard" className="list-group-item list-group-item-action">
                            <div className="container">
                                <div className="row">
                                    <div className="col-1 p-0">   
                                        <label>
                                            <input
                                            type="checkbox"
                                            checked={checkedFourteen}
                                            onChange={handleChangeFourteen}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Organization</h5>
                                        </div>
                                        <p className="mb-1">Title</p>
                                        <small>Years Active</small>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </ul>
                </div>
            </div>
            <div className="row justify-content-center">
                <button className="col-6 bg-success rounded m-1 text-center text-white">
                    <h1>Generate Resume</h1>
                </button>
            </div>
        </div>
        
    );
}

export default Dashboard;