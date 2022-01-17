const addToCart = () => {
    document.getElementById('shoppingCart').innerHTML = 
    `<div class="row centered">
    <div class="col-5">
     <img src="imagesMugs/CSS2.jpg" alt="" class="img-fluid rounded">
    </div>
    <div class="col-3 text-dark">
        <select>
            <option selected>1</option>
        </select>
    </div>
    <div class="col-4 text-dark">
   <h5>€14.99</h5>  
    </div>`;
    document.getElementById('total').innerHTML = '€14.99';
}
