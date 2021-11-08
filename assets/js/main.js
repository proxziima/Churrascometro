/*===== BASE DE CÁLCULO =====*/

/*===== ACCORDION SHOW AND HIDE =====*/
// Seleciona todos os Accordions Itens
const accordionItems = document.querySelectorAll('.calc__accordion__item');

// Selectiona cada Item
accordionItems.forEach((item) => {
    //Selection o header do Item
    const accordionHeader = item.querySelector('.calc__accordion__header');
    //Seta o evento do click
    accordionHeader.addEventListener('click', () =>{
        
        const openItem = document.querySelector('.accordion-open')

        //chama a função Toggle
        toggleItem(item)

        //valida se a classe existe
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.calc__accordion__content');

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}