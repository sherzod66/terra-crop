const addActive = (styles: { readonly [key: string]: string }) => {
  const list = document?.getElementById("list");
  const burger = document?.getElementById("burger");
  if (burger) {
    burger.addEventListener("click", (e) => {
      list?.classList.toggle(`${styles.active}`);
      burger?.classList.toggle(`${styles.active}`);
    });
  }
};
export default addActive;
