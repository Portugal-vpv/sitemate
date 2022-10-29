const handleButton = () => {
    console.log("test");
    const getById = (idName) => document.getgetElementById(idName);

    const getByClass = (className) => document.getElementsByClassName(className);
    
    
    
    const handleDialogClick = () => {
         getById('dialog-btn-1').addEventListener('click', () => {
            console.log("Has clicked this.");
         });
         console.log("Te3st");
    }
    handleDialogClick();
}

handleButton();