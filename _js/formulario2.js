function json(){
    var obj_form = {
        nome: "",
        idade: "",
        telefone: "",
        endereco: "",
        planetas: "",
        raças: "",
        trabalho: "",
        sabor: "",
        tamanho: "",

    }


var el_nome = document.getElementById("nome");
obj_form.nome = el_nome.value;

var el_idade = document.getElementById("idade");
obj_form.idade = el_idade.value;

var el_telefone = document.getElementById("telefone");
obj_form.telefone = el_telefone.value;

var el_endereco = document.getElementById("endereco");
obj_form.endereco = el_endereco.value;

var el_planetas = document.getElementById("planetas");
obj_form.planetas = el_planetas.value;

var el_raças = document.getElementById("raças");
obj_form.raças = el_raças.value;

var el_trabalho = document.querySelector('input[name="cargo"]:checked');
obj_form.trabalho = el_trabalho.value;

var el_sabor = document.querySelector('input[name="sabor"]:checked');
obj_form.sabor = el_sabor.value;

var el_tamanho = document.querySelector('input[name="tamanho"]:checked');
obj_form.tamanho = el_tamanho.value;

var json = JSON.stringify(obj_form, null, "");
document.write("<h1>Dados para Json</h1>");
document.write(json);
}