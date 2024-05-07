        <?php 

                $select = $pdo->prepare("SELECT * FROM categories ORDER BY nom_categorie");
                $select->execute();


                $reqsql = $pdo->prepare("SELECT * FROM metiers");
                $donnes=$reqsql->execute();
                $donnes=$reqsql->fetchAll();


            ?>
        <!-- ======= Service Search Section ======= -->
        <div class="click-closed"></div>
        <!--/ Form Search Star /-->
        <div class="box-collapse" >
            <div class="title-box-d">
                <h3 class="title-d">Demander un service</h3>
            </div>
            <span class="close-box-collapse right-boxed bi bi-x ml-5"></span>
            <div class="box-collapse-wrap form">
                <form class="form-a" action="mon_compte\demande.php" method="POST">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="pb-2" for=""><small>Donner des précisions sur le service
                                            recherché</small></label>
                                    <textarea name="text" id="" cols="30" rows="4"
                                        class="form-control form-control-lg form-control-a description"
                                        placeholder="Ecrivez ici!"></textarea>
                                </div>
                            </div>
                            <div class="col-md-6 mb-2">
                                <div class="form-group mt-3">
                                    <label class="pb-2" for="metier">Métier</label>
                                    <select class="form-control form-select form-control-a" id="metier" name="metier">
                                    <?php
                                            foreach($donnes as $donne)
                                            {
                            
                                                echo " <option>". $donne['nom_metier']."</option>";
                                                echo "<br>";
                                            }
                                            ?>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 mb-2">
                                <div class="form-group mt-3">
                                    <label class="pb-2" for="departement">Département</label>
                                    <select class="form-select" name="departement" id="first-list">
                                        <option value="">Département</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 mb-2">
                                <div class="form-group mt-3">
                                    <label class="pb-2" for="commune">Commune</label>
                                    <select class="form-select" name="commune" id="second-list">
                                        <option value="">Commune</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 mb-2">
                                <div class="form-group mt-3">
                                    <label class="pb-2" for="arrondissement">Arrondissement</label>
                                    <select class="form-select" name="arrondissement" id="third-list">
                                        <option value="">Arrondissement</option>
                                    </select>
                                </div>
                            </div>

                           
                            <div class="col-md-12 m-3 text-end">
                                <button type="submit" class="btn btn-b-n text-dark px-4">LANCER LA DEMANDE</button>
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
                <a class="navbar-brand text-brand" href="index.php">Presta</a>

                <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
                    <ul class="navbar-nav">

                        <li class="nav-item ">
                            <a class="nav-link active" href="index.php">Acceuil</a>
                        </li>
                        <?php 
                            if (isset($_SESSION['user_id'])) {
                                echo '<li class="nav-item" id="monCompte">
                                <a class="nav-link " href="mon_compte/users-profile.php">Mon compte </a>
                            </li>';
                            }else {
                                echo '<li class="nav-item" id="connexion">
                                <a class="nav-link" href="authentification/pages-login.php">Connexion</a>
                            </li>';
                            }
                        ?>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" >Catégorie</a>
                            <div class="dropdown-menu">                      
                                        <?php
                                        while ($data = $select->fetch()) {

                                                $id = $data['id_categorie'];
                                                $nom = $data['nom_categorie'];

                                                    echo '<a class="dropdown-item" href="categorie.php?idcategorie='.$id.'">'.$nom.'</a>';
                                        }
                                        ?>
                            </div>
                        </li>
                        <?php 
                            if (!isset($_SESSION['user_id'])) {
                                echo '<li class="nav-item">
                                <a class="nav-link " href="">A propos</a>
                            </li>';
                            }
                        ?>
                        
                        <?php 
                            if (isset($_SESSION['user_id'])) {
                                echo '<li class="nav-item" id="monCompte">
                                <a class="nav-link " href="authentification\deconnexion.php">Déconnexion</a>
                            </li>';
                            }
                        ?>
                    </ul>
                </div>

                    <?php 
                            if (isset($_SESSION['user_id'])) {
                                $id = $_SESSION['user_id'];
                                $presta = $pdo->prepare("SELECT * FROM utilisateurs WHERE id_personne = $id ");
                                $presta->execute();
                            
                                $data1 = $presta->fetch();
                                $is_presta = $data1['is_presta'];       
                                
                                if ($is_presta == 1) {
                                    echo '<a class="nav-link nav-icon mx-2" href="mon_compte/attente.php">
                                    <i class="bi bi-clipboard-data h5"></i>
                                    <span class="badge bg-danger badge-number"></span>
                            </a>';}

                            echo '  <a class="nav-link nav-icon mx-2" href="mon_compte/messages.php">
                            <i class="bi bi-messenger h5"></i>
                            <span class="badge bg-danger badge-number">10</span>
                            </a>
                            <a class="nav-link nav-icon mx-2" href="mon_compte/notifications.php">
                                    <i class="bi bi-bell h5"></i>
                                    <span class="badge bg-danger badge-number">67</span>
                            </a>';
                            }
                    ?>
                    <a class="nav-link nav-icon mx-2" href="#" data-bs-toggle="dropdown">
                            <i class="bi bi-search  h5"></i>
                    </a><!-- End Messages Icon -->
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages mx-3 px-2" >
                                <form class="form-inline " method="GET" action="recherche.php">
                                        <div class="input-group ">
                                                <input type="text" class="form-control bg-light border-0 small "
                                                    placeholder="Rechercher" aria-label="Search"
                                                    aria-describedby="basic-addon2" name="q" id="q" style="color: black;">
                                                <div class="input-group-append">
                                                    <button class="btn trouver p-2 px-3" type="submit" style="background-color: #2eca6a;">
                                                        <i class="bi bi-search"></i>                   
                                                </button>
                                                </div>
                                        </div>
                                    </form>                               

                            </ul><!-- End Messages Dropdown Items -->

                <button type="button" class="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
                    data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"><i class="bi bi-clipboard-plus"></i>
                </button>
            </div>
        </nav><!-- End Header/Navbar -->