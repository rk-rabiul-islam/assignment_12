// 3. Create a marriage age check calculator for male and female with status.


const m_check = document.querySelector("#m-check");
const m_name = document.querySelector("#m-name");
const m_gender = document.querySelector("#m-gender");
const m_date = document.querySelector("#m-date");
const m_output = document.querySelector(".m-output");


/**
 * The main function, what users will see.
 */

m_check.addEventListener('click', () => {


    if(m_name.value == '' || m_gender.value == 'Gender' || m_date == ''){

        m_output.innerHTML = `<p class = 'alert alert-danger'>All Fields are required.</p>`
    }else{

        m_output.innerHTML = agechack (m_name.value, m_date.value)
    }
    m_name.value = "";
    m_gender.value = "";
    m_date.value = ""; 
    
});

/**
 * marrage status finding work.
 * @param {*} name 
 * @param {*} year 
 * @returns what is user marrage status.
 */

function agechack(name, year) {

    let m_date = new Date(); 
    m_age = m_date.getFullYear() - year;

    if(m_age <= 18){
        return `<p class = 'alert alert-danger'> Dear" ${mGender(m_gender.value)} ${name} Your Age is not good for marrage you are ${m_age} Years old. </p>`;

    }else if(m_age > 50){
            return `<p class = 'alert alert-dark'> Dear" ${mGender(m_gender.value)} ${name} Your are very old your marrage time is over, many days ago you are ${m_age} Years old. </p>`;
        }
    
    else{
        return `<p class = 'alert alert-success'> Dear" ${mGender(m_gender.value)} ${name} Your Age is good for marrage you are ${m_age} Years old. </p>`;
    }
}
/**
 * Gender Finding Work.
 * 
 * @param {*} gender 
 * @returns what is user gender.
 */
function  mGender(gender) {

    if (gender == "Female"){
        return `Apu`
    }else{
        return `Vaiiya`
    }
    
}


