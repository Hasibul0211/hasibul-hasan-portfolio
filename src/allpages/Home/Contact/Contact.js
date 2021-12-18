import React from 'react';
import "./Contact.css";



const Contact = () => {

    return (
        <div>
            <section className='container' id='contact'>

                <p className='contact-title'>Contact Information</p>
                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-5">
                    <div class="col">
                        <p className='getint'>get in touch</p>
                        <div class="row contact-info">
                            <div class="col-2"><i class="fas fa-map-marker-alt"></i></div>
                            <div class="col-10">
                                <h2>own location</h2>
                                <p>House no.103,East Arichpur(Modinapara),Tongi,Gazipur-1710,Bangladesh</p>
                            </div>
                        </div>

                        <div class="row contact-info">
                            <div class="col-2"><i class="fas fa-phone-alt"></i></div>
                            <div class="col-10">
                                <h2>phone number</h2>
                                <p>+8801626205938</p>
                                <p>+881906899680</p>

                            </div>
                        </div>

                        <div class="row contact-info">
                            <div class="col-2"><i class="far fa-envelope"></i></div>
                            <div class="col-10">
                                <h2>E-Mail</h2>
                                <p>mdhasibul0211@gmail.com</p>
                                <p>mdhasibul1607@gmail.com</p>
                            </div>
                        </div>
                    </div>



                    <div class="col">
                        <p className='ur-msg'>your message</p>
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="" class="form-label">First Name</label>
                                <input type="text" class="form-control" placeholder='your first name' />
                            </div>
                            <div class="col-md-6">
                                <label for="" class="form-label">Last Name</label>
                                <input type="text" class="form-control" placeholder='your last name' />
                            </div>
                            <div class="col-12">
                                <label for="" class="form-label">Email</label>
                                <input type="text" class="form-control" id="" placeholder="your email" />
                            </div>

                            <div class="mb-3 col-12">
                                <label for="exampleFormControlTextarea1" class="form-label">Write text</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='write your comment'></textarea>
                            </div>

                            <div class="col-12">
                                <button type="submit" class="btn btn-dark text-white">send message</button>
                            </div>
                        </form>


                    </div>
                </div>
            </section>
        </div>
    );


};
export default Contact;