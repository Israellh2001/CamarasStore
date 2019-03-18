<!DOCTYPE html>
<html lang="en">
    <head>

        <!-- Bootstrap core CSS -->
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet">
        <!-- Custom fonts for this template -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
        <!-- Custom styles for this template -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-grayscale/5.0.4/css/grayscale.min.css" rel="stylesheet">

        <link rel="stylesheet" href="styles.css">

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>

      <?php
      //TODO: Create database for all, tables, users, provedores, productos, empleados.
      //Connection
      $server = "localhost";
      $user = "root";
      $pass = "";
      $db = "db";
      $conn = mysqli_connect($server, $user, $pass);
      if (!$conn) {
        die("Can't connect");
      }
      //SQL commands
      $dbCreate = "Create database if not exists db";
      $tableUsers = "Create table if not exists Users(Id int, Name varchar(40), Pass varchar (25), primary key (Id));";
      $empleadosTable = "Create table Empleados";
      $products = "Create table Productos";
      $prov = "Create table if not exists Prov (Id int, primary key (Id), Name varchar(25), Dir varchar (25), Tel int, Mail varchar(25), Empresa varchar(20), Brand varchar(20), Type varchar(20), Date varchar(10));";
      //Create database
      $query = mysqli_query($conn, $dbCreate);
      //Update the connection
      mysqli_select_db($conn, $db);
      mysqli_query($conn, $tableUsers);
      mysqli_query($conn, $prov);

      //Create tables

       ?>
        <!-- Header -->
        <nav class="navbar navbar-light bg-light" style="padding: 1em">
          <a class="navbar-brand">Encuentranos <i class="fas fa-map-marker-alt"></i></a>

          <center><h3>Dedos tienda</h3></center>

          <form class="form-inline">
              <a href="">Sing in</a>
              <a href="">/</a>
              <a href="" style="margin-right: 0.5em">Log in</a>

              <input class="form-control mr-sm-2" type="search" placeholder="Camaras, lentes, tripies" aria-label="Search">
              <a href=""><i class="fas fa-search"></i></a>
          </form>

        </nav>

        <!-- Navigation -->
        <ul class="nav nav-tabs justify-content-center" style="margin-top: 1em">
            <li class="nav-item">
              <a class="nav-link active" href="#">Inicio</a>
            </li>
             <li class="nav-item dropdown">
            </div>
              <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Camaras</a>
              <a class="dropdown-item" href="#">Lentes</a>
              <a class="dropdown-item" href="#">Tripies</a>
              <a class="dropdown-item" href="#">Accesorios</a>
              <a class="dropdown-item" href="#">Flashes</a>
              <a class="dropdown-item" href="#">Fotografias</a>
            </div>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Ofertas</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Camaras</a>
              <a class="dropdown-item" href="#">Lentes</a>
            </div>
          </li>
        </ul>

        <!-- Body -->

        <!-- Slider -->
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="img/Ecommerce-SEO.png" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="img/nikon.jpg" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="img/nikonBackground.jpg" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

          <!-- New Products -->
          <div class="container">
            <div class="row"> <h2>Nuevos productos</h2></div>
            <br><br>
              <div class="row justify-content-around">
                  <div class=" card" style="width: 18rem;">
                      <img class="card-img-top" src="..." alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">Carrito bien prron</h5>
                        <p class="card-text">estandar, rojito y bien prron</p>
                      </div>
                  </div>
                  <div class=" card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                  <div class=" card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
              </div>
              <div class="row">

              </div>
          </div>
        <br><br>
        <!-- Categorias de productos -->
        <div class="container" id="cat">
            <div class="row"><h2>Nuestras categorias</h2></div>
            <br><br>
            <div class="row">
                <div class="col">
                    <div class=" card" style="width: 110%;">
                        <img class="card-img-top" src="..." alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title">Camaras</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class=" card" style="width: 110%;">
                        <img class="card-img-top" src="..." alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title">Lentes</h5>
                        </div>
                    </div>
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <div class=" card" style="width: 110%;">
                        <img class="card-img-top" src="..." alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title">Tripodes</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class=" card" style="width: 110%;">
                        <img class="card-img-top" src="..." alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title">Accesorios</h5>
                        </div>
                    </div>
                </div>
              </div>
        </div>

        <br><br>
        <!-- Footer -->
    <footer class="bg-black small text-center text-white-50">

            <div class="container">
              <div class="row">
                <font size="5px", color="white">Información</font>
                </div>

                <div class="row">
                  <font size="4px"> <a href="nosotros.html">Nosotros</a></font>
                </div>

                <div class="row">
                    <font size="4px"> <a href="politicas.html">Politicas</a></font>
                </div>
                  <div class="row">
                    <font size="4px"> <a href="condiciones.html">Términos y condiciones</a></font>
                </div>
            </div>
            <div class="container">

              <div class="col">
                <font size="5px" color="white">Redes sociales</font>
              </div>
              <div class="col">
                <div style="font-size: 32px;">

                  <a href="http://www.facebook.com/"><i class="fab fa-facebook"></i></a>
                  <a href="http://www.twitter.com/"><i class="fab fa-twitter-square" size="500"></i></a>
                  <a href="https://mail.google.com"><i class="fab fa-google"></i></a>
                </div>
                <br/>
              </div>
            </div>
          </footer>


        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
        <script>
          $(document).ready(function() {
            $('.carousel').carousel({interval: 7000});

            if($("body").height() < $(window).height()){
              $("footer").css({"position":"absolute","border": "0px"});
            }
          });
        </script>
    </body>
</html>
