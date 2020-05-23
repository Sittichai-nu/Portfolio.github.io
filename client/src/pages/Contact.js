import React from "react";

const Contact = () => {
    return (
        <div class="container bg-white">
            <div class="row content-heading">
                <div class="col-md-12">
                    <h1>Contact</h1>
                </div>
            </div>
            <hr></hr>
            <form class="form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Hazard Danger"></input>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Example@Email.com"></input>
                </div>
            </form>
            <form class="was-validated">
            <div class="mb-3">
            <label for="validationTextarea">Message</label>
            <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
            </div>
            <div class="invalid-feedback">
            Please enter a message in the textarea.
            </div>
            </form>
            <button type="submit" class="btn">Submit</button>

        </div>
    )
}
export default Contact;