





   
      
let Cractor_div = document.getElementById("Cractor_div");
let main_div = document.getElementById("main_div")
var timerId;
     async function searchMovies(n){
         let res = await fetch(`https://swapi.dev/api/people/?search=${n}`)

         let data = await res.json();
         console.log(data.results)
         return data.results;
}

  function appendMovies(m){
       
            Cractor_div.innerHTML = null;
            
      
          if (m.length === 0) {
              var err = document.createElement("p")
              err.innerHTML = "No result found"
              err.style.color = "white"
              Cractor_div.append(err)
          }
      
      
      m.forEach(({ name , birth_year , gender, height , hair_color, eye_color, mass}) => {
                let p = document.createElement("p");
                p.classList.add("p_name")
          p.innerHTML = name;
          
          function showDetails() {
              var body = document.querySelector("body")
              main_div.style.display = "none"

              var Details = document.createElement("div");
              Details.id = "Details"

              var actror = document.createElement("p")
              actror.innerHTML = name;
              actror.id = "actor"
              

              var personal = document.createElement("div");
              personal.id = "personal_div"
              personal.innerHTML = `<h3>Personal Details</h3>
               <p >Birth Year : ${birth_year}</p>
               <p >Gender : ${gender}</p>
               <p >Height : ${height}</p>
              `
  
              var antomony = document.createElement("div");
              antomony.id = "antomony_div"
              antomony.innerHTML = `<h3>Anatomy</h3>
               <p >Eye Color : ${eye_color}</p>
               <p >Mass : ${mass}</p>
               <p >Hair Color : ${hair_color}</p>
              `

              var goBack = document.createElement("button");
              goBack.id = "back_btn"
              goBack.innerHTML = "Go Back"


              function GoBack() {
                  main_div.style.display = "flex"
                  Details.style.display = "none"
              }
              goBack.addEventListener("click", GoBack);

              Details.append(actror , personal, antomony, goBack)
              
              body.append(Details)

          }
           p.addEventListener("click" , showDetails)





               let birth_Year = document.createElement("p")
               birth_Year.innerHTML = birth_year;
              birth_Year.classList.add("birth")
          let Gender = document.createElement("p")
          Gender.innerHTML = gender;
          Gender.classList.add("gender")

                Cractor_div.append(p , birth_Year, Gender);
            });
        }
     async  function main(){
      let name = document.getElementById("query").value;

        let movies =  await searchMovies(name);
       if(movies === undefined){
           return false;
       }
       appendMovies(movies);

       console.log(movies);
}
      
 function debounce(func, deley){
              let name = document.getElementById("query").value; 

     if (name.length < 1) {
         Cractor_div.style.visibility = "hidden"
         main_div.style.marginTop = "-500px"
     } else {
         Cractor_div.style.visibility = "visible"
          main_div.style.marginTop = "-650px"
     }
         
          if(timerId){
              clearTimeout(timerId);
          }


          timerId =   setTimeout( ()=>{
            func();
        }, deley);
      }