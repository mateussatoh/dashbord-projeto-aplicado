import styled from "styled-components";
import theme from "../../global/theme";

import { MagnifyingGlass,PaperPlaneTilt } from 'phosphor-react'

import React from 'react'

export default function Input({icon}) {
  return (
    <InputContainer>
    <CustomInput/>
    <IconContainer>
      {
      icon === 'MagnifyingGlass' ? 
      <MagnifyingGlass  weight="regular" size={28} color={theme.colors.gray} /> : <PaperPlaneTilt  weight="regular" size={28} color={theme.colors.gray} />
      }
    </IconContainer>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 40px;
  border-radius: 10px;
  background: #FFF;
  overflow: hidden;
  `

const CustomInput = styled.input` 
  font-family: ${theme.fonts.paragraph};
  width: 100%;
  padding-left: 14px;
  padding-right: 14px;
  font-size: 16px;
  outline: none;
  border:none;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  padding-left: 12px;
  border-left: 1px solid ${theme.colors.gray};
`

