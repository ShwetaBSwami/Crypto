import React from 'react'
import { Button, Glyphicon } from "react-bootstrap";
import styled from 'styled-components'


import  {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share';




const SocialMediaButtons = (props) => (
  <div>
    <FacebookShareButton
      url={props.url}
      quote={props.text}>
      <Button><img src="./fb.svg"></img></Button>
    </FacebookShareButton>

  

  
</div>
)

export default SocialMediaButtons;
