import React from 'react';
import EducationForm from '../../../components/forms/EducationForm';



function DBEducation() {
    // nothing yet
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 bg-warning rounded m-1 pb-2">
                    <h2>Update Education</h2>
                    <EducationForm />
                </div>
                <div className="col-md-6 bg-info rounded m-1">
                    <h2>My Education</h2>
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

export default DBEducation;