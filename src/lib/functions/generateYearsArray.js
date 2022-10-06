export const generateYearsArray = (numOfYears)=>{
    const currentYear = new Date().getFullYear()
    return Array.from({length: numOfYears}, (_, i) => i + currentYear)
   }