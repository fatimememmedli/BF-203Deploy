let row = document.querySelector(".row");
let url = "https://northwind.vercel.app/api/suppliers/";
let companyInp = document.querySelector(".company-input");
let contactInp = document.querySelector(".contact-input");
let phoneInp = document.querySelector(".phone-input");
let cityInp = document.querySelector(".city-input");
let countryInp = document.querySelector(".country-input");
let postBtn = document.querySelector(".post-btn");
let putBtn = document.querySelector(".put-btn");
let patchBtn = document.querySelector("patch-btn");
// Fetch GET start
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((elem) => {
      row.innerHTML += `
      <div class="card me-3 mb-3" style="width: 18rem">
        <img
          src="https://www.zastavki.com/pictures/originals/2014/World___Italy_A_gondola_ride_through_the_channels_in_Venice__Italy_062212_.jpg"
          class="card-img-top object-fit-cover w-100"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${elem.companyName}</h5>
          <p class="contactName">${elem.contactName}</p>
          <p class="phone">${elem.address?.phone}</p>
          <p class="City">${elem.address?.city}</p>
          <p class="Country">${elem.address?.country}</p>

          <button type="button" name="${elem.id}" class="delete-button btn btn-danger">Danger</button>

        </div>
      </div>
    `;
    });
    // Fetch Get end

    //Fetch Delete method ve Ekrandan kartin silinmesi
    let deleteBtns = document.querySelectorAll(".delete-button");
    // console.log(deleteBtns);
    for (let deletebtn of deleteBtns) {
      deletebtn.addEventListener("click", function () {
        // console.log("salam");
        deletebtn.parentElement.parentElement.remove();
        fetch(url + this.name, {
          method: "Delete",
        })
          .then((res) => res.json())
          .then((data) => {});
      });
    }

    //
  });

//post method
postBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let obj = {
    address: {},
  };
  obj.companyName = companyInp.value;
  obj.contactName = contactInp.value;
  obj.address.phone = phoneInp.value;
  obj.address.city = cityInp.value;
  obj.country = countryInp.value;
  console.log(obj);
  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      row.innerHTML += `
    <div class="card me-3 mb-3" style="width: 18rem">
      <img
        src="https://www.zastavki.com/pictures/originals/2014/World___Italy_A_gondola_ride_through_the_channels_in_Venice__Italy_062212_.jpg"
        class="card-img-top object-fit-cover w-100"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${companyInp.value}</h5>
        <p class="contactName">${contactInp.value}</p>
        <p class="phone">${phoneInp.value}</p>
        <p class="City">${cityInp.value}</p>
        <p class="Country">${countryInp.value}/p>

        <button type="button" name="${data.id}" class="delete-button btn btn-danger">Danger</button>

      </div>
    </div>
  `;
      let deleteBtns = document.querySelectorAll(".delete-button");
      // console.log(deleteBtns);
      for (let deletebtn of deleteBtns) {
        deletebtn.addEventListener("click", function () {
          // console.log("salam");
          deletebtn.parentElement.parentElement.parentElement.remove();
          fetch(url + this.name, {
            method: "Delete",
          })
            .then((res) => res.json())
            .then((data) => {});
        });
      }
    });
});
//post method end

//put method
putBtn.addEventListener("click", function () {
  let obj2 = {
    address: {},
  };
  obj2.companyName = companyInp.value;
  obj2.contactName = contactInp.value;
  obj2.address.phone = phoneInp.value;
  obj2.address.city = cityInp.value;
  obj2.country = countryInp.value;
  console.log(obj2);
  fetch(url + "4", {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(obj2),
  })
    .then((res) => res.json())
    .then((data) => {});
});
//put method end

//patch method
patchBtn.addEventListener("click", function () {
  let obj3 = {};
  obj3.contactName = contactInp.value;
  fetch(url + "1", {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(obj3),
  })
    .then((res) => res.json())
    .then((data) => {});
});
//patch method end
