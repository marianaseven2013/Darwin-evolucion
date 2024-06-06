let nav_DOM = document.querySelector("#nav");

nav_DOM.innerHTML = `
    <div id="nav_btn" class="nav_btn evolucion1">evolucion1</div>
    <div id="nav_btn" class="nav_btn evolucion2">evolucion2</div>
    <div id="nav_btn" class="nav_btn evolucion3">evolucion3</div>
    <div id="nav_btn" class="nav_btn evolucion4">evolucion4</div>
    <div id="nav_btn" class="nav_btn evolucion5">evolucion5</div>
    <div id="nav_btn" class="nav_btn evolucion6">evolucion6</div>
    <div id="nav_btn" class="nav_btn evolucion7">evolucion7</div>
    <div id="nav_btn" class="nav_btn evolucion8">evolucion8</div>
    <div id="nav_btn" class="nav_btn evolucion9">evolucion9</div>
    <div id="nav_btn" class="nav_btn evolucion10">evolucion10</div>
    <div id="nav_btn" class="nav_btn evolucion11">evolucion11</div>
    <div id="nav_btn" class="nav_btn evolucion12">evolucion12</div>
    <div id="nav_btn" class="nav_btn evolucion13">evolucion13</div>
    <div id="nav_btn" class="nav_btn evolucion14">evolucion14</div>
    <div id="nav_btn" class="nav_btn evolucion15">evolucion15</div>
    <div id="nav_btn" class="nav_btn evolucion16">evolucion16</div>
    <div id="nav_btn" class="nav_btn evolucion17">evolucion17</div>
    <div id="nav_btn" class="nav_btn evolucion18">evolucion18</div>
    <div id="nav_btn" class="nav_btn evolucion17">evolucion17</div>
    <div id="nav_btn" class="nav_btn evolucion20">evolucion20</div>
    <div id="nav_btn" class="nav_btn evolucion21">evolucion21</div>
    <div id="nav_btn" class="nav_btn evolucion22">evolucion22</div>
    <div id="nav_btn" class="nav_btn evolucion23">evolucion23</div>
    <div id="nav_btn" class="nav_btn evolucion24">evolucion24</div>
    <div id="nav_btn" class="nav_btn evolucion25">evolucion25</div>
`;

let todosLosBotones = document.querySelectorAll(".nav_btn");
let todosLosArticles = document.querySelectorAll(".article_evolucion");


for (let i = 0; i<todosLosBotones.length;i++){
    todosLosBotones[i].addEventListener('click',()=>{

        todosLosArticles.forEach( article =>{
            article.classList.remove('activar');
            article.classList.add('desactivar');
        })

        let dom = document.querySelector(`#evolucion${i+1}`);
        dom.classList.remove('desactivar');
        dom.classList.add('activar');
    });
}