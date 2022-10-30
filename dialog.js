document.addEventListener("DOMContentLoaded", () =>{
    handleButton();
  });

const handleButton = () => {
    console.log("test");
    const getById = (idName) => document.getElementById(idName);

    const getByClass = (className) => document.getElementsByClassName(className);
    
    const handleDialogClick = () => {

        getById('dialog-btn-1').addEventListener('click', () => {
            console.log("Has clicked this.");
            getById("confirmation-dialog-modal-wrapper").classList.remove("hide-modal");
         });
         console.log("Te3st");
    }
    handleDialogClick();
}
