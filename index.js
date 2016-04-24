var isValidInputs = function(loanBalance, interestRate, loanTerm) {
	if(loanBalance === "" || interestRate === "" || loanTerm === "") {
		alert("One of the fields are empty. Please fill the form and try again");
		return false;
	}
	if(isNaN(loanBalance)) {
		alert($("#loanBalance").val() + " is not a valid input for Loan Balance.");
		return false;
	} 
	if (isNaN(interestRate)) {
		alert($("#interestRate").val() + " is not a valid input for Interest Rate.");
		return false;
	} 
	if (isNaN(loanTerm)) {
		alert($("#loanTerm").val() + " is not a valid input for Loan Term.");
		return false;
	} 
	return true;

};

$( "#calculate-button" ).click(function() {

	var loanBalance = parseInt($("#loanBalance").val());
	var interestRate = parseInt($("#interestRate").val());
	var loanTerm = parseInt($("#loanTerm").val());
	var period = parseInt($("#period").val());

	var numberOfPayments = loanTerm*period;
	var monthlyInterestRate = (interestRate/100)/period;
	var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
	var interestQuotient = (monthlyInterestRate*compoundedInterestRate)/ (compoundedInterestRate - 1);
	var monthlyPayment = loanBalance*interestQuotient;

	if(!isValidInputs(loanBalance, interestRate, loanTerm)) {
		return;
	}
	else {
		$("#results").text("Your monthly payments are " + monthlyPayment);
	}


});



