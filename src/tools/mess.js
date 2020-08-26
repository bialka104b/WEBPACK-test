export const message = (info) => {
  console.log(info);
};
export const messageDOM = (info) => {
  const create = document.querySelector("div");
  create.textContent = info;
};
const a = 10553;
