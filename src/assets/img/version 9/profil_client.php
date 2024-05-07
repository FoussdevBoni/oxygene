<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">

        <title>Presta</title>
        <meta content="" name="description">
        <meta content="" name="keywords">

        <!-- Favicons -->
        <link href="assets/img/logo-presta3.png" rel="icon">
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">

        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

        <!-- Template Main CSS File -->
        <link href="assets/css/style.css" rel="stylesheet">
        <link href="assets/css/metier.css" rel="stylesheet">
        <link href="assets/css/realisation.css" rel="stylesheet">
        <script src="index.js"></script>
        <!-- =======================================================
  * site PRESTA pour toute les  prestations de services au Bénin 
  * Réaliser par DARSAF-TECH 
  ======================================================== -->
    </head>

    <body>

        <!-- ======= Service Search Section ======= -->
        <div class="click-closed"></div>
        <!--/ Form Search Star /-->
        <div class="box-collapse">
            <div class="title-box-d">
                <h3 class="title-d">Demander un service</h3>
            </div>
            <span class="close-box-collapse right-boxed bi bi-x ml-5"></span>
            <div class="box-collapse-wrap form">
                <form class="form-a">
                    <div class="row">
                        <div class="col-md-12 mb-2">
                            <div class="form-group">
                                <label class="pb-2" for=""><small>Donner des précisions sur le service
                                        recherché</small></label>
                                <textarea name="" id="" cols="30" rows="5"
                                    class="form-control form-control-lg form-control-a description"
                                    placeholder="Ecrivez ici!"></textarea>
                            </div>
                        </div>
                        <div class="col-md-6 mb-2">
                            <div class="form-group mt-3">
                                <label class="pb-2" for="metier">Métier</label>
                                <select class="form-control form-select form-control-a" id="metier">
                                    <option>Menuiserie</option>
                                    <option>Carrelage</option>
                                    <option>Transport</option>
                                    <option>Cours de renforment</option>
                                    <option>Maçonerie</option>
                                    <option>Vitrerie</option>
                                    <option>Couture</option>
                                    <option>coifure</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6 mb-2">
                            <div class="form-group mt-3">
                                <label class="pb-2" for="departement">Département</label>
                                <select class="form-control form-select form-control-a" id="departement">
                                    <option>ALIBORI</option>
                                    <option>ATACORA</option>
                                    <option>ATLANTIQUE</option>
                                    <option>BORGOU</option>
                                    <option>COLLINES</option>
                                    <option>COUFFO</option>
                                    <option>DONGA</option>
                                    <option>LITTORAL</option>
                                    <option>MONO</option>
                                    <option>OUEME</option>
                                    <option>PLATEAU</option>
                                    <option>ZOU</option>

                                </select>
                            </div>
                        </div>
                        <div class="col-md-6 mb-2">
                            <div class="form-group mt-3">
                                <label class="pb-2" for="commune">Commune</label>
                                <select class="form-control form-select form-control-a" id="commune">
                                    <option>PARAKOU</option>
                                    <option>ADJOHOUN</option>
                                    <option>GLAZOUE</option>
                                    <option>BONOU</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6 mb-2">
                            <div class="form-group mt-3">
                                <label class="pb-2" for="city">Village/Quatier</label>
                                <select class="form-control form-select form-control-a" id="city">
                                    <option>Bannikani</option>
                                    <option>Nima</option>
                                    <option>Titirou</option>
                                    <option>Arafat</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12 m-3">
                            <button type="submit" class="btn search m-3"
                                style="background-color: #2eca6a; color: #fff;">Lancer la
                                demande</button>
                        </div>
                    </div>
                </form>
            </div>
        </div><!-- End Property Search Section -->>

        <!-- ======= Header/Navbar ======= -->
        <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
            <div class="container">
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <a class="navbar-brand text-brand" href="index.php">PRESTA<span class="color-b">Bénin</span></a>

                <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <a class="nav-link active" href="index.php">Acceuil</a>
                        </li>
                        <li class="nav-item" id="connexion">
                            <a class="nav-link " href="authentification/pages-login.php">Connexion</a>
                        </li>
                        <li class="nav-item" id="monCompte">
                            <a class="nav-link " href="mon_compte/réalisations.php">Mon compte </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catégorie</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item " href="property-single.html">MENUISERIE</a>
                                <a class="dropdown-item " href="blog-single.html">TRANSPORT</a>
                                <a class="dropdown-item " href="agents-grid.html">VITRIERIE</a>
                                <a class="dropdown-item " href="agent-single.html">COIFURE</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="">Contact</a>
                        </li>
                    </ul>
                </div>

                <button type="button" class="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
                    data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                    <span class="d-none d-md-block mx-1"> Demander un service</span><i class="bi bi-clipboard-plus"></i>
                </button>
            </div>
        </nav><!-- End Header/Navbar -->
        <!-- ======= Cta Section ======= -->


        <section class="guide mt-5">
            <div class="card-body mt-5 profile-card d-flex flex-column align-items-center">

                <img width="90" src="assets/img/author-1.jpg" alt="Profile" class="rounded-circle">
                <h5><strong>SESSOU Richard</strong> </h5>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">Département</li>
                        <li class="breadcrumb-item">Commune</li>
                        <li class="breadcrumb-item active">Arrondissement</li>
                    </ol>
                </nav>
                <small>Dernière connexion: il y a 2 heures</small>
                <div class="social-links mt-4">
                    <a href="" class="btn btn-b-n text-dark px-4 mr-4">Contacter</a>
                    <a href="" class="btn btn-b-n text-dark px-4 ml-4">Localiser</a>
                </div>
            </div>
        </section>

        <section class="section section-bg px-4">
            <div class="row">
                <div class="col-lg-4 ">
                    <div class="guide p-3 mt-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        <p>
                            <strong>Bibiographie:</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                            nulla suscipit facilis pariatur dignissimos
                            minus ipsum quod architecto fuga in, magni aliquam dicta nostrum nesciunt blanditiis...
                        </p>
                    </div>
                    <div class="guide mt-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        <div class="commentaire-title p-3 text-center">
                            <h3>Statistiques Client</h3>
                        </div>
                        <div class=" row justify-content-between p-3">
                            <div class="mt-1">
                                <span> <i class="bi bi-chat-left-text px-2"></i>Disponible sur Presta</span>
                            </div>
                            <div class="mt-1 row justify-content-between">
                                <span class="col-9"> <i class="bi bi-hand-thumbs-up-fill px-2"></i>Avis
                                    positifs laissés</span>
                                <span class="text-end col-2"><small><strong>43</strong></small> </span>
                            </div>
                            <div class="mt-1 row justify-content-between">
                                <span class="col-9"><i class="bi bi-hand-thumbs-down-fill px-2"></i>Avis
                                    négatifs laissés</span>
                                <span class="text-end col-2"><small><strong>0</strong></small> </span>
                            </div>
                            <div class="mt-1 row justify-content-between">
                                <span class="col-9"><i class="bi bi-person-plus px-2"></i>Contacts</span>
                                <span class="text-end col-2"><small><strong>276</strong></small> </span>
                            </div>
                            <div class="mt-1 row justify-content-between">
                                <span class="col-10"><i class="bi bi-reply-all-fill px-2"></i>Nombre de
                                    commentaires</span>
                                <span class="text-end col-2"><small><strong>128</strong></small> </span>
                            </div>
                            <div class="mt-1 row justify-content-between">
                                <span class="col-8"><i class="bi bi-file-person-fill px-2"></i>Clients
                                    depuis</span>
                                <span class="text-end col-4"><small><strong>Mars 2023</strong></small> </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="row ">
                        <h5>Rélalisations favories</h5>
                        <div class="col-md-4 col-6 mt-4 ">
                            <div class="card card-blog">
                                <div class="card-img">
                                    <a href=" realisation.html"><img src="mon_compte/img/post-1.jpg" alt=""
                                            class="img-fluid"></a>
                                </div>
                                <p class="card-description">
                                    Proin eget tortor risus lok knf Lorem Lorem ipsum dolor sit amet....
                                </p>
                                <div class="card-footer">
                                    <div class="post-author ">
                                        <a href="profil_prestataire.php">
                                            <div class="image justify-content-center">
                                                <img src="mon_compte/img/testimonial-2.jpg" alt=""
                                                    class="avatar rounded-circle">
                                            </div>
                                            <div class="nom mt-2">
                                                <div class=""> <span class="">Morgan Freeman</span>
                                                </div>
                                                <div>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <span style="font-size:small;">(10)</span>
                                                </div>
                                            </div>
                                    </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 col-6 mt-4 ">
                            <div class="card card-blog">
                                <div class="card-img">
                                    <a href=" realisation.html"><img src="mon_compte/img/post-1.jpg" alt=""
                                            class="img-fluid"></a>
                                </div>
                                <p class="card-description">
                                    Proin eget tortor risus lok knf Lorem Lorem ipsum dolor sit amet....
                                </p>
                                <div class="card-footer">
                                    <div class="post-author ">
                                        <a href="profil_prestataire.php">
                                            <div class="image justify-content-center">
                                                <img src="mon_compte/img/testimonial-2.jpg" alt=""
                                                    class="avatar rounded-circle">
                                            </div>
                                            <div class="nom mt-2">
                                                <div class=""> <span class="">Morgan Freeman</span>
                                                </div>
                                                <div>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <span style="font-size:small;">(10)</span>
                                                </div>
                                            </div>
                                    </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 col-6 mt-4 ">
                            <div class="card card-blog">
                                <div class="card-img">
                                    <a href=" realisation.html"><img src="mon_compte/img/post-1.jpg" alt=""
                                            class="img-fluid"></a>
                                </div>
                                <p class="card-description">
                                    Proin eget tortor risus lok knf Lorem Lorem ipsum dolor sit amet....
                                </p>
                                <div class="card-footer">
                                    <div class="post-author ">
                                        <a href="profil_prestataire.php">
                                            <div class="image justify-content-center">
                                                <img src="mon_compte/img/testimonial-2.jpg" alt=""
                                                    class="avatar rounded-circle">
                                            </div>
                                            <div class="nom mt-2">
                                                <div class=""> <span class="">Morgan Freeman</span>
                                                </div>
                                                <div>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <span style="font-size:small;">(10)</span>
                                                </div>
                                            </div>
                                    </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 col-6 mt-4 ">
                            <div class="card card-blog">
                                <div class="card-img">
                                    <a href=" realisation.html"><img src="mon_compte/img/post-1.jpg" alt=""
                                            class="img-fluid"></a>
                                </div>
                                <p class="card-description">
                                    Proin eget tortor risus lok knf Lorem Lorem ipsum dolor sit amet....
                                </p>
                                <div class="card-footer">
                                    <div class="post-author ">
                                        <a href="profil_prestataire.php">
                                            <div class="image justify-content-center">
                                                <img src="mon_compte/img/testimonial-2.jpg" alt=""
                                                    class="avatar rounded-circle">
                                            </div>
                                            <div class="nom mt-2">
                                                <div class=""> <span class="">Morgan Freeman</span>
                                                </div>
                                                <div>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <span style="font-size:small;">(10)</span>
                                                </div>
                                            </div>
                                    </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 col-6 mt-4 ">
                            <div class="card card-blog">
                                <div class="card-img">
                                    <a href=" realisation.html"><img src="mon_compte/img/post-1.jpg" alt=""
                                            class="img-fluid"></a>
                                </div>
                                <p class="card-description">
                                    Proin eget tortor risus lok knf Lorem Lorem ipsum dolor sit amet....
                                </p>
                                <div class="card-footer">
                                    <div class="post-author ">
                                        <a href="profil_prestataire.php">
                                            <div class="image justify-content-center">
                                                <img src="mon_compte/img/testimonial-2.jpg" alt=""
                                                    class="avatar rounded-circle">
                                            </div>
                                            <div class="nom mt-2">
                                                <div class=""> <span class="">Morgan Freeman</span>
                                                </div>
                                                <div>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <span style="font-size:small;">(10)</span>
                                                </div>
                                            </div>
                                    </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 col-6 mt-4 ">
                            <div class="card card-blog">
                                <div class="card-img">
                                    <a href=" realisation.html"><img src="mon_compte/img/post-1.jpg" alt=""
                                            class="img-fluid"></a>
                                </div>
                                <p class="card-description">
                                    Proin eget tortor risus lok knf Lorem Lorem ipsum dolor sit amet....
                                </p>
                                <div class="card-footer">
                                    <div class="post-author ">
                                        <a href="profil_prestataire.php">
                                            <div class="image justify-content-center">
                                                <img src="mon_compte/img/testimonial-2.jpg" alt=""
                                                    class="avatar rounded-circle">
                                            </div>
                                            <div class="nom mt-2">
                                                <div class=""> <span class="">Morgan Freeman</span>
                                                </div>
                                                <div>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <span style="font-size:small;">(10)</span>
                                                </div>
                                            </div>
                                    </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 col-6 mt-4 ">
                            <div class="card card-blog">
                                <div class="card-img">
                                    <a href=" realisation.html"><img src="mon_compte/img/post-1.jpg" alt=""
                                            class="img-fluid"></a>
                                </div>
                                <p class="card-description">
                                    Proin eget tortor risus lok knf Lorem Lorem ipsum dolor sit amet....
                                </p>
                                <div class="card-footer">
                                    <div class="post-author ">
                                        <a href="profil_prestataire.php">
                                            <div class="image justify-content-center">
                                                <img src="mon_compte/img/testimonial-2.jpg" alt=""
                                                    class="avatar rounded-circle">
                                            </div>
                                            <div class="nom mt-2">
                                                <div class=""> <span class="">Morgan Freeman</span>
                                                </div>
                                                <div>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <span style="font-size:small;">(10)</span>
                                                </div>
                                            </div>
                                    </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 col-6 mt-4 ">
                            <div class="card card-blog">
                                <div class="card-img">
                                    <a href=" realisation.html"><img src="mon_compte/img/post-1.jpg" alt=""
                                            class="img-fluid"></a>
                                </div>
                                <p class="card-description">
                                    Proin eget tortor risus lok knf Lorem Lorem ipsum dolor sit amet....
                                </p>
                                <div class="card-footer">
                                    <div class="post-author ">
                                        <a href="profil_prestataire.php">
                                            <div class="image justify-content-center">
                                                <img src="mon_compte/img/testimonial-2.jpg" alt=""
                                                    class="avatar rounded-circle">
                                            </div>
                                            <div class="nom mt-2">
                                                <div class=""> <span class="">Morgan Freeman</span>
                                                </div>
                                                <div>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <span style="font-size:small;">(10)</span>
                                                </div>
                                            </div>
                                    </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 col-6 mt-4 ">
                            <div class="card card-blog">
                                <div class="card-img">
                                    <a href=" realisation.html"><img src="mon_compte/img/post-1.jpg" alt=""
                                            class="img-fluid"></a>
                                </div>
                                <p class="card-description">
                                    Proin eget tortor risus lok knf Lorem Lorem ipsum dolor sit amet....
                                </p>
                                <div class="card-footer">
                                    <div class="post-author ">
                                        <a href="profil_prestataire.php">
                                            <div class="image justify-content-center">
                                                <img src="mon_compte/img/testimonial-2.jpg" alt=""
                                                    class="avatar rounded-circle">
                                            </div>
                                            <div class="nom mt-2">
                                                <div class=""> <span class="">Morgan Freeman</span>
                                                </div>
                                                <div>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <i style="color: rgba(243, 243, 4, 0.747); font-size: 15px;"
                                                        class="bi bi-star-fill"></i>
                                                    <span style="font-size:small;">(10)</span>
                                                </div>
                                            </div>
                                    </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- ======= Footer ======= -->
        <footer id="footer">
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 footer-contact">
                            <h3>PRESTA</h3>
                            <p>
                                République du Bénin <br>
                                Disponibles<br>
                                Pour tout les Quatiers de ville et villages<br><br>
                                <strong>Phone(Allo presta):</strong> +229 97304917<br>
                                <strong>Email(SOS presta):</strong> presta@example.com<br>
                            </p>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Visiter</h4>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Acceuil</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Rechercher un metier</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Services disponibles</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Devenir prestataire</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Nos Rubriques</h4>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i>
                                    <a href="#">
                                        Demander un services

                                    </a>
                                </li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#"></a>Devenir prestataire</li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Se connecter</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">S'incrire</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Statistique</h4>
                            <p>Le site presta est disponible pour tout les résidants du pays</p>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i>Nombre de prestataires : <b> 2754</b></li>
                                <li><i class="bx bx-chevron-right"></i>Nombre de clients : <b> 2000</b></li>
                                <li><i class="bx bx-chevron-right"></i>Nombre de visteurs : <b> 45577</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer><!-- End Footer -->

        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></a>

        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

        <!-- Template Main JS File -->
        <script src="assets/js/main.js"></script>
        <script src="authentification/js/adresse.js"></script>

    </body>

</html>