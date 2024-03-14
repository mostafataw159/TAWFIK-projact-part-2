import React from 'react'

function Infosign() {
    return (
        <div>
            <div className='container' style={{ height: "555px" }}>
                <div className='row'>
                    <div className="col-lg">
                        <div className="right-content">
                            <div className="row">
                                <div className="col-lg-12">
                                    <form id="contect-form" action="/sccusssign" method="get">
                                        <div className="row">
                                        <div className="col-lg-12">
                                              <h1 className='text-center mt-5'>Sign In </h1>
                                                  </div>
                                            <div className="col-lg-6">
                                                <fieldset><input type="name" name="name" id="name" placeholder="first Name" autocomplete="on" required="on" className='form-control my-3 mt-5' /></fieldset>
                                            </div>
                                            <div className="col-lg-6">
                                                <fieldset><input type="surname" name="surname" id="surname" placeholder="last Name" autocomplete="on" required="on" className='form-control my-3 mt-5' /></fieldset>
                                            </div>
                                            <div className="col-lg-12"><
                                                fieldset><input type="email" name="subject" id="subject" placeholder="enter your email" autocomplete="on"required="on" className='form-control my-3' /></fieldset>
                                            </div>
                                            <div className="col-lg-12"><
                                                fieldset><input type="password" name="subject" id="subject" placeholder="enter your password" autocomplete="on"required="on" className='form-control my-3' /></fieldset>
                                            </div>
                                            <div className="col-lg-12"><
                                                fieldset><input type="password" name="subject" id="subject" placeholder="confirm password" autocomplete="on"required="on" className='form-control my-3' /></fieldset>
                                            </div>
                                            <div className="col-lg-12"><fieldset><button type="submit" id="form-submit" className="btn btn-danger text-center form-control my-3">sign in from here</button></fieldset>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infosign