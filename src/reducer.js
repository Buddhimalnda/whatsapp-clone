// import { useState } from "react";

// const GetData = () => {
//     const [state, setState] = useState()
//   fetch("/data.json", {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   })
//     .then(function (response) {
//       // console.log(response);
//       return response.json();
//     })
//     .then(function (myJson) {
//       // console.log(myJson.chat.room);
//       // myJson.chat.chats.map((d) => {
//       //   // setMzj([...d.]);
//       //   console.log(d);
//       // });
//     });
// };

export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
