

$(document).ready(function()
{
	$("#login").click(function()
	{
		console.log('login clicked');
		let x = $('#defaultForm-email').val();
		let y = $('#defaultForm-pass').val();
		console.log('x => ' + x + 'y => ' + y);
	});
});