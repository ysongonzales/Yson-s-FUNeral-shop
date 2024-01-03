let previewContainer = document.querySelector('.product-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

       previewContainer.style.display = 'flex';

document.querySelectorAll('.trending-products.products').forEach(products =>{
    products.onclick = () =>{
     let name = products.getAttribute('data-name');
     previewBox.forEach(preview =>{
     let target = preview.getAttribute('data-target');
     if (name == target){
        preview.classList.add('active');
     }
     });
   }
});