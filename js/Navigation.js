	function test(){
		alert("F2")
		alert(document.getElementById(1));
	}
   
   function loadNav(pageNo){
   document.writeln("<nav class=\"navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0\">")
        document.writeln("<a href=\"index.html\" class=\"navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5\">")
            document.writeln("<h2 class=\"mb-2 text-white\">KADTECH</h2>")
        document.writeln("</a>")
        document.writeln("<button type=\"button\" class=\"navbar-toggler me-4\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarCollapse\">")
            document.writeln("<span class=\"navbar-toggler-icon\"></span>")
        document.writeln("</button>")
        document.writeln("<div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">")
            document.writeln("<div class=\"navbar-nav ms-auto p-4 p-lg-0\">")
            	if(pageNo==1){
    	            document.writeln("<a href=\"index.html\" class=\"nav-item nav-link active\" > Home</a>")
                }
                else{
	                document.writeln("<a href=\"index.html\" class=\"nav-item nav-link\"> Home </a>")
	                //alert()
				}
				
				if(pageNo==2){
                	document.writeln("<a href=\"https://github.com/kadtechdemo/kadRepo/blob/main/about.html\" class=\"nav-item nav-link active\">About</a>")
                }
                else{
                	document.writeln("<a href=\"https://github.com/kadtechdemo/kadRepo/blob/main/about.html\" class=\"nav-item nav-link\">About</a>")
				}	
                
                /********************PAGE 3 (SECTORS)**************************/
                document.writeln("<div class=\"nav-item dropdown\">")
	             	if(pageNo==3){
	                	document.writeln("<a href=\"#\" class=\"nav-link dropdown-toggle active \" data-bs-toggle=\"dropdown\">Sectors</a>")
	                }
	                else{
						document.writeln("<a href=\"#\" class=\"nav-link dropdown-toggle\" data-bs-toggle=\"dropdown\">Sectors</a>")
					}	
	                document.writeln("<div class=\"dropdown-menu fade-up m-0\">")
	                    document.writeln("<a href=\"price.html\" class=\"dropdown-item\">Sector 1</a>")
	                    document.writeln("<a href=\"feature.html\" class=\"dropdown-item\">Sector 2</a>")
	                    document.writeln("<a href=\"quote.html\" class=\"dropdown-item\">Sector 3</a>")
	                document.writeln("</div>")
                document.writeln("</div>")
                /********************PAGE 3 (SECTORS)**************************/

                /********************PAGE 4 (PRODUCTS)**********************/
                document.writeln("<div class=\"nav-item dropdown\">")
                	if(pageNo==5){
	                    document.writeln("<a href=\"#\" class=\"nav-link active dropdown-toggle\" data-bs-toggle=\"dropdown\">Products</a>")
					}
					else{
	                    document.writeln("<a href=\"#\" class=\"nav-link dropdown-toggle\" data-bs-toggle=\"dropdown\" >Products</a>")
					}

	                document.writeln("<div class=\"dropdown-menu fade-up m-0\">")
                        document.writeln("<a href=\"application1.html\" class=\"dropdown-item\">Product 1</a>")
                        document.writeln("<a href=\"application2.html\" class=\"dropdown-item\">Product 2</a>")
                        document.writeln("<a href=\"application3.html\" class=\"dropdown-item\">Product 3</a>")
                    document.writeln("</div>")
                document.writeln("</div>")
                /********************PAGE 4 (PRODUCTS)**********************/

                /********************PAGE 5 (APPLICATIONS)**************************/
                document.writeln("<div class=\"nav-item dropdown\">")
                	if(pageNo==4){
	                    document.writeln("<a href=\"#\" class=\"nav-link active dropdown-toggle\" data-bs-toggle=\"dropdown\" >Applications</a>")
					}
					else{
	                    document.writeln("<a href=\"#\" class=\"nav-link dropdown-toggle\" data-bs-toggle=\"dropdown\" >Applications</a>")
					}
                    document.writeln("<div class=\"dropdown-menu fade-up m-0\">")
                        document.writeln("<a href=\"ReinforcedSoilSlope.html\" class=\"dropdown-item\">Reinforced Soil Slope</a>")
                        document.writeln("<a href=\"ReinforcedSoilWall.html\" class=\"dropdown-item\">Reinforced Soil Wall</a>")
                        document.writeln("<a href=\"GroundImprovement.html\" class=\"dropdown-item\">Ground Improvement</a>")
                    document.writeln("</div>")
                document.writeln("</div>")
                /********************PAGE 5 (APPLICATIONS)**************************/
                
                /********************PAGE 6 (SERVICES)**********************/
                document.writeln("<div class=\"nav-item dropdown\">")
	            	if(pageNo==6){
	                    document.writeln("<a href=\"#\" class=\"nav-link active dropdown-toggle\" data-bs-toggle=\"dropdown\">Services</a>")
					}
					else{
	                    document.writeln("<a href=\"#\" class=\"nav-link dropdown-toggle\" data-bs-toggle=\"dropdown\" >Services</a>")
					}
                   document.writeln("<div class=\"dropdown-menu fade-up m-0\">")
                        document.writeln("<a href=\"services1.html\" class=\"dropdown-item\">Service 1</a>")
                        document.writeln("<a href=\"services2.html\" class=\"dropdown-item\">Service 2</a>")
                        document.writeln("<a href=\"services3.html\" class=\"dropdown-item\">Service 3</a>")
                    document.writeln("</div>")
                document.writeln("</div>")
                /********************PAGE 6 (SERVICES)**********************/

                /********************PAGE 7 (PROJECTS)**********************/
                if(pageNo==7){
					document.writeln("<a href=\"projects.html\" class=\"nav-item nav-link active\">Projects</a>")
				}
				else{
					document.writeln("<a href=\"projects.html\" class=\"nav-item nav-link\">Projects</a>")
				}	
                /********************PAGE 7 (PROJECTS)**********************/

                /********************PAGE 8 (NEW MEDIA)**********************/
                if(pageNo==8){
					document.writeln("<a href=\"newsmedia.html\" class=\"nav-item nav-link active\">News & Media</a>")
				}
				else{
					document.writeln("<a href=\"newsmedia.html\" class=\"nav-item nav-link\">News & Media</a>")
				}	
                /********************PAGE 8 (NEW MEDIA)**********************/

                /********************PAGE 9 (CONTACT)**********************/
                if(pageNo==9){
					document.writeln("<a href=\"contact.html\" class=\"nav-item nav-link active\">Contact</a>")
				}
				else{
					document.writeln("<a href=\"contact.html\" class=\"nav-item nav-link\">Contact</a>")
				}	
                /********************PAGE 9 (CONTACT)**********************/

            document.writeln("</div>")

        document.writeln("</div>")
    document.writeln("</nav>")
     
    }
	
	function loadFooter(){
			document.writeln("<div class=\"container-fluid bg-dark text-light footer pt-5 wow fadeIn\" data-wow-delay=\"0.1s\" style=\"margin-top: 6rem;\">")
	        document.writeln("<div class=\"container py-5\">")
	            document.writeln("<div class=\"row g-5\">")
	                document.writeln("<div class=\"col-lg-4 col-md-6\">")
	                    document.writeln("<h4 class=\"text-light mb-4\">Address</h4>")
	                    document.writeln("<p class=\"mb-2\"><i class=\"fa fa-map-marker-alt me-3\"></i>Ambuja Neotia Ecocentre, EM Block, Sector V, Kolkata-700 091</p>")
	                    document.writeln("<p class=\"mb-2\"><i class=\"fa fa-phone-alt me-3\"></i>+91 33 2466 6600</p>")
	                    document.writeln("<p class=\"mb-2\"><i class=\"fa fa-envelope me-3\"></i>info@kadtech.in</p>")
	                    document.writeln("<div class=\"d-flex pt-2\">")
	                        document.writeln("<a class=\"btn btn-outline-light btn-social\" href=\"\"><i class=\"fab fa-twitter\"></i></a>")
	                        document.writeln("<a class=\"btn btn-outline-light btn-social\" href=\"\"><i class=\"fab fa-facebook-f\"></i></a>")
	                        document.writeln("<a class=\"btn btn-outline-light btn-social\" href=\"\"><i class=\"fab fa-youtube\"></i></a>")
	                        document.writeln("<a class=\"btn btn-outline-light btn-social\" href=\"\"><i class=\"fab fa-linkedin-in\"></i></a>")
	                    document.writeln("</div>")
	                document.writeln("</div>")

	                document.writeln("<div class=\"col-lg-4 col-md-6\">")
	                    document.writeln("<h4 class=\"text-light mb-4\">Quick Links</h4>")
	                    document.writeln("<a class=\"btn btn-link\" href=\"\">About Us</a>")
	                    document.writeln("<a class=\"btn btn-link\" href=\"\">Product Applications</a>")
	                    document.writeln("<a class=\"btn btn-link\" href=\"\">Projects</a>")
	                    document.writeln("<a class=\"btn btn-link\" href=\"\">Contact Us</a>")
	                document.writeln("</div>")
	                
	                document.writeln("<div class=\"col-lg-4 col-md-6\">")
	                    document.writeln("<h4 class=\"text-light mb-4\">Newsletter</h4>")
	                    document.writeln("<p>------------</p>")
	                    document.writeln("<div class=\"position-relative mx-auto\" style=\"max-width: 400px;\">")
	                        document.writeln("<input class=\"form-control border-0 w-100 py-3 ps-4 pe-5\" type=\"text\" placeholder=\"Your email\">")
	                        document.writeln("<button type=\"button\" class=\"btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2\">SignUp</button>")
	                    document.writeln("</div>")
	                document.writeln("</div>")
	            document.writeln("</div>")
	        document.writeln("</div>")
	        document.writeln("<div class=\"container\">")
	            document.writeln("<div class=\"copyright\">")
	                document.writeln("<div class=\"row\">")
	                    document.writeln("<div class=\"col-md-6 text-center text-md-start mb-3 mb-md-0\"> <a class=\"border-bottom\" href=\"#\">Kadtech Geoinfra Pvt Ltd</a>, All Right Reserved.")
	                    document.writeln("</div>")
	                    document.writeln("<div class=\"col-md-6 text-center text-md-end\">")
	                        /*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/
	                        document.writeln("Designed By <a class=\"border-bottom\" href=\"\">NR Infotechware</a>")
	                    document.writeln("</div>")
	                document.writeln("</div>")
	            document.writeln("</div>")
	        document.writeln("</div>")
	    document.writeln("</div>")
	}



   
    //alert(document.getElementById(1).className)
