// question3
function bolatitoChoice(classGroup){
    if(classGroup == 'science'){
        console.log('English, Mathematics, Physics, Chemistry, Biology, Technical Drawing' );
    }else if 
    (classGroup == 'social science'){
        console.log('English, Mathematics, Accounting, Commerce, Marketing, Geography');
    }else if
    (classGroup == 'arts'){
        console.log('English, Mathematics, Government, Economics, Literature, History');
    }else
       console.log('English, Mathematics');
        
}
bolatitoChoice('social science');



// Question5
function highestPowerof2(n)
   {
     let res = 0;
     for (let pwr = n; pwr >= 1; pwr--)
        {
         // If pwr is a power of 2
          if ((pwr & (pwr - 1)) == 0)
             {
                console.log(`The number ${pwr}`);
                  res = pwr;
                  
                break;
             }
        }
     return res;
   }

      let num = Number(prompt('Input any number'));
      document.write(highestPowerof2(num));
      console.log(`is the power of 2 nearest to ${num}`);