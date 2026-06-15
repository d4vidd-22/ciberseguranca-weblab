document.addEventListener('DOMContentLoaded', function() {
    const rangeInput = document.querySelector('input[type="range"]');
    const tamanhoSalvo = localStorage.getItem('range');
    const tema = localStorage.getItem('tema');

    if (tema && tema === 'escuro')
        document.documentElement.classList.add("dark-mode");

    if (tamanhoSalvo) {
        document.body.style.fontSize = tamanhoSalvo + 'px';

        if (rangeInput)
            rangeInput.value = tamanhoSalvo;
    }

    if (rangeInput){
        rangeInput.addEventListener('input', function() {
            document.body.style.fontSize = this.value + 'px';
            localStorage.setItem('range', this.value);
        })
    }
});

function modoEscuro() {
    document.documentElement.classList.toggle('dark-mode');

    const ehEscuro = document.documentElement.classList.contains('dark-mode');
    localStorage.setItem("tema", ehEscuro ? "escuro" : "claro");
}
