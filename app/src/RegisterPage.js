//import LoginPage from "./LoginPage";
//import users from "./usersFolder/usersList";
import './RegisterPage.css'
import logo from "./logo.jpg"
import * as React from 'react';
import { useState } from "react";
//import { Button } from 'react-native';

import {Link, Route} from 'react-router-dom'
import userMap from "./usersFolder/usersList";
import { useNavigate } from "react-router-dom";
// Already registered? <a href='/' type="button" class="h">Click here</a> to login

function RegisterPage() {

    //const navigate = useNavigate();
    //const navigate = useNavigate();
    let navigate = useNavigate();

    function handleAddPicture() {
        var el = document.getElementById("input-image-id");
        var reader = new FileReader();
        var file = el.files[0];
        //add to the messages
        reader.onload = (e) => {
            logo = e.target.result
        };
        reader.readAsDataURL(file);
    }
    function conditionUserRegi() {
        //const navigate = useNavigate();
        var userName = document.getElementById("username").value;
        var passWord = document.getElementById("password").value;
        var display_name = document.getElementById("displayname").value;
        userName = userName.trim();
        passWord = passWord.trim();
        display_name = display_name.trim();
        // if one of the fieald are empty.
        if (userName == "" || passWord == "" || display_name == "") {
            alert('Please entar all fields')
            //navigate("/LoginPage");
            //return;
        }

        /*
        let len = users.length;
        //cheack if username existed
        
        for (let i = 0; i < len; i++) {

            if (users[i].username.localeCompare(username) == 0) {
                alert('This username is already taken. Please choose another one.')
                return;
            }
        }
        */

        if(userMap.hasOwnProperty(userName)){
            alert('This username is already taken. Please choose another one.')
            return;
        }
        if (userName.length < 4) {
            alert('The user name should be longer than four characters.')
            return;
        }
        if (passWord.length < 3) {
            alert('The password should be longer than three characters.')
            return;
        }
        //mean you can register
        userMap[userName] = {
            password: passWord, displayName: display_name, img: logo,
            myFriends: {}};
        
        navigate("/ChatPage", { state: {username: userName }})
    }
    return (
        <body className="App-header">
            <div class="head-line">
                <img src={logo} alt="Logo" type="logo" />
            </div>
            <div class="row justify-content-md-center">
                <div class="fooo">
                    <div class="loggg">
                        Register
                    </div>
                    <div>
                        Username:<input type="username" id="username" placeholder="Enter Username"></input>
                    </div>
                    <div>
                        Password:<input type="password" id="password" placeholder="Enter Password"></input>
                    </div>
                    <div>
                        Display Name:<input type="name" id="displayname" placeholder="Enter Name"></input>
                    </div>

                     <div>
                    <p> Add profile picture <span className='image-uploading'>
                            <label htmlFor="input-image-id">
                                <i class="bi bi-image"></i>
                            </label>
                            <input class="ng-hide" id="input-image-id" type="file" accept="image/*" onInput={handleAddPicture} />
                        </span></p>
                    </div>

                    <div className='regi'>
                    <p> Already registered? <Link to='/' class="h">Click here</Link> to login</p>
                    </div>
                   
                    <div>
                        <button types="button" class="btn btn-lg btn-primary" onClick={() => conditionUserRegi()}>
                            Register
                        </button>
                    </div>
                </div>

            </div>
        </body>
    );
}

export default RegisterPage;