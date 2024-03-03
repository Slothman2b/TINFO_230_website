var reading = false;

function isReading(){
    if (reading){
        document.getElementById("html").style.overflowY = 'hidden';

    } else {
        document.getElementById("html").style.overflowY = 'auto';
    }
}


const show1Button = document.getElementById("show1Dialog");
const hide1Button = document.getElementById("hide1Dialog");

show1Button.addEventListener("click", () => {
    jan302024.showModal();
    reading = true;
    isReading();
  });


hide1Button.addEventListener("click", () => {
    jan302024.close ();
    reading = false;
    isReading();
  });


const show2Button = document.getElementById("show2Dialog");
const hide2Button = document.getElementById("hide2Dialog");

show2Button.addEventListener("click", () => {
    jan112024.showModal();
    reading = true;
    isReading();
  });


hide2Button.addEventListener("click", () => {
    jan112024.close ();
    reading = false;
    isReading();
  });



const show3Button = document.getElementById("show3Dialog");
const hide3Button = document.getElementById("hide3Dialog");

show3Button.addEventListener("click", () => {
    sept202023.showModal();
    reading = true;
    isReading();
  });


hide3Button.addEventListener("click", () => {
    sept202023.close ();
    reading = false;
    isReading();
  });


const show4Button = document.getElementById("show4Dialog");
const hide4Button = document.getElementById("hide4Dialog");

show4Button.addEventListener("click", () => {
    sep192023.showModal();
    reading = true;
    isReading();
  });


hide4Button.addEventListener("click", () => {
    sep192023.close ();
    reading = false;
    isReading();
  });

  const showButton5 = document.getElementById("showDialog5");
  const hideButton5 = document.getElementById("hideDialog5");
  
  showButton5.addEventListener("click", () => {
      sep152023.showModal();
      reading = true;
      isReading();
    });
  
  
  hideButton5.addEventListener("click", () => {
      sep152023.close ();
      reading = false;
      isReading();
    });

const showButton6 = document.getElementById("showDialog6");
const hideButton6 = document.getElementById("hideDialog6");
  
  showButton6.addEventListener("click", () => {
    aug222023.showModal();
    reading = true;
    isReading();
    });
  
  
  hideButton6.addEventListener("click", () => {
    aug222023.close ();
    reading = false;
    isReading();
    });


const showButton7 = document.getElementById("showDialog7");
const hideButton7 = document.getElementById("hideDialog7");
  
  showButton7.addEventListener("click", () => {
    jun012023.showModal();
    reading = true;
    isReading();
    });
  
  
  hideButton7.addEventListener("click", () => {
    jun012023.close ();
    reading = false;
    isReading();
    });

const showButton8 = document.getElementById("showDialog8");
const hideButton8 = document.getElementById("hideDialog8");
  
  showButton8.addEventListener("click", () => {
    may242023.showModal();
    reading = true;
    isReading();
    });
  
  
  hideButton8.addEventListener("click", () => {
    may242023.close ();
    reading = false;
    isReading();
    });

const showButton9 = document.getElementById("showDialog9");
const hideButton9 = document.getElementById("hideDialog9");
  
  showButton9.addEventListener("click", () => {
    apr122023.showModal();
    reading = true;
    isReading();
    });
  
  
  hideButton9.addEventListener("click", () => {
    apr122023.close ();
    reading = false;
    isReading();
    });