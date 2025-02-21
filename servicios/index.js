function servisComponent(el){
    const compontEl = document.createElement("div");

    compontEl.innerHTML =`
        <section class="section3">
        <h1 class="section3__titulo">Mis servicios</h1><br>
        <div class="section3__content">
            <div class="section3__container1">
                <img src="imagensection3_1.png" class="section3__imagen1">
                <h1 class="section3__titulo_de_container">Desarrollo de paginas web</h1>
                <p>Creación de paginas webs, totalmente responsive y mobile first. Lorem impsum dolor sit amet, consectetur adipiscing elit.</p>
            </div><br>
            <div class="section3__container2">
                <img src="imagensection3_2.png" class="section3__imagen2">
                <h1 class="section3__titulo_de_container2">Animaciones para webs</h1>
                <p>Animaciones personalizadas con CSS, JS y Frameworks. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veniam tenetur nisi magni corrupti molestiae maiores, in id dicta facere, praesentium quos dolores doloribus officia illo explicabo! Sit, maiores possimus.</p>
            </div>
            <div class="section3__container3">
                <img src="imagensection3_3.png" class="section3__imagen3">
                <h1 class="section3__titulo_de_container3">Desarrollo de apps</h1>
                <p>Algo interesante sobre mi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem tempora quasi incidunt sit. Eveniet, magni rem incidunt odit quaerat, alias, earum vel repudiandae perferendis ducimus doloribus accusamus debitis eaque! Quia?</p>
            </div>
        </div>
    </section>      
    `
    const form = compontEl.querySelector('.section3');
    form.addEventListener("submit", function(e){
        e.preventDefault();
        console.log("el form se envió");
    });

    el.appendChild(compontEl);
}