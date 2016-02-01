var bio = {
    "name": "Derek Ernst",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "416-578-2413",
        "email": "mernst.derek@gmail.com",
        "github": "derekernst",
        "twitter": "@DerekMernst",
        "location": "Toronto, ON"
    },
    "welcomeMessage": "Hello, I'm Derek!",
    "skills": ["HTML", "CSS", "Javascript"],
    "biopic": "./images/image.png"
};

bio.display = function() {
    // HEADER on top of the page
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    // Contact Information
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    // Message and Image
    // var formattedMessage = HTMLwelcomeMsg.replace ("%data%", bio.welcomeMessage);
    // $("#header").append(formattedMessage);

    var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbiopic);

    // Skills
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};

bio.display();

var work = {
    "jobs": [{
        "employer": "Carosoft Consulting",
        "title": "Junior Developer",
        "location": "Oakville, ON",
        "dates": "2014- Present",
        "description": "Develop business applications"
    }]
};

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

var projects = {
    "projects": [{
        "title": "Resume Builder",
        "dates": "2016",
        "description": "Create a resume using JS",
        "images": ["./images/p1.png", "./images/p3.png"]
    }]
};

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var i = 0; i < projects.projects.length; i++) {

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[i].images.length > 0) {
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();


var education = {
    "schools": [{
        "name": "Queen's Univeristy",
        "location": "Kingston, ON",
        "degree": "Geological Engineering",
        "majors": ["Geological Engineering"],
        "dates": 2014,
        "url": "www.queensu.ca"
    }],
    "onlineCourse": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "dates": 2016,
        "url": "www.udacity.com"
    }]
};

education.display = function() {
    if (education.schools.length || education.onlineCourse.length > 0) {
        $("#education").append(HTMLschoolStart);
        for (var i = 0; i < education.schools.length; i++) {
            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            $(".education-entry:last").append(formattedName);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedLocation);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $(".education-entry:last").append(formattedDegree);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry:last").append(formattedMajor);
        }
    }
    if (education.onlineCourse.length > 0) {
        $(".education-entry").append(HTMLonlineClasses);
        for (var j = 0; j < education.onlineCourse.length; j++) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[j].title);
            $(".education-entry:last").append(formattedTitle);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[j].school);
            $(".education-entry:last").append(formattedSchool);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[j].dates);
            $(".education-entry:last").append(formattedonlineDates);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourse[j].url);
            $(".education-entry:last").append(formattedURL);
        }
    }
};

education.display();

// Append Goolge Map to the page
$("#mapDiv").append(googleMap);