import React, { useState, useEffect } from "react";
import { FormAddMember } from "./styles";
import Input from "../../Common/Input";
import ButtonCommon from "../../Common/Button";
import BaseModal from "../BaseModal";
import { getTeamByName, getAllTeams, modifyTeam } from "../../../api/api.team";
import Select from "../../Common/Select";

export default function ModalEditTeam({ isOpen, toggleModal, title }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [teamName, setTeamName] = useState('');
  const [teams, setTeams] = useState([]);


  useEffect(() => {
    getAllTeams().then((res) => {
      setTeams(res.data)
      console.log(res.data);
    })
  }, [])

  const handleSelect = (event) => {
    setTeamName(event.target.value)
    console.log(teamName);
    getTeamByName(teamName).then((res) => {
      setName(res.data.nome);
      setDescription(res.data.descricao);
    });

  };

  function handleSubmit(name, description) {
    modifyTeam(name, description).then((res) => {
      console.log(res)
      setName('');
      setDescription('');
    });
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      close={toggleModal}
      title={title}
    >
      <FormAddMember>
        <Select
          title='Selecione uma equipe'
          value={teamName}
          onChange={handleSelect}
          options={teams}
        />
        <Input
          required
          placeholder="Nome"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <Input
          required
          placeholder="Descrição"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />

        <ButtonCommon
          maincolor="blue"
          title="CADASTRAR"
          onClick={() => {
            handleSubmit(name, description);
            toggleModal();
          }
          }
        />
      </FormAddMember>
    </BaseModal>
  );
}
