$(document).ready(function(){

    // Slider
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1100,
            responsive: true,
            pager: true
          });
        }
   
    // Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'PubliCaDo el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ad a facilis officiis aliquam maxime! Provident ducimus nihil libero quos recusandae quia ipsa vitae voluptas exercitationem nostrum a omnis sequi tenetur nulla cum tempora deserunt autem impedit modi incidunt perferendis, reprehenderit sit voluptatibus itaque. Eum explicabo necessitatibus minus dolorem sunt!'
            },
            {
                title: 'Prueba de titulo 1',
                date: 'PubliCaDo el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ad a facilis officiis aliquam maxime! Provident ducimus nihil libero quos recusandae quia ipsa vitae voluptas exercitationem nostrum a omnis sequi tenetur nulla cum tempora deserunt autem impedit modi incidunt perferendis, reprehenderit sit voluptatibus itaque. Eum explicabo necessitatibus minus dolorem sunt!'
            },
            {
                title: 'Prueba de titulo 1',
                date: 'PubliCaDo el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ad a facilis officiis aliquam maxime! Provident ducimus nihil libero quos recusandae quia ipsa vitae voluptas exercitationem nostrum a omnis sequi tenetur nulla cum tempora deserunt autem impedit modi incidunt perferendis, reprehenderit sit voluptatibus itaque. Eum explicabo necessitatibus minus dolorem sunt!'
            },
            {
                title: 'Prueba de titulo 1',
                date: 'PubliCaDo el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ad a facilis officiis aliquam maxime! Provident ducimus nihil libero quos recusandae quia ipsa vitae voluptas exercitationem nostrum a omnis sequi tenetur nulla cum tempora deserunt autem impedit modi incidunt perferendis, reprehenderit sit voluptatibus itaque. Eum explicabo necessitatibus minus dolorem sunt!'}
        ]

        console.log(posts)
            posts.forEach((el, index) =>{
                let post = 
                `
                <article class="post">
                    <h2>${el.title}</h2>
                    <span class="date">${el.date}</span>
                    <p>${el.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
                `;

                $("#posts").append(post);
            });

    }

    let theme = $('#theme');


    $('#to-green').click(function(){
        theme.attr('href', 'css/gree.css')
    })

    $('#to-red').click(function(){
        theme.attr('href', 'css/red.css')
    })

    $('#to-blue').click(function(){
        theme.attr('href', 'css/blue.css')
    })

    // Scroll arriba de la web

    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 800)

        return false;
    });

    // Login falso

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");


    if(form_name != null && form_name != 'undefined'){
        var about_parrafo = $('#about p');

        about_parrafo.html("<strong>Bienvenido </strong>" + form_name );

        about_parrafo.append("<a href='#' id='logout'> Cerrar sesión </a>");

        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        })

    }

    // Acordeon

    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion();
    }
    
    // Reloj

    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
            var reloj = moment().format("h:mm:ss");
            $('#reloj').html(reloj);
        }, 1000)
        
    }


    // Validación
    if(window.location.href.indexOf('contact') > -1){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}




})