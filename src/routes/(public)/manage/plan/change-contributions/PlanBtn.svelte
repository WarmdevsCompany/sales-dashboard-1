<script>
    import Info_ico from "$lib/components/icons/plan-icons/Info_ico.svelte";
    export let content;
    export let className;
  </script>
  
  <div class="wrapper">
    <button class={className} on:click>
      {content}
      <Info_ico />
    </button>
  </div>
  
  <style>
    .wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 0 90px 0;
    }
    button, .btn-sv {
      font-size: var(--text-font-normal);
      line-height: var(--text-line-height);
      position: relative;
      padding: 12px 24px;
      border: 1px solid var(--white);
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--white);
      cursor: pointer;
      transition: all ease-in .15s;
    }
    button.blue, .btn-sv.blue {
      background:#8dc5f6;
    }
    button.green, .btn-sv.green {
      background: #91C65D;
    }
    button.violet, .btn-sv.violet{
      background: #C198E3;
    }
    button.blue:hover, .btn-sv.blue:hover {
      background: #3c90fe;
    }
    button.blue:active, .btn-sv.blue:active {
      background:#0160dd;
    }
    button.green:hover, .btn-sv.green:hover {
      background: #0FAA3A;
    }
    button.green:active, .btn-sv.green:active{
      background:#2cbc55;
    }
    button.violet:hover, .btn-sv.violet:hover {
      background: #5d0bc987;
    }
    button.violet:active, .btn-sv.violet:active {
      background:#5d0bc987;
    }
    @media only screen and (max-width: 991px) {
      .wrapper {
        display: none;
      }
    }
    @media only screen and (max-width: 1080px) {
      button, .btn-sv {
      font-size: var(--text-font-xsmall);
    }
    }
  </style>
  