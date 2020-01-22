const tripCreationForm = () => {
  const container = document.getElementById('container')
  container.innerHTML = `
    <div class="form-creation-trip container-fluid">
      <div class="row d-flex justify-content-center align-items-center form-creation-trip_heading">
        <div class="form-creation-trip_heading-icon">
          <i class="fas fa-route"></i>
        </div>
        <h2 class="form-creation-trip_heading-title">Plan your trip</h2>
      </div>
      <div class="row form-creation-trip_step" id="formCreationStep">
        <div class="col-12 d-flex justify-content-center align-items-center form-creation-trip_step-heading">
          <div class="form-creation-trip_step-heading-icon d-flex justify-content-center align-items-center">
            <i class="fas fa-map-marker-alt"></i>
          </div>    
          <label for="city">Enter the City</label>
        </div>
        <div class="col-12 d-flex flex-column justify-content-center align-items-center form-creation-trip_step-input">
          <input type="text" id="city"/>
        </div>
      </div>
    </div>
  `
}

export default { tripCreationForm }
