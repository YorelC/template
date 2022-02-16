import React, {useState, useContext} from 'react';

import myprojectClient from '../../functions/axios/instance'

import { actions } from "../../functions/redux/actions";
import { Context } from "../../functions/redux/Store";

const PageX = () => {

  const [state, dispatch] = useContext(Context);
  const [success, setSuccess] = useState(false);
  const [info, setInfo] = useState("");

  const handleSubmit = async () => {
    await myprojectClient.post("test/co", {
      data: "DATA",
      data2: true
    }).then(
      function(response) {
        // Response du serveur à 200
        console.log(response);
        if(response.data.message === "Co success") {
          setInfo("Ajout dans la base de données.")
        }
        else{
          setInfo("Data déjà présente dans la base de donnée")

        }
        setSuccess(true);
        dispatch({type:actions.NAME_OF_FIRST_ACTION, payload: true});
    }).catch(function (error) {
        console.log(error);
    })
  }

  return(
    <div className="container">
        <h1>Hello World</h1>
        <button onClick={handleSubmit}>Test connection server</button>
        {success && state.monState1 && 
          <div>
            <h1>Connection server OK</h1>
            <h1>{info}</h1>
          </div>
          
        }
    </div>
  )
}

export default PageX;
