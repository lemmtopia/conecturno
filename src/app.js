const staffSection = document.getElementById("staff");
const slides = [
    'Sou Larissa gosto de treinar, jogar e cozinhar',
    'Me chamo Caio e sou fã de músicas dos anos 80s, principalmente do Rock. Gosto de sempre aprender algo novo, por isso vivo sempre interessado em um assunto diferente. “Constância” não faz parte do meu vocabulário.',
    'Meu nome é Paulo Emiliano e gosto muito de cinema, livros e criatividade. Estou sempre à procura de coisas novas e de caminhos diferentes.',
    'Me chamo Maria Julia, gosto de atuar, cantar, treinar, gosto de ler, amo cozinhar.',
    'Opa, sou o Eduardo e tenho 16 anos. Meu hobby é jogar vôlei nos tempos livres.',
    'Aqui é o Natan de Jesus, equilibrando a paixão por interações interpessoais e a fascinação pela lógica matemática. Fortalecendo laços e explorando equações, é assim que encontro harmonia entre duas paixões distintas.',
    '“Aspirante a poeta, gosto de escrever, ler livros, ver filmes, ouvir música e principalmente de Taylor Swift”',
    'Boa noite leitores do conecturno, hoje vim fazer uma breve apresentação para que vocês possam me conhecer um pouco melhor, Bom meu nome é Maria Eduarda e eu gosto muito de natureza, animais, esportes e passar um tempo com os meus amigos ',
    'Meu nome é Maria Eduarda Marquezi Silva,sou do 3°A E.M Noturno e sou uma apaixonada por dança, maquiagem e tecnologia. Encontro minha alegria nos ritmos da dança, me expressando através dos movimentos. Além disso, tenho um talento criativo para a maquiagem. Minha curiosidade pela tecnologia me mantém sempre atualizada, explorando as últimas inovações e incorporando-as de maneira única em minhas paixões pela dança e pela maquiagem.',
    'Meu nome é Isadora Maria, estou no terceiro ano do Santanna Noturno e sou grata por fazer parte do desenvolvimento deste projeto proposto pelos professores Julio e Gabriel. Eu sou amante da natureza, adoro esportes principalmente vôlei e também sou apaixonada pela arte em todas as suas  maneiras.',
    'Sou o Felipe Mio minha mente é um playground criativo, sempre em busca de novas formas de expressão.',
    'Prazer, me chamo Rebeca. Tenho 15 anos, adoro ler, ouvir músicas e principalmente fazer novas amizades.',
    'Me chamo Larissa, tenho muito interesse em moda e gosto de estar sempre por dentro das tendências. Também sou apaixonada por escrever poemas e amo ouvir Taylor Swift e Lana Del Rey.'
];

var currentSlide = 0;

function changeSlide() {
    staffSection.innerHTML = `<p id="message">${slides[currentSlide]}</p>`;
    if (currentSlide < slides.length) currentSlide++;
    else currentSlide = 0;

    setTimeout(changeSlide, slides[currentSlide].length * 50);
}

staffSection.innerHTML = `<p id="message">${slides[currentSlide]}</p>`;
changeSlide();