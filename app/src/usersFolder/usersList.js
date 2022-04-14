import Arthur from './profile/arthur.jpeg';
import elsa from './profile/elsa.jpg';
import tituf from './profile/tituf.jpg';
import olaf from './profile/bob.jpg';

var users = [{ username: "inbal33", password: "1020", displayName: "Inbal", img: elsa, time: "11:20", message: "hola" },
{ username: "noale10", password: "454545", displayName: "Noa", img: olaf, time: "11:40", message: "bye" },
{ username: "yoval99", password: "09876", displayName: "Amit", img: tituf, time: "12:30", message: "Hapoel Tel Aviv is the winner" },
{ username: "harel21", password: "0167", displayName: "Harel", img: Arthur, time: "11:50", message: "maccabi haifa" },
{ username: "harel21", password: "0167", displayName: "Harel", img: Arthur, time: "11:50", message: "maccabi" },
{ username: "yoval99", password: "09876", displayName: "Amit", img: tituf, time: "12:30", message: "Hapoel Tel Aviv is the winner" },
{ username: "inbal33", password: "1020", displayName: "Inbal", img: elsa, time: "11:20", message: "hola" },
{ username: "noale10", password: "454545", displayName: "Noa", img: olaf, time: "11:40", message: "bye" },
{ username: "yoval99", password: "09876", displayName: "Amit", img: tituf, time: "12:30", message: "Hapoel Tel Aviv is the winner" },
{ username: "harel21", password: "0167", displayName: "Harel", img: Arthur, time: "11:50", message: "maccabi haifa" },
{ username: "harel21", password: "0167", displayName: "Harel", img: Arthur, time: "11:50", message: "maccabi" },
{ username: "yoval99", password: "09876", displayName: "Amit", img: tituf, time: "12:30", message: "Hapoel Tel Aviv is the winner" }];


/*
var userMap = {inbal33: {password: "1020", displayName: "Inbal", img: elsa,
                        myFriends:[{friend: "noale10", chat:[{type: 1, text:"hiii", time: "10:00", mine:true},
                                                            {type: 1, text:"how are you?", time: "10:01", mine:true},
                                                            {type: 1, text:"good how are you?", time: "10:02", mine:false}] },

                                    {friend:"yoval99",  chat:[{type: 1, text:"hii!!!", time: "12:50", mine:true},
                                                            {type: 1, text:"you are so nice", time: "13:01", mine:false},
                                                            {type: 1, text:"whats up", time: "17:02", mine:false}] },

                                    {friend:"harel21",  chat:[{type: 1, text:"macabi", time: "12:50", mine:true}] }]},

            harel21: {password: "0167", displayName: "Harel", img: Arthur,
            myFriends: [{friend: "yoval99", chat:[{type: 1, text:"hola", time: "10:00", mine:true},
                                                    {type: 1, text:"hijjiij", time: "10:01", mine:false},
                                                    {type: 1, text:"???", time: "10:02", mine:true}] },
                        {friend:"inbal33",  chat:[{type: 1, text:"macabi", time: "12:50", mine:false}] }]},



            yoval99: {password: "09876", displayName: "Amit", img: tituf},
            noale10: {password: "454545", displayName: "Noa", img: olaf },
            
            tomer50: {password: "2020", displayName: "Harel", img: Arthur}};


*/

var userMap = {
    inbal33: {
        username: "inbal33", password: "1020", displayName: "Inbal", img: elsa,
        myFriends: {
            noale10: [{ type: 1, text: "hiii", time: "10:00", mine: true },
                    { type: 1, text: "how are you?", time: "10:01", mine: true },
                    { type: 1, text: "good how are you?", time: "10:02", mine: false }],


            yoval99: [{ type: 1, text: "hii!!!", time: "12:50", mine: true },
                    { type: 1, text: "you are so nice", time: "13:01", mine: false },
                    { type: 1, text: "whats up", time: "17:02", mine: false }],

            harel21: [{ type: 1, text: "macabi", time: "12:50", mine: true }]
        }
    },



    harel21: {
        username: "harel21", password: "0167", displayName: "Harel", img: Arthur,
        myFriends: {
            yoval99: [{ type: 1, text: "hola", time: "10:00", mine: true },
                    { type: 1, text: "hijjiij", time: "10:01", mine: false },
                    { type: 1, text: "???", time: "10:02", mine: true }],

            inbal33: [{ type: 1, text: "macabi", time: "12:50", mine: false }]
        }
    },
    yoval99: {
        username: "yoval99", password: "09876", displayName: "Amit", img: tituf,
        myFriends: {
            inbal33: [{ type: 1, text: "hii!!!", time: "12:50", mine: false },
                    { type: 1, text: "you are so nice", time: "13:01", mine: true },
                    { type: 1, text: "whats up", time: "17:02", mine: true }],

            harel21: [{ type: 1, text: "hola", time: "10:00", mine: false },
                    { type: 1, text: "hijjiij", time: "10:01", mine: true },
                    { type: 1, text: "???", time: "10:02", mine: false }]
        }
    },

    noale10: {
        username: "noale10", password: "454545", displayName: "Noa", img: olaf,
        myFriends: {
            inbal33: [{ type: 1, text: "hiii", time: "10:00", mine: true },
                    { type: 1, text: "how are you?", time: "10:01", mine: true },
                    { type: 1, text: "good how are you?", time: "10:02", mine: false }] ,

            tomer50:[{ type: 1, text: "how you doinnn", time: "10:00", mine: false }]
        }
    },

    tomer50: { username: "tomer50", password: "2020", displayName: "Tomer", img: Arthur,
        myFriends:{
            noale10:[{ type: 1, text: "how you doinnn", time: "10:00", mine: true }]
        }
    }
};





/*var usersno = [{
    username: "inbal33", password: "1020", displayName: "Inbal", img: elsa,
    myFriends: [{
        friend: "noale10", chat: [{ type: 1, text: "hiii", time: "10:00", mine: true },
        { type: 1, text: "how are you?", time: "10:01", mine: true },
        { type: 1, text: "good how are you?", time: "10:02", mine: false }]
    },

    {
        friend: "yoval99", chat: [{ type: 1, text: "hii!!!", time: "12:50", mine: true },
        { type: 1, text: "you are so nice", time: "13:01", mine: false },
        { type: 1, text: "whats up", time: "17:02", mine: false }]
    },

    { friend: "harel21", chat: [{ type: 1, text: "macabi", time: "12:50", mine: true }] }]
},

{
    username: "harel21", password: "0167", displayName: "Harel", img: Arthur,
    myFriends: [{
        friend: "yoval99", chat: [{ type: 1, text: "hola", time: "10:00", mine: true },
        { type: 1, text: "hijjiij", time: "10:01", mine: false },
        { type: 1, text: "???", time: "10:02", mine: true }]
    },
    { friend: "inbal33", chat: [{ type: 1, text: "macabi", time: "12:50", mine: false }] }]
}
];*/




users.sort((a, b) => a.time < b.time ? 1 : -1)
//export default users;
export default userMap;
