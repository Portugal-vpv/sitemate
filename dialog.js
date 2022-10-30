document.addEventListener("DOMContentLoaded", () =>{
    handleButton();
  });

const handleButton = () => {

    const getById = (idName) => document.getElementById(idName);

    const handleAcceptBtn = () => getById("confirmation-btn").addEventListener('click' , () => {
        getById("confirmation-dialog-modal-wrapper").classList.add("hide-modal");
        getById("dialog-response").textContent =('You just clicked "Yes"');
    });

    const handleCancelBtn = () => getById("cancel-btn").addEventListener('click' , () => {
        getById("confirmation-dialog-modal-wrapper").classList.add("hide-modal");
        getById("dialog-response").textContent =('You just clicked "Cancel"');
    });

    const cleanupBtns = () => {
        getById("accept-btn").removeEventListener('click');
        getById("cancel-btn").removeEventListener('click');
    }
    
    const handleDialogClick = () => {
        getById('dialog-btn-1').addEventListener('click', () => {
            console.log("Has clicked this.");
            getById("confirmation-dialog-modal-wrapper").classList.remove("hide-modal");
            handleAcceptBtn();
            handleCancelBtn();
            cleanupBtns();
         });
    }
    handleDialogClick();
}
