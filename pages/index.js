import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showLanguage, setShowLanguage] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  function handleChangeShowLanguage() {
    setShowLanguage(!showLanguage);
  }

  function handleChangeMobileMenu() {
    setMobileMenu(!mobileMenu);
  }
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <header>
        <div
          className={mobileMenu ? "navigation_bar mobile" : "navigation_bar"}
        >
          <img
            src="/neisson/NEI_Logo_White_3.svg"
            alt="logo-neisson"
            height="30px"
          />
          <nav className={mobileMenu ? "active" : ""}>
            <li>Histoire</li>
            <li>Fabrication</li>
            <li>Photothèque</li>
            <li className="language" onClick={handleChangeShowLanguage}>
              <i className="fa fa-globe" aria-hidden="true"></i>
              <i className="fa fa-sort-desc" aria-hidden="true"></i>
            </li>
            <div
              className={
                showLanguage ? "language_choice active" : "language_choice"
              }
            >
              <p>
                Français
                <i className="fas fa-check"></i>
              </p>
              <p>Anglais</p>
            </div>
            <li>Se connecter</li>
          </nav>
          <div className="navigation_mobile" onClick={handleChangeMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="herobanner">
          <img src="/neisson/NEI_Logo_White_3.svg" alt="logo-neisson" />
          <h2>RHUMS AGRICOLES MARTINIQUE</h2>
        </div>
      </header>
      <main>
        <section className="prevention">
          <h3>
            L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ. SACHEZ APPRÉCIER AVEC
            MODÉRATION
          </h3>
          <h3>CE SITE NE COMMERCIALISE PAS D'ALCOOL</h3>
        </section>
        <section className="historys">
          <article className="history">
            <div className="history_img">
              <img src="/neisson/EL_20160512_104250_Site.jpg" />
            </div>
            <div className="history_content">
              <h4>88 ans d'histoire</h4>
              <h6>1932</h6>
              <p>
                Les frères Neisson implantent leur distillerie au Carbet, sur la
                côte Nord-Caraïbe de la Martinique. Jean, ingénieur chimiste de
                formation, consacrera sa vie professionnelle à améliorer les
                techniques de distillation. Très tôt, son talent sera reconnu
                par les nombreuses récompenses glanées lors des salons
                internationaux et la célèbre bouteille Zepol’Karé (aux épaules
                carrées) deviendra dès lors synonyme d’un rhum de haute qualité.
              </p>
            </div>
          </article>
          <h4>Neisson, les couleurs de la canne™</h4>
          <article className="history reverse">
            <div className="history_img">
              <img src="/neisson/EL_20160512_111136_Site.jpg" />
            </div>
            <div className="history_content">
              <h6>2020</h6>
              <p>
                Les descendants de Jean, Claudine puis son fils Grégory, ont
                repris le flambeau familial. Forts d’un savoir-faire ancré dans
                leurs gènes, ils ont à cœur de vivre avec leur temps dans le
                respect de la nature.{" "}
              </p>

              <p>
                Dans cet esprit, le passage à une agriculture biologique
                s’imposa comme une évidence. La conversion des terres a débuté
                en 2013 et en 2016 le premier rhum bio AOC Martinique est
                proposé aux amateurs. Progressivement, l’ensemble des terres,
                plus de 40 ha, connaîtra la même évolution.{" "}
              </p>

              <p>
                Le progrès ne s’arrête pas à la lisière des champs de cannes.
                Après des années de recherches, Neisson utilise ses propres
                souches de levures indigènes, sélectionnées parmi celles
                naturellement présentes sur les cannes de la distillerie. Choix
                raisonné des variétés culturales pour leur adaptation à la
                typologie de chaque parcelle, maîtrise de l’arrosage pour
                l’économie de l’eau, traitement performant des effluents : tout
                concourt aujourd’hui à la production de rhums agricoles
                d’exception en harmonie avec l’écosystème des terres Neisson.
              </p>
            </div>
          </article>
        </section>
        <section className="parallax p-1"></section>
        <section className="history reverse">
          <div className="hystory_img">
            <img src="/neisson/EL_20160512_115240_site.jpg" />
          </div>
          <div className="hystory_content">
            <h5>La fabrication</h5>
            <p>
              Pièce maîtresse de la distillerie – avec la colonne – le moulin
              est entraîné par une machine à vapeur qui fournit ses bons offices
              depuis les premiers temps de l’usine.
            </p>
            <p>
              La canne, préalablement déchiquetée par des lames d’acier – les
              couteaux –, est broyée par de puissants cylindres d’acier, les
              rolls, qui exercent une pression de plusieurs tonnes. Ainsi le jus
              de canne, appelé vesou, est séparé de la fibre sèche, la bagasse
              qui sert de combustible pour la machine à vapeur.
            </p>
            <p>Un cycle écologique de longue date !</p>
          </div>
        </section>
        <section className="images">
          <div>
            <img src="/neisson/EL_20160512_095114_NB_site.jpg" />
          </div>
          <div>
            <img src="/neisson/EL_20160512_122434_site.jpg" />
          </div>
          <div>
            <img src="/neisson/D8A_20130318_143851_Site.jpg" />
          </div>
        </section>
        <section className="parallax p-2"></section>
        <section className="parallax p-3"></section>
        <section className="parallax p-4"></section>
        <section className="confront">
          <div className="con1ront-1">
            <h5>La photothèque</h5>
            <p>
              Neisson met à disposition de ses partenaires ses archives
              photographiques sous réserve de disposer d'un droit d'accès et du
              respect des conditions d'utilisation . Vous pouvez nous contacter,
              en motivant votre demande pour obtenir un droit d'accès.
            </p>
          </div>
          <div className="con1ront-2">
            <h5>Classement thématique</h5>
            <ul>
              <li>
                La distillerie
                <ul>
                  <li>Vues aériennes</li>
                </ul>
              </li>
              <li>
                La fabrication du rhum
                <ul>
                  <li>Récolte de la canne à sucre</li>
                </ul>
              </li>
              <li>Le personnel</li>
              <li>
                Les produits
                <ul>
                  <li>
                    Autres produits disponibles à la vente
                    <ul>
                      <li>
                        Les rhums blancs
                        <ul>
                          <li>
                            Les anciens rhums blancs.
                            <ul>
                              <li>
                                Rhums blancs disponibles à la vente
                                <ul>
                                  <li>Gamme rhums blancs export</li>
                                  <li>Gamme rhums blancs France</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li>
                        Les rhums vieux
                        <ul>
                          <li>
                            Les anciens rhums vieux.
                            <ul>
                              <li>
                                Rhums vieux disponibles à la vente
                                <ul>
                                  <li>Gamme rhums vieux export</li>
                                  <li>Gamme rhums vieux France</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section className="search">
          <div className="search-left">
            <h5>Recherche dans la banque dimages</h5>
            <input type="search" />
            {/* ajouter une image de plus */}
            <button> Afficher</button>
            <div className="search_left-secret"></div>
          </div>
          <div className="search-rigth"></div>
        </section>
        <hr />
        <section className="pre-footer">
          <div>
            <h6>Contact</h6>
            <p>Distillerie Neisson</p>
            <p>Domaine Thieubert - Quartier le Coin</p>
            <p>Le Carbet 97221 - Martinique (FWI)</p>
            <p>Tel : +596 (0)596 78 03 70</p>
          </div>
          <div>
            <img src="/neisson/EPV_signature_fond.svg" />
          </div>
          <div>
            <h6>Visite</h6>
            <p>Visite libre et gratuite</p>
            <p>Du lundi au vendredi : 8:00 - 17:00 </p>
            <p>Samedi : 8:30 - 12:00</p>
            <p>Dimanche : 9:00 - 12:00</p>
          </div>
        </section>
      </main>
      <footer>
        <div className="left">
          <p>2022 Rights reserved . Tous droits réservés.</p>
          <div>
            <a></a>
            <div className="footer_left-link">
              <hr />
              <a></a>
            </div>
            <div className="footer_left-link">
              <hr />
              <a></a>
            </div>
          </div>
        </div>
        <div className="center">
          <a>Propulsé avec fierté par</a>
          <img src="/neisson/thetispro2_light.svg" />
        </div>
        <div className="rigth">
          <p>
          Nous contacter
          <i className="the-contact-us-btn fas fa-envelope"></i>
          </p>
        </div>
      </footer>
    </>
  );
}
