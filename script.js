const objects = [
    {
        "title": "Change Your Attitude",
        "img": "imgs/changeyourattitude.png",
        "description": "A pink corrugated plastic sign with hand-lettered type in white and red. The sign reads \"Change Your Attitude, Show Your Gratitude.\"",
        "type": "sign",
        "event": "picket_line",
        "radicalRating": "★★"
    },
    {
        "title": "Students On Strike",
        "img": "imgs/studentsonstrike.png",
        "description": "A risograph print in red. The sign reads, \"New School Students On Strike In Solidarity.\"",
        "type": "sign",
        "event": "picket_line",
        "radicalRating": "★★★★"
    },
    {
        "title": "Living Wages",
        "img": "imgs/livingwages.png",
        "description": "A black corrugated plastic sign with hand-lettered type in white and red. The sign reads \"Living Wages, not Dying Wages.\"",
        "type": "sign",
        "event": "funeral",
        "radicalRating": "★★★★"
    },
    {
        "title": "No Free Labor!",
        "img": "imgs/nofreelabor.png",
        "description": "A white foam board sign, laminated in plastic. Printed on it is a minion from the Despicable Me franchise, holding up a wooden sign that reads \"No Free Labor!\"",
        "type": "sign",
        "event": "picket_line",
        "radicalRating": "★★★★★"
    },
    {
        "title": "RIP",
        "img": "imgs/ripfairpay.png",
        "description": "A sign in the shape of a headstone made of foam core, painted in gray. Faux rose petals are glued on top of the sign. It reads \"RIP FAIR PAY @newschool\"",
        "type": "sign",
        "event": "funeral",
        "radicalRating": "★★★★"
    },
    {
        "title": "Putting the Union in Union Square",
        "img": "imgs/unioninunionsquare.png",
        "description": "A black sign made out of foamcore. In all-white paint pen, it reads \"UAW Putting the Union in Union Square.\"",
        "type": "sign",
        "event": "funeral",
        "radicalRating": "★★★"
    },
    {
        "title": "We Won't Be Beaten Down",
        "img": "imgs/wewontbebeaten.png",
        "description": "A white shirt with exposed, overlocked seams running horizontally across it in black thread. In black letters on top, it reads \"We Won't Be Beaten Down.\"",
        "type": "clothing",
        "event": "picket_line",
        "radicalRating": "★★★★★"
    },
    {
        "title": "Last, Best and Final Offer",
        "img": "imgs/lastbestfinal.png",
        "description": "A white board laminated in plastic, with text and a graphic printed on it. The text reads \"The New School Last, Best, And Final Offer Submitted to ACT-UAW November 20, 2022\". Underneath it, a penny is taped in the center of a graphic of a frame.",
        "type": "prop",
        "event": "picket_line",
        "radicalRating": "★★★★★"
    },
    {
        "title": "Union Busting",
        "img": "imgs/unionbusting.png",
        "description": "A red patch printed with white text that reads \"Union Busting is Disgusting.\"",
        "type": "clothing",
        "event": "picket_line",
        "radicalRating": "★★★★★"
    },
    {
        "title": "Ouija Board",
        "img": "imgs/ouija.png",
        "description": "A sign painted in black, mimicking the style of the design of a Ouija board. On the top, the text reads,\"The New School\",\"A Mystifying Institution.\" In ornate hand-lettering, below it, \"Part-Time Faculty Deserve Fair Wages or Goodbye,\" with the options \"Yes\" and \"No\" above them. Illustrations of narwhals, the sun, and the moon decorate the corners.",
        "type": "sign",
        "event": "funeral",
        "radicalRating": "★★★★★"
    },
    {
        "title": "Elmo <3 Labor",
        "img": "imgs/elmo.png",
        "description": "A simple, torn edge of a piece of corrugated cardboard. Scrawled in red crayon, it says \"Elmo <3 Labor.\"",
        "type": "sign",
        "event": "picket_line",
        "radicalRating": "★★★★★"
    },
    {
        "title": "Letter From The New School Labor Coalition",
        "img": "imgs/letter.png",
        "description": "A large, white piece of corrugated plastic board. Printed on it is a letter addressed to Dwight McBride from the New School Labor Coalition, adorned with signatures from participants of the Rally for Respect.",
        "type": "sign",
        "event": "rally_for_respect",
        "radicalRating": "★★★"
    },
    {
        "title": "Coffin",
        "img": "imgs/coffin.png",
        "description": "A large cardboard coffin painted in brown and gold. Ornate, gold letters on the top say \"TNS.\"",
        "type": "prop",
        "event": "funeral",
        "radicalRating": "★★★★★"
    },
    {
        "title": "Old Tricks",
        "img": "imgs/newold.png",
        "description": "Black, hand-lettered type on a cardboard sign that reads \"New School, Old Tricks.\"",
        "type": "sign",
        "event": "picket_line",
        "radicalRating": "★★"
    },
    {
        "title": "Prestige Is Not Payment",
        "img": "imgs/cheque.png",
        "description": "A white sign, designed in the style of a Bank of America cheque. The cheque is addressed to President McBride, and his \"15M Townhouse in NY-effing-C.\" In the payee information, the writing in red reads \"Prestige is NOT Payment.\" At the bottom right-hand corner, in blue, it reads \"Pay Our Profs Their Fucking $.\"",
        "type": "sign",
        "event": "funeral",
        "radicalRating": "★★★★★"
    },
    {
        "title": "No More Unpaid Labor!",
        "img": "imgs/nomore.png",
        "description": "A blue poster with white text that reads \"No More Unpaid Labor!\" Pictured on the bottom is a logo for the New School Part-time Faculty Union.",
        "type": "sign",
        "event": "act_uaw7902",
        "radicalRating": "★★★"
    },
    {
        "title": "UAW",
        "img": "imgs/uaw.png",
        "description": "A circular blue sign with the white logo of the labor union that represents the current part-time faculty and academic graduate student workers at The New School, the UAW, or the United Auto Workers.",
        "type": "sign",
        "event": "act_uaw7902",
        "radicalRating": "★★★"
    },
    {
        "title": "I Support The Union",
        "img": "imgs/isupport.png",
        "description": "A sticker with a graphic of a square chat bubble with a gradient outline. The text inside reads \"I support New School Part-Time Faculty Union.\"",
        "type": "sticker",
        "event": "act_uaw7902",
        "radicalRating": "★★★"
    },
    {
        "title": "F For The New School",
        "img": "imgs/grades.png",
        "description": "A cardboard sign in the style of a grading sheet. Written in red, the New School gets an \"F\" for \"Social Justice,\"\"Core Values,\" and \"Fair Contract.\"",
        "type": "sign",
        "event": "picket_line",
        "radicalRating": "★★★★"
    },
    {
        "title": "ACT-UAW Megaphone",
        "img": "imgs/megaphone.png",
        "description": "A red and white megaphone owned by the union, adorned with a variety of pro-union stickers.",
        "type": "prop",
        "event": "act_uaw7902",
        "radicalRating": "★★★★★"
    },
    {
        "title": "Hell No!",
        "img": "imgs/votehellno.png",
        "description": "A red foamcore sign cut in the shape of a burning flame. In black brush script, written on it, it says \"Vote Hell No!\"",
        "type": "sign",
        "event": "act_uaw7902",
        "radicalRating": "★★★★★"
    },
    {
        "title": "Angry Gnarls",
        "img": "imgs/gnarls.png",
        "description": "A foam sign depicting the mascot of the New School, Gnarls the Narwhal, wincing in pain.",
        "type": "prop",
        "event": "picket_line",
        "radicalRating": "★★★★"
    },
    {
        "title": "Fair Contract Now!",
        "img": "imgs/faircontract.png",
        "description": "A blue pin button with white text that reads \"Fair Contract Now,\" with the text \"The New School\" and \"NYU\" underneath it, representing ACT-UAW Local 7902 union, which encompasses both universities.",
        "type": "button",
        "event": "act_uaw7902",
        "radicalRating": "★★★"
    },
    {
        "title": "Healthcare For Peanuts",
        "img": "imgs/peanuts.png",
        "description": "A red sign, laminated in plastic. The sign depicts Snoopy from the Peanuts franchise, with a speech bubble on top of him, that reads \"We Can't Get Healthcare For Peanuts!\"",
        "type": "prop",
        "event": "picket_line",
        "radicalRating": "★★★★"
    },
    {
        "title": "Our Working Conditions",
        "img": "imgs/ourworkingconditions.png",
        "description": "A printout used in flyering by the ACT-UAW Local 7902. On the top, it reads \"Our Working Conditions Are Your Learning Conditions!\" It provides statistics and information related to the part-time faculty experience at The New School. On the bottom are three scannable QR codes: one for the Student-Faculty Solidarity Instagram page, ",
        "type": "printed_matter",
        "event": "picket_line",
        "radicalRating": "★★★"
    },
    {
        "title": "The UC",
        "img": "imgs/uc.png",
        "description": "A wordless sign. Printed on it is a cartoon black-and-white hand, gripping a cutout of the University Center building at 63 Fifth Avenue, a $353 million constructon project.",
        "type": "sign",
        "event": "picket_line",
        "radicalRating": "★★★★"
    },
    {
        "title": "Grateful For The Bargaining Team",
        "img": "imgs/grateful.png",
        "description": "A cardboard sign, painted in grey. Lettered in blue brush script is the text \"Grateful For Our Part-Time Bargaining Team,\" accompanied with a illustration of a hand turkey.",
        "type": "sign",
        "event": "picket_line",
        "radicalRating": "★★★★"
    },
    {
        "title": "Parsons Protesting",
        "img": "imgs/ptf.png",
        "description": "A illustration in brush on newsprint. Figures representing part-time faculty are drawn with their fists raised, a red bubble extending out of it that says \"Parsons\" and \"The New School.\"",
        "type": "sign",
        "event": "picket_line",
        "radicalRating": "★★★★★"
    },
    {
        "title": "A Little Bit Louder!",
        "img": "imgs/peoplepower.png",
        "description": "A plastic megaphone with text in red sharpie emblazoned along the cone. On one side it reads \"A Little Bit Louder!\", and the other, \"People Power!\"",
        "type": "prop",
        "event": "picket_line",
        "radicalRating": "★★★★★"
    },
    {
        "title": "Occupied at The New School",
        "img": "imgs/occupied.png",
        "description": "A grey button in the style of an occupied bathroom sign. On a red background, the text above reads \"Occupied.\" Below it, reads \"The New School.\"",
        "type": "button",
        "event": "occupation",
        "radicalRating": "★★★★"
    },
    {
        "title": "Sticker For Student-Faculty Solidarity",
        "img": "imgs/sfs.png",
        "description": "An unpeeled circular sticker decorated with the Student-Faculty Solidarity logo in red, on white paper.",
        "type": "sticker",
        "event": "student_faculty_solidarity",
        "radicalRating": "★★★"
    },
    {
        "title": "One New School",
        "img": "imgs/ons.png",
        "description": "A hand-lettered rendition of the letters \"ONS\" in gothic type, standing for \"One New School.\"",
        "type": "button",
        "event": "occupation",
        "radicalRating": "★★★★★"
    },
    {
        "title": "Taking on Amazon",
        "img": "imgs/amazon.png",
        "description": "A flyer advertising for an event hosted by Student-Faculty Solidarity called \"Labor Organizing 101: Taking on Amazon.\" The text is set in gothic type, with the classic orange arrow in the Amazon logo.",
        "type": "printed_matter",
        "event": "student_faculty_solidarity",
        "radicalRating": "★★★"
    },
    {
        "title": "Pay Our Professors",
        "img": "imgs/payourprofs.png",
        "description": "A simple white flyer with black text. Above, the text reads \"Pay Our Professors,\" and below, \"@studentfacultysolidarity.\"",
        "type": "printed_matter",
        "event": "student_faculty_solidarity",
        "radicalRating": "★★★"
    }
];

