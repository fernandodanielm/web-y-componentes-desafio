function contactComponent(el){
    const compontEl = document.createElement("div");

    compontEl.innerHTML =`
    <form class="form">
        <h1 class="form__titulo">Escribime</h1>
        <div class="form__content">
            <div class="form__fields">
                <div class="field-group">
                    <label for="nombre" class="label__nombre">Nombre</label>
                    <input type="text" id="nombre" class="input__nombre">
                </div>
                <div class="field-group">
                    <label for="email" class="label__email">Email</label>
                    <input type="email" id="email" class="input__email">
                </div>
            </div>
            <div class="field-group">
                <label for="mensaje" class="label__mensaje">Mensaje</label>
                <input type="text" id="mensaje" class="input__mensaje">
            </div>
            <button class="button">Enviar</button>
        </div>
    </form>       
    `
    const form = compontEl.querySelector('.form');
    form.addEventListener("submit", function(e){
        e.preventDefault();
        console.log("el form se envió");
    });

    el.appendChild(compontEl);
}