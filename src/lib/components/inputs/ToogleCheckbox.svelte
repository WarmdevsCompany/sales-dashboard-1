<div class="round__checkbox d-flex align-center justify-cc">
    <label class="switch">
      <input type="checkbox" />
      <span class="slider" />
    </label>
  </div>
  <style>

    .round__checkbox {
      width: 24px;
      height: 24px;
    }
  
    /* The switch - the box around the slider */
    .switch {
      position: relative;
      display: inline-block;
      width: 20px;
      height: 10px;
    }
  
    /* Hide default HTML checkbox */
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  
    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--green-dark-color);
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 34px;
    }
  
    .slider:before {
      position: absolute;
      content: "";
      height: 7px;
      width: 7px;
      left: 2px;
      bottom: 1.5px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  
    input:checked + .slider {
      background-color: var(--primary-color);
    }
  
    input:focus + .slider {
      box-shadow: 0 0 1px var(--primary-color);
    }
  
    input:checked + .slider:before {
      -webkit-transform: translateX(9px);
      -ms-transform: translateX(9px);
      transform: translateX(9px);
    }
  </style>
  