for (let object of objects) {
    let objectHTML = `
    <div class="data-img" style="background-image: url(${object.img})"></div>
    <div class="data-title"><h2>${object.title}</h2></div>`;
        
    let modalHTML = `
    <div class="modal">
        <div class="data-img" style="background-image: url(${object.img})"></div>
        <div class="data-info"> 
            <div class="data-title"><h2>${object.title}</h2></div>
            <div class="data-radicalrating"><h2>Radical Rating: ${object.radicalRating}</h2></div>
            <div class="data-type"><h2>Type: ${object.type}</h2></div>
            <div class="data-event"><h2>Event: ${object.event}</h2></div>
            <div class="data-description"><p>${object.description}</p></div>
        </div>
    </div> `;

    let newDiv = document.createElement("div");
    let newModal = document.createElement("div");

    let i = objects.indexOf(object);

    newDiv.classList.add("data");
    newDiv.classList.add("data-" + [i]);
    newModal.classList.add("modal-wrapper");
    newModal.classList.add("modal-" + [i]);

    newDiv.innerHTML = objectHTML;
    newModal.innerHTML = modalHTML;

    let container = document.querySelector("#content");
    let modalContainer = document.querySelector("#modalcontainer");

    newDiv.classList.add(`${object.type}`);
    console.log(`${object.type}`);

    container.appendChild(newDiv);
    modalContainer.appendChild(newModal);

}

