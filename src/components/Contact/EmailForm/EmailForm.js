import { Grid, Typography } from "@material-ui/core";
import emailjs from "emailjs-com";
import React, { useState } from "react";

const EmailForm = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }

        if (e.target.name === "subject") {
            const subjectValid = e.target.value !== "";
            isFieldValid = subjectValid;
        }
        if (e.target.name === "message") {
            const messageValid = e.target.value !== "";
            isFieldValid = messageValid;
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (user.email && user.message && user.subject && user.message) {
            emailjs
                .sendForm(
                    "gmail",
                    "template_2ibbd3w",
                    e.target,
                    "user_dp8MAQTcmc9ZbBJzfqUpr"
                )
                .then(
                    (result) => {
                        if (result) {
                            alert("Email sent successfully");
                        }
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
            e.target.reset();
        } else {
            alert("Please complete all the field with valid information");
        }
    };

    return (
        <Grid container justifyContent="center">
            <div className="container">
                <Typography
                    style={{
                        textAlign: "center",
                        marginBottom: "20px",
                        color: "#dfdf26",
                    }}
                    variant="h4"
                >
                    Get In Touch
                </Typography>

                <form onSubmit={sendEmail}>
                    <div className=" form-group mx-auto">
                        <input
                            fullwidth="true"
                            className="form-control"
                            required
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Name"
                            name="name"
                        />
                    </div>

                    <div className=" form-group mx-auto">
                        <input
                            required
                            className="form-control"
                            type="email"
                            onBlur={handleBlur}
                            placeholder="Email Address"
                            name="email"
                        />
                    </div>

                    <div className=" form-group mx-auto">
                        <input
                            required
                            className="form-control"
                            type="text"
                            onBlur={handleBlur}
                            placeholder="Subject"
                            name="subject"
                        />
                    </div>

                    <div className=" form-group mx-auto">
                        <textarea
                            required
                            className="form-control"
                            multiline="true"
                            onBlur={handleBlur}
                            id=""
                            rows="5"
                            placeholder="Your message"
                            name="message"
                        ></textarea>
                    </div>

                    <button
                        className="btn common-btn"
                        variant="contained"
                        type="submit"
                    >
                        Send Message{" "}
                    </button>
                </form>
            </div>
        </Grid>
    );
};

export default EmailForm;
