"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
const form = document.getElementById("resumeForm");
const resumePage = document.getElementById("resumePage");
const resumeContent = document.getElementById("resumeContent");
const resumePhoto = document.getElementById("resumePhoto");
const resumeName = document.getElementById("resumeName");
const resumeEmail = document.getElementById("resumeEmail");
const resumePhone = document.getElementById("resumePhone");
const resumeAddress = document.getElementById("resumeAddress");
const resumeLinkedin = document.getElementById("resumeLinkedin");
const resumeEducation = document.getElementById("resumeEducation");
const resumeWorkExperience = document.getElementById("resumeWorkExperience");
const resumeSkills = document.getElementById("resumeSkills");
form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    event.preventDefault();
    const educationGroups = document.querySelectorAll('.education-group');
    let educationHTML = '';
    educationGroups.forEach((group, index) => {
        const degree = group.querySelector(`#degree-${index + 1}`).value;
        const institute = group.querySelector(`#institute-${index + 1}`).value;
        const year = group.querySelector(`#year-${index + 1}`).value;
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
        const company = group.querySelector(`#company-${index + 1}`).value;
        const position = group.querySelector(`#position-${index + 1}`).value;
        const duration = group.querySelector(`#duration-${index + 1}`).value;
        const responsibility = group.querySelector(`#responsibility-${index + 1}`).value;
        workExperienceHTML += `
            <div class="work-experience-entry">
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Position:</strong> ${position}</p>
                <p><strong>Duration:</strong> ${duration}</p>
                <p><strong>Responsibilities:</strong> ${responsibility}</p><br>
            </div>`;
    });
    resumeWorkExperience.innerHTML = workExperienceHTML;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const linkedin_id = document.getElementById("linkedin-id").value;
    const skill1 = document.getElementById("skill1").value;
    const skill2 = document.getElementById("skill2").value;
    const skill3 = document.getElementById("skill3").value;
    const skill4 = document.getElementById("skill4").value;
    const photoInput = document.getElementById("photo");
    const photofile = photoInput.files ? photoInput.files[0] : null;
    let photoBase64 = '';
    if (photofile) {
        photoBase64 = yield filetoBase64(photofile);
        localStorage.setItem("resumePhoto", photoBase64);
        resumePhoto.src = photoBase64;
    }
    resumeName.textContent = name;
    resumeEmail.textContent = `Email: ${email}`;
    resumePhone.innerHTML = `Phone#:  ${phone}`;
    resumeAddress.textContent = `Address: ${address}`;
    resumeLinkedin.textContent = `Linkedin-ID: ${linkedin_id}`;
    if (linkedin_id) {
        resumeLinkedin.textContent = `Linkedin-ID: ${linkedin_id}`;
        resumeLinkedin.style.display = "block";
    }
    else {
        resumeLinkedin.style.display = "none";
    }
    resumeSkills.innerHTML = `${skill1}<br>${skill2}<br>${skill3}<br>${skill4}`;
    (_c = document.querySelector(".container")) === null || _c === void 0 ? void 0 : _c.classList.add("hidden");
    resumePage.classList.remove("hidden");
}));
function filetoBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
;
(_a = document.getElementById("addExperienceButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    var _a;
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
        <button type="button" class="closeExperienceButton" data-index="${newIndex}">Close</button>
    `;
    const newExperienceDiv = document.createElement('div');
    newExperienceDiv.classList.add('experience-group');
    newExperienceDiv.innerHTML = newExperienceHTML;
    experienceSection === null || experienceSection === void 0 ? void 0 : experienceSection.appendChild(newExperienceDiv);
    (_a = newExperienceDiv.querySelector('.closeExperienceButton')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        newExperienceDiv.remove();
    });
});
(_b = document.getElementById("addEducationButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    var _a;
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
        <button type="button" class="closeEducationButton" data-index="${newIndex}">Close</button>
    `;
    const newEducationDiv = document.createElement('div');
    newEducationDiv.classList.add('education-group');
    newEducationDiv.innerHTML = newEducationHTML;
    educationSection === null || educationSection === void 0 ? void 0 : educationSection.appendChild(newEducationDiv);
    (_a = newEducationDiv.querySelector('.closeEducationButton')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        newEducationDiv.remove();
    });
});