for (let i = 0; i < objects.length; i++) {
   
    let thisDiv = document.querySelector(".data-" + [i]);
    let thisModal = document.querySelector(".modal-" + [i]);
    
    thisDiv.addEventListener("click", function () {
        thisModal.style.display = "block";
        window.onclick = function () {
            if (event.target == thisModal) {
              thisModal.style.display = "none";   
            }
        };
    });
}
  

let allFilters = document.querySelectorAll("footer button");

let signButton = document.querySelector("#sign");
let clothingButton = document.querySelector("#clothing");
let propButton = document.querySelector("#prop");
let printedmatterButton = document.querySelector("#printedmatter");
let stickerButton = document.querySelector("#sticker");
let buttonButton = document.querySelector("#button");

signButton.onclick = function(){
    let allData = document.querySelectorAll(".data"); 
    if(!signButton.classList.contains("clicked")){
          
          for(let j = 0; j < objects.length; j++){
              if(objects[j].type == "sign"){
                  allData[j].style.display = "flex";
                console.log( "here is" + allData[j]);
                console.log(j);
              }else{
                  allData[j].style.display ="none";
              }
          }
          signButton.classList.toggle("clicked");
    console.log(signButton.classList);}
    
    else {
      for(let j = 0; j < objects.length; j++){
        allData[j].style.display = "flex"
      }
      signButton.classList.toggle("clicked");
    }
 }

