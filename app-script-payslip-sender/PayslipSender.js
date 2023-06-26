function payslipSender() {
  var spreadsheet = SpreadsheetApp.getActive().getSheetByName('List');
  var lastRow = spreadsheet.getLastRow();
  var dataRange = spreadsheet.getRange("A2:D" + lastRow).getValues();
  Logger.log(dataRange);

  for(var i=0; i < dataRange.length; i++) {
    var employeeData = dataRange[i];
    var employeeName = employeeData[1];
    var salary = employeeData[2];
    var email = employeeData[3];

    var PayslipMessageContent = PayslipMessage(employeeName, salary);
    Logger.log(PayslipMessageContent);
    MailApp.sendEmail(email, 'Payslip', PayslipMessageContent)
  }
}

function PayslipMessage(employeeName, salary) {
  var message = `Hi ${employeeName} \n`;
  message += "Your salary for the month of may has been deposited!\n";
  message += `Payable: ${salary} \n`;

  message += "Thanks";
  return message;
}