const Series = [
    {
        titulo:"Black Panther",
        imagem:"https://media.themoviedb.org/t/p/w600_and_h900_face/ubXNpxL2ASSzY0f8Hxv08pOsV2L.jpg",
        descricao:"Pantera Negra",
    },
    {
        titulo:"Iron-Man",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/mqN7RxojEiPoh3FTSTwOtwg7KAu.jpg",
        descricao:"Homem de Ferro",
    },
    {
        titulo:"Batman",
        imagem:"https://media.themoviedb.org/t/p/w600_and_h900_face/4lj1ikfsSmMZNyfdi8R8Tv5tsgb.jpg",
        descricao:"O Cavaleiro das Trevas",
    },
    {
        titulo:"Velozes e Furiosos: 10",
        imagem:"https://media.themoviedb.org/t/p/w600_and_h900_face/xNqt1Om0IlUhDOjZRCL5ewoazVV.jpg",
        descricao:"...",
    },
    {
        titulo:"Vingadores",
        imagem:"https://media.themoviedb.org/t/p/w600_and_h900_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
        descricao:"Ultimato",
    },
    {
        titulo:"Era do gelo",
        imagem:"https://media.themoviedb.org/t/p/w600_and_h900_face/jhkLlbACjti51Pkh0tt0UaS7ij2.jpg",
        descricao:"Estréia de João Carlos (Sid)",
    },
]
const listaseries = document.getElementById("listaseries")
function mostrarSeries(lista){
    listaseries.innerHTML = ""
    lista.forEach(serie => {
        listaseries.innerHTML +=`
        <div class="col-md-4">
            <div class="card card-filme h-100">
                <img src="${serie.imagem}" class="card-img-top">
                    <div class="card-body">
                     <h3>${serie.titulo}</h3>
                     <p>${serie.descricao}</p>
                    <button class="btn btn-dark" onclick="verDetalhes('${serie.titulo}')">Ver detalhes</button>
                    </div>
            </div>
        </div>
        `  
    })
}
mostrarSeries(series)
function verDetalhes(titulo){
    Swal.fire({
        title: titulo,
        text: "Mais informações do filme",
        icon: "info"
    })
}