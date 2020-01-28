import Trip from './trip'

const tripCreationForm = () => {
  // Create the trip creation form
  const tripCreation = new Trip('tripCreationForm')
  tripCreation.formCreationInit()
  // Add listeners for close the trip creation form
  tripCreation.getCloseFormContainerNode.addEventListener('click', () => {
    tripCreation.getFormCreationNode.removeChild(
      tripCreation.getFormCreationContainerNode
    )
  })
  document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      tripCreation.getFormCreationNode.innerHTML = ''
    }
  })
  // Add listeners for save the date in the form
  tripCreation.getSaveFormContainerNode.addEventListener('click', () =>
    console.log('save!')
  )
}

export default tripCreationForm
