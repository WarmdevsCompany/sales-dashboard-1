<script>
  import ThreeDotsIcon from "$lib/components/icons/ThreeDotsIcon.svelte";
  
import Tooltip from "./Tooltip.svelte";
</script>

<div>
  <div class="text-3 mb-1">General info</div>
  <div class="input__wrapper">
    <label for="name" class="label">User name</label>
    <div class="relative">
      <input class="" type="text" value="Antonin" />
      <div
        class="abs__input__dots"
      >
      <Tooltip title={'Change User name'} width={210} formName={'userName'}><ThreeDotsIcon bgColor="green" /></Tooltip>     
      </div>
    </div>
  </div>
  <div class="grid-2 mt-1_5">
    <div class="input__wrapper">
      <label for="name" class="label">First name</label>
      <div class="relative">
        <input class="" type="text" value="Jonh" />
        <div class="abs__input__dots">
          <Tooltip title={'Change First name'} width={208} formName={'firstName'}><ThreeDotsIcon bgColor="green" /></Tooltip>
        </div>
      </div>
    </div>
    <div class="input__wrapper">
      <label for="name" class="label">Last name</label>
      <div class="relative">
        <input class="" type="text" value="Antonin" />
        <div class="abs__input__dots">
          <Tooltip title={'Change Last name'} width={208} formName={'firstName'}><ThreeDotsIcon bgColor="green" /></Tooltip>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-2 mt-3">
    <div class="input__wrapper">
      <label for="name" class="label">Gender</label>
      <div class="relative">
        <input class="" type="text" value="Male" />
        <div class="abs__input__dots">
         
          <Tooltip title={'Change Gender'} width={186} formName={'gender'}><ThreeDotsIcon bgColor="green" /></Tooltip>
        </div>
      </div>
    </div>
    <div class="input__wrapper">
      <label for="name" class="label">Date Of Birth</label>
      <div class="relative">
        <input class="" type="text" value="01 July 1992" />
        <div class="abs__input__dots">
          <Tooltip title={'Change Date Of Birth'} width={222} formName={'dob'}><ThreeDotsIcon bgColor="green" /></Tooltip>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="contact">
  <div class="text-3 mb-1 ">Contact details</div>
  <div class="grid-2 ">
    <div class="input__wrapper">
      <label for="name" class="label">Email</label>
      <div class="relative">
        <input class="" type="email" value="Contact@esi.com" />
        <div class="abs__input__dots">
          <Tooltip title={'Change Email'} width={173} formName={'email'}><ThreeDotsIcon bgColor="green" /></Tooltip>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  * {
    color: var(--green-dark-medium);
  }
  label.label {
    color: var(--label--color);
  }
  input {
    pointer-events: none;
    user-select: none;
  }
  .grid-2 {
    grid-gap: 24px;
  }
  .contact {
    margin-top: 2.125rem;
    padding-bottom: 4.5rem;
  }
  @media only screen and (max-width: 1100px) {
    .contact .input__wrapper {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
</style>
