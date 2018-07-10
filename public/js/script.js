$(document).ready(main);

function main() {
	$('.ui.top.sidebar').sidebar({
		dimPage: true,
		transition: 'overlay',
		exclusive: false,
		closable: true
	});

	$('.ui.top.sidebar')
		.sidebar('attach events', '#right-sidebar-toggle', 'toggle');

	$('.ui.form')
	  .form({
		fields: {
		  firstName: {
			identifier: 'first-name',
			rules: [
			  {
				type   : 'empty',
				prompt : 'Please enter your first name.'
			  }
			]
		  },
		  lastName: {
			identifier: 'last-name',
			rules: [
			  {
				type   : 'empty',
				prompt : 'Please enter your last name.'
			  }
			]
		  },
		  email: {
			identifier: 'email',
			rules: [
			  {
				type   : 'empty',
				prompt : 'Please enter your email address.'
			  }
			]
		  },
		  subject: {
			identifier: 'subject',
			rules: [
			  {
				type   : 'empty',
				prompt : 'Please enter an email subject.'
			  }
			]
		  },
		  message: {
			identifier: 'message',
			rules: [
			  {
				type   : 'empty',
				prompt : 'Please enter a message'
			  }
			]
		  }
		}
	  });

	$("#test1").progress();
	$("#test2").progress();
	$("#test3").progress();
	displayEducation();
	displayWork();
	displaySkills();
}

var education = {
	"schools":
	[
		{
			"name": "University of California, Los Angeles",
			"degree": "Bachelors of Science",
			"major": "Microbiology, Immunology, and Molecular Genetics",
			"location": "CA",
			"years": "2011 - 2015"
		}
	]
};

var work = {
	"jobs":
	[
		{
			"title": "Research Technician I",
			"employer": "La Jolla Institute for Allergy & Immunology",
			"location": "San Diego, CA",
			"dates": "DEC 2015 - JAN 2017",
			"description": "Conducted research on human immune responses to Tuberculosis (TB) though ELISPOT assays" + 
						   " analysis of Mucosal-Associate Invariant T (MAIT) cells by flow cytometry and in-vitro" + 
						   " assays, as well as routinely isolating peripheral blood mononuclear cells (PBMCs) from" +
						   " post-active TB or latent TB blood samples. Also assisted in maintaining lab inventory" +
						   " of supplies, plasma/cell samples, and independently coordinating experiments with the PI."
		},
		{
			"title": "Research Technician I",
			"employer": "USC Keck School of Medicine",
			"location": "Los Angeles, CA",
			"dates": "AUG 2015 - OCT 2015",
			"description": "Processed HIV samples through RNA extractions of infected Plasma, PCR runs, and gel" + 
						   " electrophoresis. Assisted in 454 sequencing, and led the design of PCR primers using" + 
						   " python code to determine the best primer pair to use for amplification of pol and env" +
						   " regions of HIV samples in a novel research project. "
		},
		{
			"title": "Barista",
			"employer": "UCLA Bruin Cafe",
			"location": "Los Angeles, CA",
			"dates": "SEP 2012 - JUN 2014",
			"description": "Managed and cooperated with team members to perform various assigned tasks, as well as" +
						   " handle independent duties without requiring supervision. Also took charge of training" + 
						   " new employees in performing their assigned positions. "
		}
	]
};

var skills = {
	"comfortable":
	["HTML5", "CSS3", "Javascript", "jQuery", "Version Control (Git)", "Bootstrap", "Responsive Design", "Adobe Photoshop", "Adobe Illustrator"],
	"progress": ["Express", "Node.JS", "SemanticUI", "Adobe InDesign"]
};

function displayEducation() {
	for (school in education.schools) {
		var formattedSchoolName 		= HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree 		= HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolMajor 		= HTMLschoolMajor.replace("%data%", education.schools[school].major);
		    formattedSchoolFullDegree 	= formattedSchoolDegree + formattedSchoolMajor;
		var formattedSchoolLocation 	= HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolYears 		= HTMLschoolDates.replace("%data%", education.schools[school].years);
		var formattedFullEducation		= formattedSchoolName + formattedSchoolLocation + formattedSchoolYears;

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedSchoolFullDegree);
		$(".education-entry:last").append(formattedFullEducation);
	};
};

function displayWork() {
	for (job in work.jobs) {
		var formattedWorkTitle 			= HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkEmployer 		= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkDates 			= HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation 		= HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedFullEmployer		= formattedWorkEmployer + formattedWorkDates + formattedWorkLocation;
		var formattedWorkDescription 	= HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$("#work-experience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedWorkTitle);
		$(".work-entry:last").append(formattedFullEmployer);
		$(".work-entry:last").append(formattedWorkDescription);		

	};
};

function displaySkills() {
	$(".skills-one").append(HTMLskillsStart);
	$(".skills-two").append(HTMLskillsProgressStart);

	for (skill in skills.comfortable) {
		var formattedSkill = HTMLskillsItem.replace("%data%", skills.comfortable[skill]);
		$(".skills-entry:last").append(formattedSkill);
	};

	for (skill in skills.progress) {
		var formattedSkill = HTMLskillsItem.replace("%data%", skills.progress[skill]);
		$(".progress-skills-entry:last").append(formattedSkill);
	};
};