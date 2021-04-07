    let $darkMode = localStorage.getItem("darkMode")
    
    let $btnTheme = document.querySelector(".theme-btn")
    let $btnThemeMobile = document.querySelector(".theme-btn__mobile")


    let $btnPoint = document.querySelector(".btn-point")
    let $btnPointMobile = document.querySelector(".btn-point__mobile");
    
    
    let $btnIcon = document.querySelector(".fa-sun");
    let $btnIconMobile = document.querySelector("#icon-mobile");



    const enableDarkMode = () => {
        document.body.classList.add("darkMode");
        localStorage.setItem("darkMode", "enabled");
    }

    const disableDarkMode = () => {
        document.body.classList.remove("darkMode");
        localStorage.setItem("darkMode", null);
    }

    if($darkMode === "enabled" && !$btnPoint.classList.contains("active")){
        enableDarkMode();
        $btnPoint.classList.add("active");
        $btnIconMobile.classList.add("active")
    }


    const theme = () => {
        $darkMode = localStorage.getItem("darkMode")

        if($darkMode !== "enabled" && !$btnPoint.classList.contains("active")){
            enableDarkMode();
            $btnPoint.classList.add("active");
            $btnPointMobile.classList.add("pushed");
        } else {
            disableDarkMode();
            $btnPoint.classList.remove("active");
            $btnPointMobile.classList.remove("pushed");

        }
    };

    
    const claseBtn = (clase) => {
        
        if(clase.classList.contains("fa-sun")){
            clase.classList.remove("fa-sun");
            clase.classList.add("fa-moon");
        } else {
            clase.classList.add("fa-sun");
            clase.classList.remove("fa-moon");
        }
    };

    
    $btnTheme.addEventListener("click", function(){


        claseBtn($btnIcon)
        theme();

    })


    $btnThemeMobile.addEventListener("click", function(){
        
    
        claseBtn($btnIconMobile)
        theme();
    })