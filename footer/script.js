//#region componente footer
class Footer extends HTMLElement {
    connectedCallback() { this.render(); }

    render() {
        const creditsLinks = [
            { url: "https://storyset.com/", text: "storyset" },
            { url: "#", text: "sito STRATOPICO" },
            { url: "#", text: "sito MAGNIFICO" }
        ];

        const linksHTML = creditsLinks.map(link => `<a href="${link.url}">${link.text}</a>`).join(" ");

        
        this.innerHTML = `
        <style>
            body { position:relative; }

            footer {
                width: 100%;
                
                box-shadow: 0 8px 48px 8px rgba(47, 91, 234, 0.175);
                box-sizing: border-box;

                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-wrap:wrap;

                position: absolute;
                top: 100%;
                
                padding-bottom:20px;
            }

            footer h3 { font-size: 15pt; }

            footer p { font-size: 10pt; }

            #btnForum_footer {
                width: fit-content;
                padding: 9px 15px;

                font-size: 12pt;

                background-color: #4C80CB;

                border: 0px;
                border-radius: 25px;
                color: #eee;

                transition: all 0.3s ease;
            }

            #btnForum_footer:hover {
                cursor: pointer;
                background-color: #416fb1;
            }

            #divSocial_footer {
                border-left: 1px solid lightgray;
                padding-left: 4%;
                display:flex;
                flex-direction: column;
                align-items: center;
            }

            .imgLogo_footer{
                width:20px;
                height:20px;
                margin: 0px 10px;
            }
           
            #pSocial_footer{
                display: flex;
                align-items: center;
            }

            #pCredits_footer {
                font-size:9pt;  
            }

            #pCredits_footer a {
                display:inline;
                cursor:pointer;
            }

            .mostra{
                animation: anim 7s ease forwards;
            }

            @keyframes anim {
                0%{
                    opacity:0;
                    top: -50px;
                }

                20%{
                    opacity:0.1;
                }
                35%{
                    opacity:0.5;
                }
                50%{
                    opacity:1;
                    top:0px;
                }
                90%{
                    opacity:1;
                    top:0px;
                }
                100%{
                    opacity:0;
                    top:20px;
                }
            }


            #pMadeBy_footer{
                display: flex;
                align-items:center;
                justify-content:space-between;
            }

            footer li::marker { color: #4C80CB; }

            footer a {
                display: block;
                position: relative;
                padding: 1px 0;

                color: #4C80CB;
                text-decoration: none;
            }
            
            footer a::after {
                width: 100%;
                height: 1px;
            
                content: '';

                position: absolute;
                bottom: 0;
                left: 0;
                
                background-color: #4C80CB;
                opacity: 0;
                
                transition: opacity 300ms, transform 300ms;
            }
            
            footer a:hover::after,
            footer a:focus::after {
                opacity: 1;
                transform: translate3d(0, 0.2em, 0);
            }

            footer a::after {
                opacity 1;
                transform: scale(0);
                transform-origin: center;
            }

            footer a:hover::after,
            footer a:focus::after {
                transform: scale(1);
            }            

            @media screen and (max-width: 768px){
                footer{
                    display:flex;
                   
                }
            }
        </style>`

        this.innerHTML += `
        <footer>
            <div id="divForum_footer"> <!-- parte forum -->
                <h3>Hai qualche Domanda?</h3>
                <p>Grazie al vostro impegno siamo riusciti a formare<br> una vera e propria <b>community</b>.</p>
                <button id="btnForum_footer">Visita il Forum</button>
            </div>
            <div id="divEsEvidenza_footer"> <!-- parte esercizi -->
                <h3>Esercizi in Evidenza</h3>
                <ul>
                    <li>Word Formation</li>
                    <li>Sentence Trasformation</li>
                    <li>Open Cloze</li>
                </ul>
            </div>
            <div id="divSocial_footer"> <!-- parte social -->
                <p id="pSocial_footer"><b>Seguici:</b><img class="imgLogo_footer"src="img/facebook.png"><a href="https://www.facebook.com/IISVALLAURI/">Facebook</a> <img class="imgLogo_footer" src="img/instagram.png"><a href="https://www.instagram.com/iisvallauri/">Instagram</a></p>
                <p id="pMadeBy_footer"><img src="img/Valearning_logoMeta.png" width="16px" height="20px" style="margin: 0 5px"> made by <b style="margin:0 5px">I.I.S. G.Vallauri Fossano</b></p>
                <p id="pCredits_footer">Con il contributo di: ${linksHTML}</p>
                </p>
            </div>
        </footer> `

       
        let links = document.querySelectorAll("#pCredits_footer a")
        let i=1;
        resettaLink();

        setInterval(function () {
            if(i>=links.length){
                resettaLink();
                i=0;
            }
            else{
                links.forEach(link => link.style.display = "none");
                links[i].style.display = "inline";
                links[i].classList.add("mostra")
            }
            i++;
        },7000)
       
        function resettaLink(){
            links.forEach(link => link.style.display = "none");
            links.forEach(link => link.classList.remove("mostra"));
            links[0].style.display = "inline";
            links[0].classList.add("mostra")
        }
    }
}

customElements.define("val-footer", Footer);
//#endregion componente footer