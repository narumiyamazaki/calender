const dayOfWeek = ['日','月','火','水','木','金','土'];

const calender = document.querySelector('.p-calender');

for(let i = 0; i < 31; i++){
    //日の要素を追加
    let dayContent = document.createElement('div');
    dayContent.classList.add('p-day-content');
    if(i === 0 || (i % 7) === 0){
        dayContent.classList.add('u-sunday');
    }
    dayContent.textContent = i + 1;
    calender.appendChild(dayContent);
    
    if((i % 7) === 6){
            let createBr = document.createElement('br');
            dayContent.after(createBr);
        }
    };
    
//カレンダーに週を追加
