export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8081";
let nickName="";
let nivel="";
const recebe = (nome:string,lvl:string) =>{nickName=nome,nivel=lvl};
export {recebe,nickName,nivel};
