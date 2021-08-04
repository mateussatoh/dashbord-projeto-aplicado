import React from "react";

import {
  StatusContainer,
  UserContainer,
  InfoContainer,
  IconsContainer,
  Icon,
  Name,
  MyAccountContainer,
} from "./styles";
import { SignOut, Gear } from "phosphor-react";

import Avatar from "../Common/Avatar";
import StatusIndicator from "../Common/StatusIndicator";

export default function MyUser({
  url,
  name,
  status,
  toggleUserConfigModal,
  mobile,
  username,
  getSetUsers, 
}) {
  return (
    <UserContainer mobile={mobile}>
      <MyAccountContainer>
        <Avatar src={url} small={true} circle />
        <InfoContainer>
          <Name>{name}</Name>
          <StatusContainer>
            <StatusIndicator
              username={username}
              title={status}
              color="white"
              getSetUsers={getSetUsers}
            />
          </StatusContainer>
        </InfoContainer>
      </MyAccountContainer>
      <IconsContainer>
        <Icon>
          <Gear
            onClick={toggleUserConfigModal}
            color="#FFF"
            weight="bold"
            size={30}
          />
        </Icon>
        <Icon>
          <SignOut color="#FFF" weight="bold" size={30} />
        </Icon>
      </IconsContainer>
    </UserContainer>
  );
}
