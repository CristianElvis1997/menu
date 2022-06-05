// function handleSubmit(e) {
//   console.log("Hello world");
// }
let items = document.querySelectorAll('.opt-container');
// const list = document.querySelectorAll('.list');

function showMenu(value) {
	
	for (const item of items) {

		item.style.zIndex = 'auto';
        item.style.visibility = 'hidden';
        
        if(item.classList[0] === `option-container${value}`) {
            item.style.zIndex = '1';
            item.style.visibility = 'visible';
        }
    }
}