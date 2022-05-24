import React from "react";
import ReactDOM from "react-dom";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import "./styles.css";

import char0 from "./images/Char0.png";
import char1 from "./images/Char1.png";
import char2 from "./images/Char2.png";
import char3 from "./images/Char3.png";
import char4 from "./images/Char4.png";
import char5 from "./images/Char5.png";
import charX from "./images/CharX.png";
import stage1 from "./images/Stage1.jpg";
import stage2 from "./images/Stage2.jpg";
import stage3 from "./images/Stage3.jpg";
import stage4 from "./images/Stage4.jpg";
import button from "./images/Button.png";
import buttonF from "./images/ButtonF.png";
import button0 from "./images/Button0.png";
import button1 from "./images/Button1.png";
import button2 from "./images/Button2.png";
import button3 from "./images/Button3.png";
import buttonH from "./images/ButtonH.png";
import help from "./images/Help.jpg";
import card1 from "./images/1.jpg";
import card2 from "./images/2.jpg";
import card3 from "./images/3.jpg";
import card4 from "./images/4.jpg";
import card5 from "./images/5.jpg";
import card6 from "./images/6.jpg";
import card7 from "./images/7.jpg";
import card8 from "./images/8.jpg";
import card9 from "./images/9.jpg";
import card10 from "./images/10.jpg";
import card11 from "./images/11.jpg";
import card12 from "./images/12.jpg";
import card13 from "./images/13.jpg";
import card14 from "./images/14.jpg";
import card15 from "./images/15.jpg";
import card16 from "./images/16.jpg";
import card17 from "./images/17.jpg";
import card18 from "./images/18.jpg";
import card19 from "./images/19.jpg";
import card20 from "./images/20.jpg";
import card21 from "./images/21.jpg";
import card22 from "./images/22.jpg";
import card23 from "./images/23.jpg";
import card24 from "./images/24.jpg";
import card25 from "./images/25.jpg";
import card26 from "./images/26.jpg";
import card27 from "./images/27.jpg";
import card28 from "./images/28.jpg";
import card29 from "./images/29.jpg";
import card30 from "./images/30.jpg";
import card31 from "./images/31.jpg";
import card32 from "./images/32.jpg";
import card33 from "./images/33.jpg";
import card34 from "./images/34.jpg";
import card35 from "./images/35.jpg";
import card36 from "./images/36.jpg";
import card37 from "./images/37.jpg";
import card38 from "./images/38.jpg";
import card39 from "./images/39.jpg";
import card40 from "./images/40.jpg";
import card41 from "./images/41.jpg";
import card42 from "./images/42.jpg";
import card43 from "./images/43.jpg";
import card44 from "./images/44.jpg";
import card45 from "./images/45.jpg";
import card46 from "./images/46.jpg";
import card47 from "./images/47.jpg";
import card48 from "./images/48.jpg";
import card49 from "./images/49.jpg";
import card50 from "./images/50.jpg";
import card51 from "./images/51.jpg";
import card52 from "./images/52.jpg";
import card53 from "./images/53.jpg";
import card54 from "./images/54.jpg";
import card55 from "./images/55.jpg";
import card56 from "./images/56.jpg";
import card57 from "./images/57.jpg";
import card58 from "./images/58.jpg";
import card59 from "./images/59.jpg";
import card60 from "./images/60.jpg";
import card62 from "./images/62.jpg";
import card63 from "./images/63.jpg";
import box from "./images/Box.png";

const url = window.location.host;
const queryParams = new URLSearchParams(window.location.search);
var verifyToken = queryParams.get("v");
var lvl = 1;
var time = 0;
var message = "Loading...";
var timeout;
var delay = 60000;

