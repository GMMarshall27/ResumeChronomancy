import React from 'react';
import ExperienceForm from '../../../components/forms/ExperiencesForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import decode from 'jwt-decode'


function DBExperience() {
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
    // nothing yet
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 bg-warning rounded m-1 pb-2">
                    <h2>Update Experience</h2>
                    <ExperienceForm />
                </div>
                <div className="col-md-6 bg-info rounded m-1">
                    <h2>My Experience</h2>
                    <ul className="list-group">
                                                {/* Template for Item List */}
                                                <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </div>

                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                        </div>

                    </ul>
                </div>
                
            </div>

            
        </div>
        
    );
}

export default DBExperience;