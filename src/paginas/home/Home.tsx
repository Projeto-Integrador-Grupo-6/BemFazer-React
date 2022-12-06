
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Typography, Grid, Button } from '@material-ui/core';
import './Home.css';
import TabServico from '../../components/servicos/tabServico/TabServico';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function Home(props: any) {



  let hide = {
    display: 'none',
  }
  let show = {
    display: 'block'
  }

  let textRef = React.createRef();

  const [chatopen, setChatopen] = useState(false)


  function toggle() {
    setChatopen(!chatopen);
    console.log('Click happened');
  }


  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );


  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login")

    }
  }, [token])
  return (
    <>
      <Grid>
        <Grid>
          <Box
            className='container'>
            <div id='chatCon'>
              <div style={chatopen ? show : hide}>
                <iframe
                  className="chatframe"
                  allow="microphone;"
                  width="350"
                  height="430"
                  src="https://console.dialogflow.com/api-client/demo/embedded/e98792a9-3864-49c2-bafe-d16b84f636a2">
                </iframe>
              </div>
              <div className="pop">
                <p><img onClick={toggle} src="https://p7.hiclipart.com/preview/151/758/442/iphone-imessage-messages-logo-computer-icons-message.jpg" alt="" /></p>
              </div>
            </div>


          </Box>
        </Grid>
        <Grid xs={12} className="postagens">
          <TabServico />

        </Grid>
      </Grid>
    </>
  );
}

export default Home;