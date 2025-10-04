import axios from "axios";

const API_BASE_URL = "https://aos-2025-2-lyart.vercel.app/"; 

const headerJson = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, 
  headers: headerJson, 
});


export async function getTarefas() {
  const { data } = await instance.get("/tarefas");
  return data; 
}

export async function updateTarefa(tarefa) {
  const { data } = await instance.put(
    `/tarefas/${tarefa.objectId}`,
    { descricao: tarefa.descricao, concluida: tarefa.concluida }
  );
  return data;
}

export async function addTarefa({ descricao }) {
  const { data } = await instance.post(
    `/tarefas`,
    { descricao }
  );
  return data;
}

export async function deleteTarefa(tarefa) {
  const { data } = await instance.delete(`/tarefas/${tarefa.objectId}`);
  return data;
}