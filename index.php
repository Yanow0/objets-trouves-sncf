<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Objets trouvés SNCF</title>
    <meta name="description" content="Retrouve tes objets perdus pendant tes voyages en train">
    <meta name="author" content="Takao">

    <meta property="og:title" content="Objets trouvés SNCF">
    <meta property="og:type" content="website">
    <!--    <meta property="og:url" content="https://www.sitepoint.com/a-basic-html5-template/">-->
    <!--    <meta property="og:description" content="A simple HTML5 Template for new projects.">-->
    <!--    <meta property="og:image" content="image.png">-->

    <!--    <link rel="icon" href="/favicon.ico">-->
    <!--    <link rel="icon" href="/favicon.svg" type="image/svg+xml">-->
    <!--    <link rel="apple-touch-icon" href="/apple-touch-icon.png">-->


    <link rel="stylesheet" href="bootstrap-5.1.0-dist/css/bootstrap.css">
    <link rel="stylesheet" href="jqueryui/jquery-ui.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&display=swap');
    </style>
    <link rel="stylesheet" href="css/style.css">

</head>

<body class="bg-light">

<nav class="navbar navbar-light fixed-top py-5" style="background-color:rgba(237,238,233, 0.9);">
    <div class="container-fluid d-flex justify-content-center">
        <span class="navbar-brand mb-0 h1">Objets trouvés SNCF</span>
    </div>
</nav>

<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img id="bg-image" src="img/Parvis_gare_de_Grenoble.JPG" class="d-block w-100" alt="Objets trouvés">
        </div>
    </div>
</div>

<div class="container">

    <div class="w-75 m-auto my-3">Si vous trouvez un objet vous appartenant parmis la liste des objets trouvés, vous devez vous rendre à la gare où il a été perdu pour le récupérer.</div>

    <div id="searchobjet" action="" method="post" class="m-auto w-75 p-5 bg-white">
        <div class="mb-3 form-group">
            <label for="gare" class="card-subtitle">Nom de la gare :</label>
            <input id="gare" class="mt-2 form-control" type="text" name="gare">

        </div>

        <div class="mb-3 form-group">
            <label for="type" class="card-subtitle">Type d'objet perdu :</label>
            <input id="type" class="mt-2 form-control" type="text" name="type">
        </div>

        <div class="mb-3 form-group">
            <label for="date" class="">Date : *</label>
            <input id="date" class="mt-2 form-control" type="text" name="date" onfocus="(this.type='date')"
                   onblur="if(!this.value)this.type='text'">

            <div id="toast-date" class="toast align-items-center text-white bg-danger border-0 my-2" role="alert"
                 aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body">
                        Attention ! Vous n'avez pas entré de date.
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                            aria-label="Close"></button>
                </div>
            </div>
        </div>

        <div id="obligatoire" class="my-2">* Seul le champ date est obligatoire</div>

        <button class="btn btn-primary" id="rechercher">Rechercher</button>


    </div>

    <div id="results" class="text-center">
        <div class="d-none my-5">Aucun résultat pour votre recherche, <a href="https://www.garesetconnexions.sncf/fr/service-client/a-vos-cotes/objet-perdu-trouve/declaration-perte" target="_blank">cliquez ici pour déclarer une perte</a></div>
        <table class="table table-hover table-bordered d-none m-auto w-75 bg-white mb-5">
            <thead style="background-color: #edeee9;">
                <tr>
                    <th>Gare</th>
                    <th>Date</th>
                    <th>Type d'objet</th>
                    <th>Nature de l'objet</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>

</div>


<script src="jquery/jquery-3.6.0.min.js"></script>
<script src="jqueryui/jquery-ui.min.js"></script>
<script src="bootstrap-5.1.0-dist/js/bootstrap.js"></script>
<script src="js/index.js"></script>
</body>
</html>