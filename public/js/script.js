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

	$("#test").progress();
	$("#test2").progress();
	$("#test3").progress();
}