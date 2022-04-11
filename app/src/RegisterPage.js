//import LoginPage from "./LoginPage";
import users from "./usersFolder/usersList";
import './RegisterPage.css'
import logo from "./logo.jpg"
import * as React from 'react';
import { useState } from "react";
//import { Button } from 'react-native';

//import { useNavigation  } from 'react-router-dom';

function RegisterPage() {
    //const navigation = useNavigation();
    function conditionUserRegi() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var displayName = document.getElementById("displayname").value;
        username = username.trim();
        password = password.trim();
        displayName = displayName.trim();
        // if one of the fieald are empty.
        if (username == "" || password == "" || displayName == "") {
            alert('Please entar all fields')
            //navigation.navigation('./LoginPage')
            return;
        }

        let len = users.length;
        //cheack if username existed
        
        for (let i = 0; i < len; i++) {

            if (users[i].username.localeCompare(username) == 0) {
                alert('This username is already taken. Please choose another one.')
                return;
            }
        }
        if (username.length < 4) {
            alert('The user name should be longer than four characters.')
            return;
        }
        if (password.length < 3) {
            alert('The password should be longer than three characters.')
            return;
        }
        //mean you can register
        users.push({username: username, password: password, displayName: displayName, img: logo, time: "", message: "hi"})
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
                        Already registered? <a href='/' type="button" class="h">Click here</a> to login
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