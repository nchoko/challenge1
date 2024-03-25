function calculateNetSalary(basicSalary, benefits) {
    // Function to calculate net salary based on basic salary and benefits
  
    // KRA Tax Rates (Replace with actual rates from KRA website)
    const taxRates = [
      { min: 0, max: 18154, rate: 0 },
      { min: 18155, max: 47059, rate: 0.1 },
      { min: 47060, max: 102438, rate: 0.25 },
      { min: 102439, max: Infinity, rate: 0.3 }
    ];
  
    // NHIF Rates (Replace with actual rates)
    const nhifRates = {
      minSalary: 1000,
      maxSalary: 5999,
      rate: 0.05,
      maxMonthlyContribution: 759
    };
  
    // NSSF Rates (Replace with actual rates)
    const nssfRates = {
      minSalary: 6000,
      maxSalary: 18000,
      employerRate: 0.12,
      employeeRate: 0.06
    };
  
    // Gross Salary
    const grossSalary = basicSalary + benefits;
  
    // PAYEE Calculation
    let taxableIncome = grossSalary;
    let payee = 0;
    for (const taxRate of taxRates) {
      if (taxableIncome <= taxRate.max) {
        payee += (taxableIncome - taxRate.min) * taxRate.rate;
        break;
      } else {
        payee += (taxRate.max - taxRate.min) * taxRate.rate;
        taxableIncome = taxRate.max;
      }
    }
  
    // NHIF Deductions
    let nhifDeductions = 0;
    if (grossSalary >= nhifRates.minSalary && grossSalary <= nhifRates.maxSalary) {
      nhifDeductions = grossSalary * nhifRates.rate;
    } else if (grossSalary > nhifRates.maxSalary) {
      nhifDeductions = nhifRates.maxMonthlyContribution;
    }
  
    // NSSF Deductions (Assuming employer pays the remaining)
    let nssfDeductions = 0;
    if (grossSalary >= nssfRates.minSalary && grossSalary <= nssfRates.maxSalary) {
      nssfDeductions = grossSalary * nssfRates.employeeRate;
    }
  
    // Net Salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  
    return {
      grossSalary,
      payee,
      nhifDeductions,
      nssfDeductions,
      netSalary
    };
  }
  
  // Example Usage
  const basicSalary = parseFloat(prompt("Enter basic salary: "));
  const benefits = parseFloat(prompt("Enter benefits: "));
  
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  
  console.log("Gross Salary:", salaryDetails.grossSalary);
  console.log("PAYEE:", salaryDetails.payee);
  console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
  console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
  console.log("Net Salary:", salaryDetails.netSalary);
  