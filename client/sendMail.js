
const signupBtn = document.getElementById("next-three").addEventListener('click' , async (e)=>{
    e.preventDefault();
    const taskTitle = document.getElementById('task__title').value;
    const details = document.getElementById('details').value;
    const locationOffline = document.getElementById('radioMe').value;
    const SenderEmailAddress = document.getElementById('address').value;
    const dateTime = document.getElementById('dateTime').value;
    const priceValue = document.getElementById('price__value').value;
    
    let location = locationOffline == 'offline_location' ? 'offline' : 'online';


    if(!taskTitle || !details || !location || !SenderEmailAddress || !dateTime || !priceValue) {
        alert('please fill in all details');

      return  goNextOne();
    }else if(!(/[\w]+@[a-zA-Z]+\.[a-zA-Z]{2}/.test(SenderEmailAddress))){
              alert('Invalid email')
          return    goSecondOne();
    }
    
        const responseForLocation = await fetch(`http://ip-api.com/json`, {
          method : "GET"
        }).then(res => res.json())
          .then(response => response)
          .catch(e => e)

    const responseBody = {sender : SenderEmailAddress, 
                        taskTitle : taskTitle,
                        taskDetails: details, 
                        senderlocation: `${responseForLocation["city"]}, ${responseForLocation["country"]} in ${responseForLocation["timezone"]}`, 
                        location: location, 
                        dateTime: dateTime,
                        priceValue: priceValue };
    const response  = await fetch(`https://bridge-email-api.herokuapp.com/api/message/send` , {
        method: "POST",
        body: JSON.stringify(responseBody),
        headers:{
            "content-type": "application/json"
      }})
        .then(res => res.json())
        .then(response => response)
        .catch(e => e);

        if(response["status"] === 'success'){
             return congrats.style.display = 'block';
        }
});

    function goNextOne() {
        /*make current page fade & new ppae appear*/
        modalContent.style.display = "block";
        divi.style.display = "none";
        stepOne.style.display = "block";
        stepTwo.style.display = "none";
        congrats.style.display = 'none';
        console.log("Go Next One");
    }

    function goSecondOne() {
        /*make current page fade & new ppae appear*/
        modalContent.style.display = "block";
        divi.style.display = "none";
        stepOne.style.display = "none";
        stepTwo.style.display = "block";
        congrats.style.display = 'none';
        console.log("Go second One");
    }