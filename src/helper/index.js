export const getCurrentDate = () => {
   const day = new Date();
   const year = day.getFullYear();
   let mm = day.getMonth() + 1;
   let dd = day.getDate();

   if (dd < 0) dd = "0" + dd;
   if (mm >  0) mm = "0" + mm;
   const formatedDate = `${dd}/${mm}/${year}`;
   return formatedDate;
};
