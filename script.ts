
const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumePage = document.getElementById("resumePage") as HTMLElement;
const resumeContent = document.getElementById("resumeContent") as HTMLDivElement;
const resumePhoto = document.getElementById("resumePhoto") as HTMLImageElement;
const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
const resumeAddress = document.getElementById("resumeAddress") as HTMLParagraphElement;
const resumeLinkedin = document.getElementById("resumeLinkedin") as HTMLParagraphElement;
const resumeEducation = document.getElementById("resumeEducation") as HTMLParagraphElement;
const resumeWorkExperience = document.getElementById("resumeWorkExperience") as HTMLParagraphElement;
const resumeSkills = document.getElementById("resumeSkills") as HTMLParagraphElement;

form.addEventListener("submit", async(event:Event)=>{
    event.preventDefault()


    const educationGroups = document.querySelectorAll('.education-group');
    let educationHTML = '';

    educationGroups.forEach((group, index) => {
        const degree = (group.querySelector(`#degree-${index + 1}`) as HTMLInputElement).value;
        const institute = (group.querySelector(`#institute-${index + 1}`) as HTMLInputElement).value;
        const year = (group.querySelector(`#year-${index + 1}`) as HTMLInputElement).value;

        educationHTML += `
            <div class="education-entry">
                <p><strong>Degree:</strong> ${degree}</p>
                <p><strong>Institute:</strong> ${institute}</p>
                <p><strong>Year:</strong> ${year}</p><br>
            </div>`;
    });


    resumeEducation.innerHTML = educationHTML;

    const experienceGroups = document.querySelectorAll('.experience-group');
    let workExperienceHTML = '';

    experienceGroups.forEach((group, index) => {
        const company = (group.querySelector(`#company-${index + 1}`) as HTMLInputElement).value;
        const position = (group.querySelector(`#position-${index + 1}`) as HTMLInputElement).value;
        const duration = (group.querySelector(`#duration-${index + 1}`) as HTMLInputElement).value;
        const responsibility = (group.querySelector(`#responsibility-${index + 1}`) as HTMLInputElement).value;


        workExperienceHTML += `
            <div class="work-experience-entry">
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Position:</strong> ${position}</p>
                <p><strong>Duration:</strong> ${duration}</p>
                <p><strong>Responsibilities:</strong> ${responsibility}</p><br>
            </div>`;
    });
    resumeWorkExperience.innerHTML = workExperienceHTML;


    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const linkedin_id = (document.getElementById("linkedin-id") as HTMLInputElement).value;
    const skill1 = (document.getElementById("skill1") as HTMLInputElement).value;
    const skill2 = (document.getElementById("skill2") as HTMLInputElement).value;
    const skill3 = (document.getElementById("skill3") as HTMLInputElement).value;
    const skill4 = (document.getElementById("skill4") as HTMLInputElement).value;
    const photoInput = (document.getElementById("photo") as HTMLInputElement);

   

    const photofile = photoInput.files ? photoInput.files[0] : null;
    let photoBase64 = '';

    if (photofile){
        photoBase64 = await filetoBase64(photofile);
        
        localStorage.setItem("resumePhoto" , photoBase64)
        resumePhoto.src = photoBase64
    }

    

    resumeName.textContent= name;
    resumeEmail.textContent = `Email: ${email}`;
    resumePhone.innerHTML = `Phone#:  ${phone}`;
    resumeAddress.textContent = `Address: ${address}`;
    resumeLinkedin.textContent= `Linkedin-ID: ${linkedin_id}`;
    if (linkedin_id) {
        resumeLinkedin.textContent = `Linkedin-ID: ${linkedin_id}`;
        resumeLinkedin.style.display = "block"; 
    } else {
        resumeLinkedin.style.display = "none"; 
    }
    



    resumeSkills.innerHTML = `${skill1}<br>${skill2}<br>${skill3}<br>${skill4}`;

    document.querySelector(".container")?.classList.add("hidden");
    resumePage.classList.remove("hidden");
});
    

function filetoBase64(file:File):Promise<string>{
    return new Promise((resolve,reject)=>{
        const reader = new FileReader();
        reader.onloadend=()=>resolve(
            reader.result as string
        )
        reader.onerror = reject;
        reader.readAsDataURL(file);
    })
};
document.getElementById("addExperienceButton")?.addEventListener("click", () => {
    const experienceSection = document.getElementById("experience-group");
    const newIndex = document.querySelectorAll(".experience-group").length + 1;

    const newExperienceHTML = `
        <div class="items">
            <label for="company-${newIndex}">Company: </label>
            <input type="text" name="company" id="company-${newIndex}" placeholder="XYZ company">
        </div>
    
        <div class="items">
            <label for="position-${newIndex}">Position:</label>
            <input type="text" name="position" id="position-${newIndex}" placeholder="Software Engineer">
        </div>
    
        <div class="items">
            <label for="duration-${newIndex}">Duration:</label>
            <input type="text" name="duration" id="duration-${newIndex}" placeholder="2015-2019">
        </div>
    
        <div class="items">
            <label for="responsibility-${newIndex}">Responsibilities:</label>
            <input type="text" name="responsibility" id="responsibility-${newIndex}" placeholder="Developed Software">
        </div>
    `;

    const newExperienceDiv = document.createElement('div');
    newExperienceDiv.classList.add('experience-group');
    newExperienceDiv.innerHTML = newExperienceHTML;

    experienceSection?.appendChild(newExperienceDiv);
});

document.getElementById("addEducationButton")?.addEventListener("click", () => {
    const educationSection = document.getElementById("education-group");
    const newIndex = document.querySelectorAll(".education-group").length + 1;

    const newEducationHTML = `
        <div class="items">
            <label for="degree-${newIndex}">Degree:</label>
            <input type="text" name="degree" id="degree-${newIndex}" placeholder="BSCS">
        </div>

        <div class="items">
            <label for="institute-${newIndex}">Institute:</label>
            <input type="text" name="institute" id="institute-${newIndex}" placeholder="ABC University">
        </div>

        <div class="items">
            <label for="year-${newIndex}">Passing Year:</label>
            <input type="text" name="year" id="year-${newIndex}" placeholder="2015-2018">
        </div>
    `;

    const newEducationDiv = document.createElement('div');
    newEducationDiv.classList.add('education-group');
    newEducationDiv.innerHTML = newEducationHTML;

    educationSection?.appendChild(newEducationDiv);
});