
import {CREATE_CONTACT,GET_CONTACT,UPDATE_CONTACT,DELETE_CONTACT,SELECT_CONTACT,CLEAR_CONTACT,DELETE_ALL_CONTACT} from "../constant/types"

const initialState = {
    contacts:[
        {
          "id": 1,
          "name": "Aneeq Nasir",
          "username": "Bret",
          "email": "aniqsaud99@gmail.com",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Landhi",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "0308 2727187",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": 2,
          "name": "Muhammad Saif",
          "username": "Antonette",
          "email": "saifbasheer133@gmail.com",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "0340 0174661",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "id": 3,
          "name": "Ziyad Baig",
          "username": "Samantha",
          "email": "beygz17@gmail.com",
          "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
              "lat": "-68.6102",
              "lng": "-47.0653"
            }
          },
          "phone": "0342 2861069",
          "website": "ramiro.info",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        },
        {
          "id": 4,
          "name": "Salman Zakir",
          "username": "Karianne",
          "email": "Salman.zakir@gmail.com",
          "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
              "lat": "29.4572",
              "lng": "-164.2990"
            }
          },
          "phone": "0324 8274397",
          "website": "kale.biz",
          "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
          }
        },
        {
          "id": 5,
          "name": "Shehriyar Qasim ",
          "username": "Kamren",
          "email": "shaheryar.qasim@gmail.com",
          "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
              "lat": "-31.8129",
              "lng": "62.5342"
            }
          },
          "phone": "0310 1167144",
          "website": "demarco.info",
          "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
          }
        },
        {
          "id": 6,
          "name": "Mavia Ali",
          "username": "Leopoldo_Corkery",
          "email": "mavia.ali@gmail.com",
          "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
              "lat": "-71.4197",
              "lng": "71.7478"
            }
          },
          "phone": "0330 2723502",
          "website": "ola.org",
          "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
          }
        },
        {
          "id": 7,
          "name": "Muhammad Hammad",
          "username": "Elwyn.Skiles",
          "email": "sunnyhammad1998@gmail.com",
          "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
              "lat": "24.8918",
              "lng": "21.8984"
            }
          },
          "phone": "0332 3426686",
          "website": "elvis.io",
          "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
          }
        },
              ],
    contact: null,
    selectedContacts:[],  
}

export  const contactReducer = (state = initialState, action) => {
      switch(action.type){
        case CREATE_CONTACT:
          return{
            ...state, 
            contacts:[action.payload, ...state.contacts]
          }
        case GET_CONTACT:
          let arr = state.contacts.filter((contact)=>contact.id === action.payload)
          arr = arr.values();
          for(let val of arr){
            arr = val;
          }
          return{
            ...state,
            contact: arr,
          }
          case UPDATE_CONTACT:
            return{
              ...state,
              contacts: state.contacts.map((contact)=>contact.id === action.payload.id ? action.payload:contact)
            }
          case DELETE_CONTACT:
            return{
              ...state,
              contacts: state.contacts.filter((contact)=> contact.id !== action.payload)
            }
          case SELECT_CONTACT:
            return{
              ...state,
              selectedContacts : action.payload,
            }
          case CLEAR_CONTACT:
            return{
              ...state,
              selectedContacts: []
            }
          case DELETE_ALL_CONTACT:
            return{
              ...state,
              contacts:[]
            }    
          default:
              return state;
      }
  }