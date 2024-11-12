const editMode = layoutMode === 'edit';

if (editMode) {
  fragmentElement.querySelectorAll('.govuk-accordion__section-content').forEach(node => node.classList.add('d-block'));
}