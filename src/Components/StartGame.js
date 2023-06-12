import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function StartGame() {
    // const [data, setData] = useState({ nickname: "" });
    // const onInput = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setData({ ...data, [name]: value })
    // }


    // const navigate = useNavigate();

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(data.nickname);
    //     navigate('/hello')
    //     // console.log(nickname);
    // }


    return (
        <div className="container-fluid ">
            <div className="row ">
                {/* <div className="col-2">
                </div> */}
                <div className="col-12">
                    <div
                        className="card vh-100"
                        style={{ backgroundImage: 'url("https://marketplace.canva.com/EAFHm4JWsu8/1/0/1600w/canva-pink-landscape-desktop-wallpaper-HGxdJA_xIx0.jpg")' }}
                    >
                        <div
                            className="card-body">
                            <h1
                                className="text-center mt-5"
                                style={{ textShadow: "white 1px 0 5px" }}
                            >
                                The Telephone Game
                            </h1>
                            <h3
                                style={{ textShadow: "white 1px 0 5px" }}
                                className="text-center mt-5">Anonymous</h3>
                            <div className="row mt-5">
                                <div className="col-3">
                                </div>
                                <div className="col-6">
                                    <img
                                        style={{
                                            width: "10rem",
                                            border: "solid 0.1rem",
                                            borderRadius: "50%",
                                            marginLeft: "17.5rem"
                                        }}
                                        src="https://img.freepik.com/premium-vector/cute-baby-boy-profile-picture-kid-avatar_176411-4644.jpg?w=2000">
                                    </img>
                                    <p
                                        style={{ textShadow: "white 1px 0 5px" }}
                                        className="text-center mt-3">
                                        Choose a charater and a nickname
                                    </p>
                                    <input
                                        style={{ 
                                            border: "solid 0.1rem",
                                            textAlign: "center"
                                     }}
                                        className="form-control shadow-lg"
                                        type="text"></input>
                                </div>
                                <div className="col-3">
                                </div>
                            </div>
                            <div className=" row mt-2 mb-5">
                                <div className="col-5"></div>
                                <div className="col-2">
                                    <button style={{
                                        minWidth: "6rem",
                                        border: "solid 0.1rem",
                                        marginLeft: "3.9rem"
                                    }}
                                        className="btn btn-light mt-5 p-2">
                                        <FontAwesomeIcon icon={icon({ name: 'play' })} /> 
                                        <span 
                                        className="ms-2"
                                        style={{ textShadow: "white 1px 0 2px" }}
                                        >Start</span>
                                    </button>
                                </div>
                                <div className="col-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