class App extends React.Component {
  crypt = {
    RIQL: 1,
    CEPM: 2,
    OBIO: 3,
    EKXH: 4,
    HQUS: 5,
    CUZO: 6,
    NIEH: 7,
    ZHGZ: 8,
    NFOR: 9,
    VAZB: 10,
    FGXY: 11,
    EHDZ: 12,
    WGRA: 13,
    VKRH: 14,
    KMOU: 15,
    BLQF: 16,
    XIBP: 17,
    PYGA: 18,
    AMEY: 19,
    BXEQ: 20,
    JQVL: 21,
    XERB: 22,
    QPIB: 23,
    FDOQ: 24,
    ORWR: 25,
    KHNX: 26,
    FSCS: 27,
    MYUR: 28,
    WLZX: 29,
    EKVP: 30,
    RESM: 31,
    WMKC: 32,
    WYSO: 33,
    LEPB: 34,
    HHEI: 35,
    OWQU: 36,
    EXPL: 37,
    FHED: 38,
    DEKU: 39,
    AVDA: 40,
    KARK: 41,
    PPXO: 42,
    QEEC: 43,
    DHJN: 44,
    RHHP: 45,
    BFQN: 46,
    UEHB: 47,
    DYVO: 48,
    TZIT: 49,
    DJKJ: 50,
    FUYT: 51,
    MURA: 52,
    MYAI: 53,
    KPKY: 54,
    RHKG: 55,
    IJWB: 56,
    JVDI: 57,
    QABP: 58,
    TBNT: 59,
    AQPT: 60,
    HOTE: 62,
    HOTF: 63
  };
  state = {
    actualButton: button,
    gameState: 0, // 0 : loading / 1 : game / 2 : endoflevel / -2 : endofgame / -1 : starting form / -3 : ask for mdp / -4 : Délai expiré
    gameInfo: 0,
    textInfo: [
      "Vous n'êtes pas obligés de faire tous les niveaux à la suite. Vous pouvez arrêter à tout moment, votre progression sera sauvegardée automatiquement grâce à votre code de connexion. Il vous suffira de cliquer sur le lien qui vous a été donné pour revenir dans le jeu.",
      "Trop Facile : Le niveau est plus simple que le niveau précédent. Correct : Le niveau est de la bonne difficulté. Trop Dur : Ce niveau est trop difficile par rapport au précédent.",
      "À la fin de chaque niveau il vous sera demandé si la progression en difficulté est correcte. On parle bien ici, de progression en difficulté. Les premiers niveaux vont vous sembler 'faciles', ce qui est normal. Gardez bien à l'esprit, que le jeu suit une montée en difficulté progressive et c'est cette montée qui nous intéresse dans ce test.",
      "Bonjour à tous et merci pour votre participation à l'équilibrage de la difficulté des niveaux de Logic Hotel."
    ],
    helpState: 0,
    buttonValid: 0,
    buttonText: "VALIDER",
    nbMoves: 0,
    nbTry: 0,
    sizex: 0,
    adjust: 1,
    adjustTab: 1,
    imageCard: [
      card1,
      card2,
      card3,
      card4,
      card5,
      card6,
      card7,
      card8,
      card9,
      card10,
      card11,
      card12,
      card13,
      card14,
      card15,
      card16,
      card17,
      card18,
      card19,
      card20,
      card21,
      card22,
      card23,
      card24,
      card25,
      card26,
      card27,
      card28,
      card29,
      card30,
      card31,
      card32,
      card33,
      card34,
      card35,
      card36,
      card37,
      card38,
      card39,
      card40,
      card41,
      card42,
      card43,
      card44,
      card45,
      card46,
      card47,
      card48,
      card49,
      card50,
      card51,
      card52,
      card53,
      card54,
      card55,
      card56,
      card57,
      card58,
      card59,
      card60,
      card60,
      card62,
      card63
    ],
    imageChar: [char0, char1, char2, char3, char4, char5, charX],
    draggedBird: -1,
    targetLine: -1,
    targetX: -1,
    position: [
      [6, 6, 6, 6],
      [6, 6, 6, 6],
      [6, 6, 6, 6],
      [6, 6, 6, 6]
    ],
    birds: [1, 1, 1, 1, 1, 1],
    birdsDraggable: ["", "", "", "", "", ""],
    posDraggable: [
      ["True", "True", "True", "True"],
      ["True", "True", "True", "True"],
      ["True", "True", "True", "True"],
      ["True", "True", "True", "True"]
    ],
    solutions: [
      "",
      "200",
      "222",
      "001",
      "021",
      "010",
      "122",
      "111",
      "103",
      "112",
      "3332",
      "2221",
      "1101",
      "0111",
      "2233",
      "2031",
      "2322",
      "0023",
      "0321",
      "3033",
      "1223",
      "0011",
      "1002",
      "2332",
      "0133",
      "02222",
      "01000",
      "20221",
      "12221",
      "02002",
      "21232",
      "31033",
      "23313",
      "11212",
      "03201",
      "12101",
      "20003",
      "32333",
      "22121",
      "31133",
      "32232",
      "23032",
      "13121",
      "100001",
      "232213",
      "002110",
      "103102",
      "132031",
      "033122",
      "200212",
      "113333",
      "331030",
      "220133",
      "101203",
      "233231",
      "021012",
      "202112",
      "230001",
      "003323",
      "311110",
      "003100",
      "XXXXXX",
      "2100",
      "1122"
    ]
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    this.getData();
  }

  resize() {
    if (isNaN(lvl)) return;
    this.state.sizex = window.innerWidth;
    this.setState({
      adjust: Math.min(
        this.state.sizex / (150 * this.state.solutions[lvl].length + 60),
        1
      )
    });
    this.setState({
      adjustTab: Math.min(this.state.sizex / (200 * 4 + 60), 1)
    });
  }

