import React from 'react'

function UseItem(props) {
    return (
        <div className="col-md-4 col-lg-4 col-sm-12 mt-12 mb-2">
            <div className="card">
                <div className="card-header">
                    <h5 className='text-center text-success'> {props.name}</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>
                                Email
                            </strong>
                            <span className='float-end text-success'> {props.email}</span>
                        </li>
                    </ul>

                    <li className="list-group-item">
                        <strong>
                            Phone
                        </strong>
                        <span className='float-end text-success'> {props.phone}</span>
                    </li>

                    <li className="list-group-item">
                        <strong>
                            username
                        </strong>
                        <span className='float-end text-success'> {props.username}</span>
                    </li>

                    <li className="list-group-item">
                        <strong>
                            website
                        </strong>
                        <span className='float-end text-success'> {props.website}</span>
                    </li>

                    <li className='list-group-item'>
                        <details>
                            <summary>
                                Address
                            </summary>
                            <ul className="list-group">
                                <li className='list-group-item'>
                                    <strong>City</strong>
                                    <span className='float-end text-primary'> {props.address.city}</span>
                                </li>

                                <li className='list-group-item'>
                                    <strong>Street</strong>
                                    <span className='float-end text-primary'> {props.address.street}</span>
                                </li>

                                <li className='list-group-item'>
                                    <strong>Suite</strong>
                                    <span className='float-end text-primary'> {props.address.suite}</span>
                                </li>

                                <li className='list-group-item'>
                                    <strong>Zipcode</strong>
                                    <span className='float-end text-primary'> {props.address.zipcode}</span>
                                </li>
                            </ul>

                        </details>

                    </li>

                    <li className='list-group-item'>
                        <details>
                            <summary>
                                Company
                            </summary>
                            <ul className="list-group">
                                <li className='list-group-item'>
                                    <strong>Name</strong>
                                    <span className='float-end text-success'>{props.company.name}</span>
                                </li>

                                <li className='list-group-item'>
                                    <strong>BS</strong>
                                    <span className='float-end text-success'>{props.company.bs}</span>
                                </li>

                                <li className='list-group-item'>
                                    <strong>CatchPhrases</strong>
                                    <span className='float-end text-success'>{props.company.catchPhrase}</span>
                                </li>
                            </ul>
                        </details>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default UseItem