clothingButton.onclick = function(){
    let allData = document.querySelectorAll(".data"); 
    if(!clothingButton.classList.contains("clicked")){
          
          for(let j = 0; j < objects.length; j++){
              if(objects[j].type == "clothing"){
                  allData[j].style.display = "flex";
                console.log( "here is" + allData[j]);
                console.log(j);
              }else{
                  allData[j].style.display ="none";
              }
          }
          clothingButton.classList.toggle("clicked");
    console.log(clothingButton.classList);}
    
    else {
      for(let j = 0; j < objects.length; j++){
        allData[j].style.display = "flex"
      }
      clothingButton.classList.toggle("clicked");
    }
}

propButton.onclick = function(){
    let allData = document.querySelectorAll(".data"); 
    if(!propButton.classList.contains("clicked")){
          
          for(let j = 0; j < objects.length; j++){
              if(objects[j].type == "prop"){
                  allData[j].style.display = "flex";
                console.log( "here is" + allData[j]);
                console.log(j);
              }else{
                  allData[j].style.display ="none";
              }
          }
          propButton.classList.toggle("clicked");
    console.log(propButton.classList);}
    
    else {
      for(let j = 0; j < objects.length; j++){
        allData[j].style.display = "flex"
      }
      propButton.classList.toggle("clicked");
    }
}

printedmatterButton.onclick = function(){
        let allData = document.querySelectorAll(".data"); 
        if(!printedmatterButton.classList.contains("clicked")){
              
              for(let j = 0; j < objects.length; j++){
                  if(objects[j].type == "printed_matter"){
                      allData[j].style.display = "flex";
                    console.log( "here is" + allData[j]);
                    console.log(j);
                  }else{
                      allData[j].style.display ="none";
                  }
              }
              printedmatterButton.classList.toggle("clicked");
        console.log(printedmatterButton.classList);}
        
        else {
          for(let j = 0; j < objects.length; j++){
            allData[j].style.display = "flex"
          }
          printedmatterButton.classList.toggle("clicked");
        }
}

stickerButton.onclick = function(){
    let allData = document.querySelectorAll(".data"); 
    if(!stickerButton.classList.contains("clicked")){
          
          for(let j = 0; j < objects.length; j++){
              if(objects[j].type == "sticker"){
                  allData[j].style.display = "flex";
                console.log( "here is" + allData[j]);
                console.log(j);
              }else{
                  allData[j].style.display ="none";
              }
          }
          stickerButton.classList.toggle("clicked");
    console.log(stickerButton.classList);}
    
    else {
      for(let j = 0; j < objects.length; j++){
        allData[j].style.display = "flex"
      }
      stickerButton.classList.toggle("clicked");
    }
      }

buttonButton.onclick = function(){
        let allData = document.querySelectorAll(".data"); 
        if(!buttonButton.classList.contains("clicked")){
              
              for(let j = 0; j < objects.length; j++){
                  if(objects[j].type == "button"){
                      allData[j].style.display = "flex";
                    console.log( "here is" + allData[j]);
                    console.log(j);
                  }else{
                      allData[j].style.display ="none";
                  }
              }
              buttonButton.classList.toggle("clicked");
        console.log(buttonButton.classList);}
        
        else {
          for(let j = 0; j < objects.length; j++){
            allData[j].style.display = "flex"
          }
          buttonButton.classList.toggle("clicked");
        }
          }