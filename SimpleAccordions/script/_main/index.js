const panelContainer = document.querySelector('.container-accordions');

panelContainer.addEventListener('click', event => {
   if (event.target.closest('.panel')) {
      const panel = event.target.closest('.panel');
      const panelTitle = panel.querySelector('.panel__close-icon');
      const panelContent = panel.querySelector('.panel__content');

      if (panelContent.getAttribute('aria-hidden') === 'true') {
         panelTitle.setAttribute('aria-expanded', false);
         panelContent.setAttribute('aria-hidden', false);
      } else {
         panelTitle.setAttribute('aria-expanded', true);
         panelContent.setAttribute('aria-hidden', true);
      }
   }
})