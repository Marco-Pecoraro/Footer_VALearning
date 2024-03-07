class Footer extends HTMLElement {
    title = "Hello World";
    body = "Lorem ipsum dolor sit amet";
    bgColor = "red";

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            body {
                width: auto;
                height: 100vh;

                font-family: verdana;
                margin: 0;
            }

            footer {
                border-top: 1px solid black;

                width: 99%;

                display: flex;
                justify-content: space-around;
                align-items: center;

                position: absolute;
                bottom: 0;

            }

            h3 {
                font-size: 18pt;
            }

            p {
                font-size: 13pt;
            }

            #btnForum_footer {
                width: fit-content;
                padding: 11px 15px;

                font-size: 13pt;

                background-color: #4C80CB;

                border: 0px;
                border-radius: 8px;
                color: #eee;

                transition: all 0.3s ease;
            }

            #btnForum_footer:hover {
                cursor: pointer;
                background-color: #416fb1;
            }

            #divSocial_footer {
                border-left: 1px solid #000;
                padding-left: 4%;
            }

            #imgLogo1_footer{
                width:50px;
                height:50px;
            }
            #imgLogo2_footer{
                width:32px;
                height:32px;
            }


        </style>
        `

        this.innerHTML += `
        <footer>
            <div> <!-- parte forum -->
                <h3>Hai qualche Domanda?</h3>
                <p>Grazie al vostro impegno siamo riusciti a formare<br> una vera e propria <b>community</b>.</p>
                <button id="btnForum_footer">Visita il Forum</button>
            </div>
            <div> <!-- parte esercizi -->
                <h3>Esercizi in Evidenza</h3>
                <ul>
                    <li>Use of English</li>
                    <li>Reading Comprehension</li>
                </ul>
            </div>
            <div id="divSocial_footer"> <!-- parte social -->
                <p><b>Seguici:</b><img id="imgLogo1_footer"src="img/logoFacebook.svg">Facebook <img id="imgLogo2_footer" src="img/logoInstagram.svg">Instagram</p>
                <p>made by <b>I.I.S. G.Vallauri Fossano</b></p>
            </div>
        </footer>        
        `
    }

    set Title(value) {
        this.title = value;
        this.render();
    }
    set Body(value) {
        this.body = value;
        this.render();
    }

    set BackgroundColor(value) {
        this.bgColor = value;
        this.render();
    }
}

customElements.define("val-footer", Footer);



window.onload = () => {
    // let myComponent = document.createElement("val-componente")
    // myComponent.Title = "Pippo";
    // myComponent.Body = "ciao mi chiamo Pippo";
    // myComponent.BackgroundColor = "blue";
    // let body = document.getElementsByName('body')[0];
    // document.body.appendChild(myComponent)

}