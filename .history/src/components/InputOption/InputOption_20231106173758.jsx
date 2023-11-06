import React from "react";
import styled from "styled-components";

const InputOptionContainer = styled.div`
    
`

function InputOption({ title, Icon, color }) {
  return (
    <InputOptionContainer>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
