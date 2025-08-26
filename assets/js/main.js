let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// Heart function
let heartCountText = document.querySelector('.heartCount');
let heartBtns = document.querySelectorAll(".heartBtn");
heartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    heartCount++;
    heartCountText.innerText = heartCount;
  });
});


// copy function
let copyCountText = document.querySelector('.copyCount');
let copyBtns = document.querySelectorAll(".copyBtn");
copyBtns.forEach(btn => {
    btn.addEventListener("click", () =>{
        const card = btn.closest(".serviceBox");
        const phoneNumber = card.querySelector(".phoneNumber").textContent;
        const success = navigator.clipboard.writeText(phoneNumber);
        if(success) {
            alert("নম্বর কপি হয়েছে " + phoneNumber);
        } else {
            console.error("নম্বর কপি হয়নি");
        }
        copyCount++;
        copyCountText.innerText = copyCount;
    });
});


// call function
let coinCountText = document.querySelector('.coinCount');
let callBtns = document.querySelectorAll(".callBtn");
callBtns.forEach(btn => {
    btn.addEventListener("click", () =>{
        const card = btn.closest(".serviceBox");
        const phoneNumber = card.querySelector(".phoneNumber").textContent;
        const serviceName = card.querySelector("h2").textContent;
        const subTitle = card.querySelector(".subTitle").textContent;
        const history = document.querySelector(".history-wrap");
        const clearBtn = document.querySelector(".clearBtn");

        let currentDate = new Date();
        let time = currentDate.toLocaleTimeString();  

        const div = document.createElement("div");
        div.className = "bg-[#FAFAFA] p-4 rounded-lg text-base flex items-center justify-between gap-2";
        div.innerHTML = `
        <div>
            <p>${serviceName}</p>
            <p class="text-[#5C5C5C] mt-1">${phoneNumber}</p>
        </div>
        <p>${time}</p>
        `;

        if(coinCount >= 20){
            coinCount -= 20;
            alert("📞 Calling " + subTitle +  " " + phoneNumber);
            coinCountText.innerText = coinCount;
            history.appendChild(div);
        }else{
            alert("❌ পর্যাপ্ত কয়েন নেই। কল করার জন্য কমপক্ষে ২০টি কয়েন প্রয়োজন");
        }
        clearBtn.addEventListener("click", () => {
            history.innerHTML = "";
        });
    });
});