  clickHelp = () => {
    if (this.state.helpState == 0) {
      this.setState({ helpState: 1 });
    } else {
      this.setState({ helpState: 0 });
    }
    window.scrollTo(0, 0);
  };

  clickInfo = () => {
    this.setState({ gameInfo: this.state.gameInfo - 1 });
    window.scrollTo(0, 0);
  };

  getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener("load", () => {
      // update the state of the component with the result here
      var data = xhr.responseText;
      var jsonResponse = JSON.parse(data);
      lvl = parseInt(jsonResponse["lvl"]);
      time = jsonResponse["time"];
      if (verifyToken == "force") {
        lvl = this.crypt[queryParams.get("lvl")];
        console.log(lvl);
        if (!Number.isInteger(lvl)) {
          lvl = 61;
        }
        jsonResponse["status"] = "ok";
      }
      if (jsonResponse["status"] == "ok") {
        if (lvl == 0) {
          this.setState({ gameState: -1 });
        } else {
          if (lvl != 61) {
            if (lvl == 1) {
              this.state.gameInfo = this.state.textInfo.length;
            } else {
              if (verifyToken != "force") {
                timeout = setTimeout(
                  function () {
                    this.setState({ gameState: -4 });
                  }.bind(this),
                  delay
                );
              }
            }
            this.setState({ gameState: 1 });
          } else {
            this.setState({ gameState: -2 });
          }
        }
        this.resize();
      } else {
        this.setState({ gameState: -3 });
      }
    });
    // open the request with the verb and the url
    xhr.open(
      "GET",
      "https://www.pcspace.com/logichotel/getPlayerData.php" +
        window.location.search
    );
    // send the request
    xhr.send();
  }

  drag = (event) => {
    // On vient de prendre un oiseau
    this.state.draggedBird = event.idBird;
  };

  dragLine = (event) => {
    // On vient de prendre un oiseau
    this.state.draggedBird = this.state.position[event.idLine][event.idPos];
  };

  hit = (event) => {
    // On va lâcher l'oiseau
  };

  drop = (event) => {
    //    console.log("test");
    if (verifyToken != "force") {
      clearTimeout(timeout);
      timeout = setTimeout(
        function () {
          this.setState({ gameState: -4 });
        }.bind(this),
        delay
      );
    }
    this.state.nbMoves++;
    // On vient de lâcher l'oiseau
    this.state.targetLine = event.dropData.idLine;
    this.state.targetX = event.dropData.idPos;
    //    console.log(this.state.targetLine);
    //    console.log(this.state.targetX);
    if (this.state.targetLine === -1) {
      // On lâche l'oiseau sur la ligne du haut
      this.state.birds[this.state.draggedBird] = 1;
      document.getElementById(
        "bird" + this.state.draggedBird
      ).src = this.state.imageChar[this.state.draggedBird];
      this.state.birdsDraggable[this.state.draggedBird] = "";
      for (var i = 0; i < 4; i++) {
        for (var x = 0; x < 4; x++) {
          if (this.state.position[i][x] === this.state.draggedBird) {
            this.state.position[i][x] = 6;
            this.state.posDraggable[i][x] = "True";
          }
        }
      }
      this.setState({ draggedBird: 0 });
    } else {
      if (
        this.state.position[this.state.targetLine][this.state.targetX] === 6
      ) {
        // Laché sur une case vide
        // On commence par retirer toute copie de cet oiseau
        for (i = 0; i < 4; i++) {
          for (x = 0; x < 4; x++) {
            if (this.state.position[i][x] === this.state.draggedBird) {
              this.state.position[i][x] = 6;
              this.state.posDraggable[i][x] = "True";
            }
          }
        }

        // On applique le déplacement
        this.state.birds[this.state.draggedBird] = 0.2;
        this.state.position[this.state.targetLine][
          this.state.targetX
        ] = this.state.draggedBird;
        document.getElementById(
          "pos" + this.state.targetLine + this.state.targetX
        ).src = this.state.imageChar[this.state.draggedBird];
        this.state.birdsDraggable[this.state.draggedBird] = "False";
        this.state.posDraggable[this.state.targetLine][this.state.targetX] = "";
        this.setState({ draggedBird: 0 });
      } else {
        // On doit faire un swap
        for (i = 0; i < 4; i++) {
          for (x = 0; x < 4; x++) {
            if (this.state.position[i][x] === this.state.draggedBird) {
              this.state.position[i][x] = 6;
              this.state.posDraggable[i][x] = "True";
            }
          }
        }

        var swappedBird = this.state.position[this.state.targetLine][
          this.state.targetX
        ];
        document.getElementById(
          "bird" + swappedBird
        ).src = this.state.imageChar[swappedBird];
        this.state.birdsDraggable[swappedBird] = "";
        this.state.birds[swappedBird] = 1;

        // On applique le déplacement
        this.state.birds[this.state.draggedBird] = 0.2;
        this.state.position[this.state.targetLine][
          this.state.targetX
        ] = this.state.draggedBird;
        document.getElementById(
          "pos" + this.state.targetLine + this.state.targetX
        ).src = this.state.imageChar[this.state.draggedBird];
        this.state.birdsDraggable[this.state.draggedBird] = "False";
        this.state.posDraggable[this.state.targetLine][this.state.targetX] = "";
        this.setState({ draggedBird: 0 });
      }
    }
    // On déplace tous les éléments à gauche
    for (i = 0; i < 4; i++) {
      for (var n = 0; n < 4; n++) {
        for (x = 0; x < 3; x++) {
          if (
            this.state.position[i][x] == 6 &&
            this.state.position[i][x + 1] != 6
          ) {
            this.state.position[i][x] = this.state.position[i][x + 1];
            this.state.position[i][x + 1] = 6;
            this.state.posDraggable[i][x] = "";
            this.state.posDraggable[i][x + 1] = "True";
          }
        }
      }
    }

    // Vérification si tous les oiseaux ont été déplacés
    var nbBird = 0;
    for (i = 0; i < 4; i++) {
      for (x = 0; x < 4; x++) {
        if (this.state.position[i][x] != 6) {
          nbBird++;
        }
      }
    }
    if (nbBird == this.state.solutions[lvl].length) {
      this.state.actualButton = button;
      this.setState({ buttonValid: 1 });
    } else {
      this.setState({ buttonValid: 0 });
    }
  };

  checkSol = () => {
    this.state.nbTry++;
    // Vérification si le niveau est terminé
    var nbokBird = 0;
    for (var i = 0; i < 4; i++) {
      for (var x = 0; x < 4; x++) {
        if (this.state.position[i][x] != 6) {
          if (
            parseInt(
              this.state.solutions[lvl].substr(this.state.position[i][x], 1)
            ) === i
          ) {
            nbokBird++;
          }
        }
      }
    }
    if (nbokBird == this.state.solutions[lvl].length) {
      for (i = 0; i < 4; i++) {
        for (x = 0; x < 4; x++) {
          this.state.birdsDraggable[i] = "False";
          this.state.posDraggable[i][x] = "False";
        }
      }
      this.setState({ gameState: 2 });
    } else {
      this.state.actualButton = buttonF;
      this.setState({ buttonValid: 1 });
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <table class="top">
            <tr class="top" height={Math.trunc(100 * this.state.adjustBanner)}>
              <td></td>
              <td width="50%">
                <h1>
                  <b>BANKIIIZ EDITIONS</b>
                </h1>
                Cool and Fresh Games
              </td>
              <td></td>
            </tr>
          </table>{" "}
          {lvl > 0 ? (
            <h4>
              Déplacez les monstres en essayant de respecter TOUTES les
              indications de la carte.
            </h4>
          ) : (
            <h4>
              Bankiiiz Editions vous propose d'essayer en ligne son jeu Logic
              Hotel.
              <br />
              <br />
              Sélectionnez un niveau :
            </h4>
          )}
          <h4>
            {lvl == 2 ? (
              "Exemple 1"
            ) : (
              <a href={"https://" + url + "/?v=force&lvl=CEPM"}>Exemple 1</a>
            )}{" "}
            {lvl == 11 ? (
              "Exemple 2"
            ) : (
              <a href={"https://" + url + "/?v=force&lvl=FGXY"}>Exemple 2</a>
            )}{" "}
            {lvl == 24 ? (
              "Exemple 3"
            ) : (
              <a href={"https://" + url + "/?v=force&lvl=FDOQ"}>Exemple 3</a>
            )}{" "}
            {lvl == 40 ? (
              "Exemple 4"
            ) : (
              <a href={"https://" + url + "/?v=force&lvl=AVDA"}>Exemple 4</a>
            )}{" "}
            {lvl == 60 ? (
              "Exemple 5"
            ) : (
              <a href={"https://" + url + "/?v=force&lvl=AQPT"}>Exemple 5</a>
            )}
          </h4>
          {lvl > 0 ? null : (
            <div>
              <iframe
                width="420"
                height="315"
                src="https://www.youtube.com/embed/9SzsqfgXW1w?autoplay=1&mute=1"
              ></iframe>
            </div>
          )}
        </div>
        {this.state.gameState == -4 ? (
          <div>
            <form action={"https://" + url} method="get">
              <input id="v" name="v" type="hidden" value={verifyToken} />
              <h1>Niveau interrompu</h1>
              <br />
              <button type="submit" class="submit-btn">
                Recommencer le niveau
              </button>
            </form>
          </div>
        ) : null}
        {this.state.gameState == 0 ? (
          <div>
            <h1>{message}</h1>
          </div>
        ) : null}
        {(this.state.gameState > 0) & (this.state.gameInfo > 0) ? (
          <div>
            <h1>{this.state.textInfo[this.state.gameInfo - 1]}</h1>
            <button class="submit-btn" onClick={this.clickInfo}>
              J'ai compris
            </button>
          </div>
        ) : null}
        {(this.state.gameState > 0) & (this.state.helpState == 1) ? (
          <div>
            <img src={help} onClick={this.clickHelp} />
          </div>
        ) : null}
        {(this.state.gameState > 0) & (this.state.gameInfo == 0) ? (
          <div>
            <div id="card">
              <img
                src={this.state.imageCard[lvl - 1]}
                id="card"
                alt="card"
                draggable="false"
                width="300"
                height="300"
              />
              <img id="hlpBut" src={buttonH} onClick={this.clickHelp} />
            </div>
            {this.state.gameState == 2 ? (
              <div>
                <br />
                <img src={button3} />
              </div>
            ) : null}
            {(this.state.gameState != 2) &
            (this.state.gameState != -4) &
            (this.state.buttonValid == 1) ? (
              <div>
                <input
                  type="image"
                  src={this.state.actualButton}
                  onClick={this.checkSol}
                />
              </div>
            ) : null}
            <div>
              <DropTarget
                targetKey="pos"
                onHit={this.hit}
                dropData={{ idLine: -1 }}
              >
                <DragDropContainer
                  targetKey="pos"
                  onDragStart={this.drag}
                  onDrop={this.drop}
                  dragData={{ idBird: 0 }}
                  noDragging={this.state.birdsDraggable[0]}
                >
                  <img
                    src={this.state.imageChar[0]}
                    id="bird0"
                    alt="bird0"
                    draggable="false"
                    width={Math.trunc(130 * this.state.adjust)}
                    height={Math.trunc(130 * this.state.adjust)}
                    style={{ opacity: this.state.birds[0] }}
                  />
                </DragDropContainer>
                <DragDropContainer
                  targetKey="pos"
                  onDragStart={this.drag}
                  onDrop={this.drop}
                  dragData={{ idBird: 1 }}
                  noDragging={this.state.birdsDraggable[1]}
                >
                  <img
                    src={this.state.imageChar[1]}
                    id="bird1"
                    alt="bird1"
                    draggable="false"
                    width={Math.trunc(130 * this.state.adjust)}
                    height={Math.trunc(130 * this.state.adjust)}
                    style={{ opacity: this.state.birds[1] }}
                  />
                </DragDropContainer>
                <DragDropContainer
                  targetKey="pos"
                  onDragStart={this.drag}
                  onDrop={this.drop}
                  dragData={{ idBird: 2 }}
                  noDragging={this.state.birdsDraggable[2]}
                >
                  <img
                    src={this.state.imageChar[2]}
                    id="bird2"
                    alt="bird2"
                    draggable="false"
                    width={Math.trunc(130 * this.state.adjust)}
                    height={Math.trunc(130 * this.state.adjust)}
                    style={{ opacity: this.state.birds[2] }}
                  />
                </DragDropContainer>
                {this.state.solutions[lvl].length > 3 ? (
                  <DragDropContainer
                    targetKey="pos"
                    onDragStart={this.drag}
                    onDrop={this.drop}
                    dragData={{ idBird: 3 }}
                    noDragging={this.state.birdsDraggable[3]}
                  >
                    <img
                      src={this.state.imageChar[3]}
                      id="bird3"
                      alt="bird3"
                      draggable="false"
                      width={Math.trunc(130 * this.state.adjust)}
                      height={Math.trunc(130 * this.state.adjust)}
                      style={{ opacity: this.state.birds[3] }}
                    />
                  </DragDropContainer>
                ) : null}
                {this.state.solutions[lvl].length > 4 ? (
                  <DragDropContainer
                    targetKey="pos"
                    onDragStart={this.drag}
                    onDrop={this.drop}
                    dragData={{ idBird: 4 }}
                    noDragging={this.state.birdsDraggable[4]}
                  >
                    <img
                      src={this.state.imageChar[4]}
                      id="bird4"
                      alt="bird4"
                      draggable="false"
                      width={Math.trunc(130 * this.state.adjust)}
                      height={Math.trunc(130 * this.state.adjust)}
                      style={{ opacity: this.state.birds[4] }}
                    />
                  </DragDropContainer>
                ) : null}
                {this.state.solutions[lvl].length > 5 ? (
                  <DragDropContainer
                    targetKey="pos"
                    onDragStart={this.drag}
                    onDrop={this.drop}
                    dragData={{ idBird: 5 }}
                    noDragging={this.state.birdsDraggable[5]}
                  >
                    <img
                      src={this.state.imageChar[5]}
                      id="bird5"
                      alt="bird5"
                      draggable="false"
                      width={Math.trunc(130 * this.state.adjust)}
                      height={Math.trunc(130 * this.state.adjust)}
                      style={{ opacity: this.state.birds[5] }}
                    />
                  </DragDropContainer>
                ) : null}
              </DropTarget>
            </div>
            <div align="center">
              <table>
                <tr bgcolor="000000">
                  <td colspan="4"></td>
                </tr>
                <tr bgcolor="a5ccaf" background={stage1}>
                  <td>
                    <DragDropContainer
                      targetKey="pos"
                      onDragStart={this.dragLine}
                      onDrop={this.drop}
                      dragData={{ idLine: 0, idPos: 0 }}
                      noDragging={this.state.posDraggable[0][0]}
                    >
                      <DropTarget
                        targetKey="pos"
                        onHit={this.hit}
                        dropData={{ idLine: 0, idPos: 0 }}
                      >
                        <img
                          src={this.state.imageChar[this.state.position[0][0]]}
                          id="pos00"
                          alt="pos00"
                          draggable="false"
                          width={Math.trunc(130 * this.state.adjustTab)}
                          height={Math.trunc(130 * this.state.adjustTab)}
                        />
                      </DropTarget>
                    </DragDropContainer>
                  </td>
                  <td>
                    <DragDropContainer
                      targetKey="pos"
                      onDragStart={this.dragLine}
                      onDrop={this.drop}
                      dragData={{ idLine: 0, idPos: 1 }}
                      noDragging={this.state.posDraggable[0][1]}
                    >
                      <DropTarget
                        targetKey="pos"
                        onHit={this.hit}
                        dropData={{ idLine: 0, idPos: 1 }}
                      >
                        <img
                          src={this.state.imageChar[this.state.position[0][1]]}
                          id="pos01"
                          alt="pos01"
                          draggable="false"
                          width={Math.trunc(130 * this.state.adjustTab)}
                          height={Math.trunc(130 * this.state.adjustTab)}
                        />
                      </DropTarget>
                    </DragDropContainer>
                  </td>
                  <td>
                    <DragDropContainer
                      targetKey="pos"
                      onDragStart={this.dragLine}
                      onDrop={this.drop}
                      dragData={{ idLine: 0, idPos: 2 }}
                      noDragging={this.state.posDraggable[0][2]}
                    >
                      <DropTarget
                        targetKey="pos"
                        onHit={this.hit}
                        dropData={{ idLine: 0, idPos: 2 }}
                      >
                        <img
                          src={this.state.imageChar[this.state.position[0][2]]}
                          id="pos02"
                          alt="pos02"
                          draggable="false"
                          width={Math.trunc(130 * this.state.adjustTab)}
                          height={Math.trunc(130 * this.state.adjustTab)}
                        />
                      </DropTarget>
                    </DragDropContainer>
                  </td>
                  <td>
                    <DragDropContainer
                      targetKey="pos"
                      onDragStart={this.dragLine}
                      onDrop={this.drop}
                      dragData={{ idLine: 0, idPos: 3 }}
                      noDragging={this.state.posDraggable[0][3]}
                    >
                      <DropTarget
                        targetKey="pos"
                        onHit={this.hit}
                        dropData={{ idLine: 0, idPos: 3 }}
                      >
                        <img
                          src={this.state.imageChar[this.state.position[0][3]]}
                          id="pos03"
                          alt="pos03"
                          draggable="false"
                          width={Math.trunc(130 * this.state.adjustTab)}
                          height={Math.trunc(130 * this.state.adjustTab)}
                        />
                      </DropTarget>
                    </DragDropContainer>
                  </td>
                </tr>
                <tr bgcolor="000000">
                  <td colspan="4"></td>
                </tr>
                <tr bgcolor="9eb6ce" background={stage2}>
                  <td>
                    <DragDropContainer
                      targetKey="pos"
                      onDragStart={this.dragLine}
                      onDrop={this.drop}
                      dragData={{ idLine: 1, idPos: 0 }}
                      noDragging={this.state.posDraggable[1][0]}
                    >
                      <DropTarget
                        targetKey="pos"
                        onHit={this.hit}
                        dropData={{ idLine: 1, idPos: 0 }}
                      >
                        <img
                          src={this.state.imageChar[this.state.position[1][0]]}
                          id="pos10"
                          alt="pos10"
                          draggable="false"
                          width={Math.trunc(130 * this.state.adjustTab)}
                          height={Math.trunc(130 * this.state.adjustTab)}
                        />
                      </DropTarget>
                    </DragDropContainer>
                  </td>
                  <td>
                    <DragDropContainer
                      targetKey="pos"
                      onDragStart={this.dragLine}
                      onDrop={this.drop}
                      dragData={{ idLine: 1, idPos: 1 }}
                      noDragging={this.state.posDraggable[1][1]}
                    >
                      <DropTarget
                        targetKey="pos"
                        onHit={this.hit}
                        dropData={{ idLine: 1, idPos: 1 }}
                      >
                        <img
                          src={this.state.imageChar[this.state.position[1][1]]}
                          id="pos11"
                          alt="pos11"
                          draggable="false"
                          width={Math.trunc(130 * this.state.adjustTab)}
                          height={Math.trunc(130 * this.state.adjustTab)}
                        />
                      </DropTarget>
                    </DragDropContainer>
                  </td>
                  <td>
                    <DragDropContainer
                      targetKey="pos"
                      onDragStart={this.dragLine}
                      onDrop={this.drop}
                      dragData={{ idLine: 1, idPos: 2 }}
                      noDragging={this.state.posDraggable[1][2]}
                    >
                      <DropTarget
                        targetKey="pos"
                        onHit={this.hit}
                        dropData={{ idLine: 1, idPos: 2 }}
                      >
                        <img
                          src={this.state.imageChar[this.state.position[1][2]]}
                          id="pos12"
                          alt="pos12"
                          draggable="false"
                          width={Math.trunc(130 * this.state.adjustTab)}
                          height={Math.trunc(130 * this.state.adjustTab)}
                        />
                      </DropTarget>
                    </DragDropContainer>
                  </td>
                  <td>
                    <DragDropContainer
                      targetKey="pos"
                      onDragStart={this.dragLine}
                      onDrop={this.drop}
                      dragData={{ idLine: 1, idPos: 3 }}
                      noDragging={this.state.posDraggable[1][3]}
                    >
                      <DropTarget
                        targetKey="pos"
                        onHit={this.hit}
                        dropData={{ idLine: 1, idPos: 3 }}
                      >
                        <img
                          src={this.state.imageChar[this.state.position[1][3]]}
                          id="pos13"
                          alt="pos13"
                          draggable="false"
                          width={Math.trunc(130 * this.state.adjustTab)}
                          height={Math.trunc(130 * this.state.adjustTab)}
                        />
                      </DropTarget>
                    </DragDropContainer>
                  </td>
                </tr>
                <tr bgcolor="000000">
                  <td colspan="4"></td>
                </tr>
                <tr bgcolor="bc9cc5" background={stage3}>
                  <td>
                    <DragDropContainer
                      targetKey="pos"
                      onDragStart={this.dragLine}
                      onDrop={this.drop}
                      dragData={{ idLine: 2, idPos: 0 }}
                      noDragging={this.state.posDraggable[2][0]}
                    >
                      <DropTarget
                        targetKey="pos"
                        onHit={this.hit}
                        dropData={{ idLine: 2, idPos: 0 }}
                      >
                        <img
                          src={this.state.imageChar[this.state.position[2][0]]}
                          id="pos20"
                          alt="pos20"
                          draggable="false"
                          width={Math.trunc(130 * this.state.adjustTab)}
                          height={Math.trunc(130 * this.state.adjustTab)}
                        />
                      </DropTarget>
                    </DragDropContainer>
                  </td>
                  <td>
                    <DragDropContainer
                      targetKey="pos"
                      onDragStart={this.dragLine}
                      onDrop={this.drop}
                      dragData={{ idLine: 2, idPos: 1 }}
                      noDragging={this.state.posDraggable[2][1]}
                    >
                      <DropTarget
                        targetKey="pos"
                        onHit={this.hit}
                        dropData={{ idLine: 2, idPos: 1 }}
                      >
                        <img
                          src={this.state.imageChar[this.state.position[2][1]]}
                          id="pos21"
                          alt="pos21"
                          draggable="false"
                          width={Math.trunc(130 * this.state.adjustTab)}
                          height={Math.trunc(130 * this.state.adjustTab)}
                        />
                      </DropTarget>
                    </DragDropContainer>
                  </td>
                  <td>
                    <DragDropContainer
                      targetKey="pos"
                      onDragStart={this.dragLine}
                      onDrop={this.drop}
                      dragData={{ idLine: 2, idPos: 2 }}
                      noDragging={this.state.posDraggable[2][2]}
                    >
                      <DropTarget
                        targetKey="pos"
                        onHit={this.hit}
                        dropData={{ idLine: 2, idPos: 2 }}
                      >
                        <img
                          src={this.state.imageChar[this.state.position[2][2]]}
                          id="pos22"
                          alt="pos22"
                          draggable="false"
                          width={Math.trunc(130 * this.state.adjustTab)}
                          height={Math.trunc(130 * this.state.adjustTab)}
                        />
                      </DropTarget>
                    </DragDropContainer>
                  </td>
                  <td>
                    <DragDropContainer
                      targetKey="pos"
                      onDragStart={this.dragLine}
                      onDrop={this.drop}
                      dragData={{ idLine: 2, idPos: 3 }}
                      noDragging={this.state.posDraggable[2][3]}
                    >
                      <DropTarget
                        targetKey="pos"
                        onHit={this.hit}
                        dropData={{ idLine: 2, idPos: 3 }}
                      >
                        <img
                          src={this.state.imageChar[this.state.position[2][3]]}
                          id="pos23"
                          alt="pos23"
                          draggable="false"
                          width={Math.trunc(130 * this.state.adjustTab)}
                          height={Math.trunc(130 * this.state.adjustTab)}
                        />
                      </DropTarget>
                    </DragDropContainer>
                  </td>
                </tr>
                <tr bgcolor="000000">
                  <td colspan="4"></td>
                </tr>
                <tr bgcolor="ca9e9b" background={stage4}>
                  <td>
                    <DragDropContainer
                      targetKey="pos"
                      onDragStart={this.dragLine}
                      onDrop={this.drop}
                      dragData={{ idLine: 3, idPos: 0 }}
                      noDragging={this.state.posDraggable[3][0]}
                    >
                      <DropTarget
                        targetKey="pos"
                        onHit={this.hit}
                        dropData={{ idLine: 3, idPos: 0 }}
                      >
                        <img
                          src={this.state.imageChar[this.state.position[3][0]]}
                          id="pos30"
                          alt="pos30"
                          draggable="false"
                          width={Math.trunc(130 * this.state.adjustTab)}
                          height={Math.trunc(130 * this.state.adjustTab)}
                        />
                      </DropTarget>
                    </DragDropContainer>
                  </td>
                  <td>
                    <DragDropContainer
                      targetKey="pos"
                      onDragStart={this.dragLine}
                      onDrop={this.drop}
                      dragData={{ idLine: 3, idPos: 1 }}
                      noDragging={this.state.posDraggable[3][1]}
                    >
                      <DropTarget
                        targetKey="pos"
                        onHit={this.hit}
                        dropData={{ idLine: 3, idPos: 1 }}
                      >
                        <img
                          src={this.state.imageChar[this.state.position[3][1]]}
                          id="pos31"
                          alt="pos31"
                          draggable="false"
                          width={Math.trunc(130 * this.state.adjustTab)}
                          height={Math.trunc(130 * this.state.adjustTab)}
                        />
                      </DropTarget>
                    </DragDropContainer>
                  </td>
                  <td>
                    <DragDropContainer
                      targetKey="pos"
                      onDragStart={this.dragLine}
                      onDrop={this.drop}
                      dragData={{ idLine: 3, idPos: 2 }}
                      noDragging={this.state.posDraggable[3][2]}
                    >
                      <DropTarget
                        targetKey="pos"
                        onHit={this.hit}
                        dropData={{ idLine: 3, idPos: 2 }}
                      >
                        <img
                          src={this.state.imageChar[this.state.position[3][2]]}
                          id="pos32"
                          alt="pos32"
                          draggable="false"
                          width={Math.trunc(130 * this.state.adjustTab)}
                          height={Math.trunc(130 * this.state.adjustTab)}
                        />
                      </DropTarget>
                    </DragDropContainer>
                  </td>
                  <td>
                    <DragDropContainer
                      targetKey="pos"
                      onDragStart={this.dragLine}
                      onDrop={this.drop}
                      dragData={{ idLine: 3, idPos: 3 }}
                      noDragging={this.state.posDraggable[3][3]}
                    >
                      <DropTarget
                        targetKey="pos"
                        onHit={this.hit}
                        dropData={{ idLine: 3, idPos: 3 }}
                      >
                        <img
                          src={this.state.imageChar[this.state.position[3][3]]}
                          id="pos33"
                          alt="pos33"
                          draggable="false"
                          width={Math.trunc(130 * this.state.adjustTab)}
                          height={Math.trunc(130 * this.state.adjustTab)}
                        />
                      </DropTarget>
                    </DragDropContainer>
                  </td>
                </tr>
                <tr bgcolor="000000">
                  <td colspan="4"></td>
                </tr>
              </table>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
