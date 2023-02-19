const allDropdowns = document.querySelectorAll('.dropdown__')
if (allDropdowns) {
    allDropdowns.forEach(dropdown => {
        let minus = dropdown.querySelector('.minus')
        let plus = dropdown.querySelector('.plus')
        let dropdown_head = dropdown.querySelector('.head')
        let dropdownList = dropdown.querySelector('.dropdown__list__')
        let dropdownListHeight = dropdownList.getBoundingClientRect().height
        let compStl = window.getComputedStyle(dropdownList)
        let currentpadding = compStl.getPropertyValue('padding')
        let dropdownListPadding = currentpadding
       
        allDropdowns[0].style.marginBottom = 60 + "px"
        dropdownList.style.height = '0px';
        dropdownList.style.overflow = 'hidden';
        dropdownList.style.padding = '0px'
        dropdownList.style.display = 'none';
        
        

       

        dropdown.addEventListener('click', () => {
            allDropdowns.forEach(dropdown2 => {
                allDropdowns[0].style.marginBottom = 20 + "px"
                minus.classList.add('hidden')
                plus.classList.remove('hidden')
                dropdown_head.classList.add('head_active')
          

                
            })
            if (dropdown.classList.contains('active')) {
                dropdown.classList.remove('active')
                dropdownList.style.height = `0px`;
                dropdownList.style.padding = '0px';
                dropdownList.style.height = `0px`;
                dropdownList.style.padding = '0px'
                minus.classList.add('hidden')
                plus.classList.remove('hidden')
                dropdown_head.classList.remove('head_active')

                let compStyle = window.getComputedStyle(dropdownList)
                let currentTransition = compStyle.getPropertyValue('transition-duration')
                setTimeout(() => {
                    dropdownList.style.display = 'none'
                }, currentTransition.slice(0, -1) * 1000)
            } 
            else if (!dropdown.classList.contains('active')) {
                dropdown.classList.add('active')
                dropdownList.style.display = 'flex';
                minus.classList.remove('hidden')
                plus.classList.add('hidden')
                
                setTimeout(() => {
                    dropdownList.style.height = `${dropdownListHeight}px`;
                    dropdownList.style.padding = `${dropdownListPadding}`;

                }, 50)
            }
            
        })
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown__')) {
                allDropdowns.forEach(dropdown2 => {

                    let dropdownList2 = dropdown2.querySelector('.dropdown__list__')
                    dropdownList2.style.height = `0px`;
                    dropdownList2.style.padding = '0px';
                    dropdown_head.classList.remove('head_active')
                    minus.classList.add('hidden')
                    plus.classList.remove('hidden')
                    let compStyle = window.getComputedStyle(dropdownList2)
                    let currentTransition = compStyle.getPropertyValue(
                        'transition-duration')
                    setTimeout(() => {
                        dropdownList2.style.display = 'none'
                    }, currentTransition.slice(0, -1) * 1000)
                    
                })
            }
        })

    })
}

if(allDropdowns.length > 1 && allDropdowns.length < 4) {
    let firstDropdownList = allDropdowns[0].querySelector('.dropdown__list__')
    firstDropdownList.style.display = 'flex';
    let height = firstDropdownList.scrollHeight;
    firstDropdownList.style.height = Number(height) + "px";
}
else{
    let firstDropdownList = allDropdowns[1].querySelector('.dropdown__list__')
    firstDropdownList.style.display = 'flex';
    let height = firstDropdownList.scrollHeight;
    firstDropdownList.style.height = height + "px";

}