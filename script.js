
//BOTÃO SOBRE MIM
btn_state_about = "desativado";
function ativar_sobremim(){
if(btn_state_about == "desativado"){

    alert("ainda nao funciona");
    document.getElementById("btn_sobremim").style.filter = "invert(1)";
    btn_state_about = "ativado";
    btn_state_projects = "ativado";
    ativar_projetos();
    
} else if (btn_state_about == "ativado"){

    document.getElementById("btn_sobremim").style.filter = "invert(0)";
    btn_state_about = "desativado";
}
}
//BOTÃO SOBRE MIM




//BOTÃO PROJETOS
btn_state_projects = "desativado";
function ativar_projetos(){
if(btn_state_projects == "desativado"){


    document.getElementById("btn_projetos").style.filter = "invert(1)";
    document.getElementById("background_projetos").style.display = "block";
    
    btn_state_projects = "ativado";
    btn_state_about = "ativado";
    ativar_sobremim();
    window.scrollTo(0, 500);
    
} else if (btn_state_projects == "ativado"){

    
    document.getElementById("btn_projetos").style.filter = "invert(0)";
    document.getElementById("background_projetos").style.display = "none";
    btn_state_projects = "desativado";
    window.scrollTo(0, 1);
}
}
//BOTÃO PROJETOS


//RETORNAR PAGINA
function return_page(){
    window.scrollTo(0, 1);   
}
//RETORNAR PAGINA




//Tema Escuro

    tema = "claro";
    function alterar_tema(){
        
        if(tema == "claro"){


        document.getElementById("wave_bottom").style.transition = "2s";
        document.getElementById("wave_bottom").style.filter = "invert(0.85)";

        document.getElementById("background_projetos").style.transition= "2s";
        document.getElementById("background_projetos").style.backgroundColor = "#262626";

        document.getElementById("Titulo_Projetos").style.transition= "2s";
        document.getElementById("Titulo_Projetos").style.color= "#e9ffe9";

        
        
        document.getElementById("img_01").style.transition= "2s";
        document.getElementById("img_01").style.border= "3px solid #e9ffe9";
        document.getElementById("p_text_01").style.transition= "2s";
        document.getElementById("p_text_01").style.color= "#e9ffe9";


        document.getElementById("img_02").style.transition= "2s";
        document.getElementById("img_02").style.border= "3px solid #e9ffe9";
        document.getElementById("p_text_02").style.transition= "2s";
        document.getElementById("p_text_02").style.color= "#e9ffe9";

        document.getElementById("img_03").style.transition= "2s";
        document.getElementById("img_03").style.border= "3px solid #e9ffe9";
        document.getElementById("p_text_03").style.transition= "2s";
        document.getElementById("p_text_03").style.color= "#e9ffe9";
        
        document.getElementById("img_04").style.transition= "2s";
        document.getElementById("img_04").style.border= "3px solid #e9ffe9";
        document.getElementById("p_text_04").style.transition= "2s";
        document.getElementById("p_text_04").style.color= "#e9ffe9";

        document.getElementById("return_icon").style.color = "#e9ffe9";
        tema = "escuro";



        } else if (tema == "escuro"){

            
        document.getElementById("wave_bottom").style.transition = "1.9s";
        document.getElementById("wave_bottom").style.filter = "";

        document.getElementById("background_projetos").style.transition= "2s";
        document.getElementById("background_projetos").style.backgroundColor = "#fff";

        document.getElementById("Titulo_Projetos").style.transition= "2s";
        document.getElementById("Titulo_Projetos").style.color= "#00467f";

        
        
        document.getElementById("img_01").style.transition= "2s";
        document.getElementById("img_01").style.border= "3px solid #00467f";
        document.getElementById("p_text_01").style.transition= "2s";
        document.getElementById("p_text_01").style.color= "#00467f";


        document.getElementById("img_02").style.transition= "2s";
        document.getElementById("img_02").style.border= "3px solid #00467f";
        document.getElementById("p_text_02").style.transition= "2s";
        document.getElementById("p_text_02").style.color= "#00467f";

        document.getElementById("img_03").style.transition= "2s";
        document.getElementById("img_03").style.border= "3px solid #00467f";
        document.getElementById("p_text_03").style.transition= "2s";
        document.getElementById("p_text_03").style.color= "#00467f";
        
        document.getElementById("img_04").style.transition= "2s";
        document.getElementById("img_04").style.border= "3px solid #00467f";
        document.getElementById("p_text_04").style.transition= "2s";
        document.getElementById("p_text_04").style.color= "#00467f";
        
        document.getElementById("return_icon").style.color = "#00467f";
        tema = "claro";
        }        
        
    }
//Tema Escuro