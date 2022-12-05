<script>
  import { portfolioItems } from "../../stores/plansStore";
  let items = portfolioItems[0];
  export let name;
</script>

<div class="portfolio {name}">
  <div class="portfolio__head">Portfolio</div>
  <ul>
    {#each items[name].main as item}
      <li>{item}</li>
    {/each}
  </ul>
  {#if items[name].detail}
    <div class="portfolio__heler">
      {items[name].detail}
    </div>
  {/if}
</div>

<style>
  .portfolio.save {
    background: rgba(0, 110, 255, 0.25);
    border: 2px solid rgba(0, 110, 255, 0.7);
  }
  .portfolio.adventure {
    background: rgba(55, 48, 163, 0.25);
    border: 2px solid rgba(49, 46, 129, 0.7);
  }
  .portfolio.founder {
    background: rgba(94, 11, 201, 0.25);
    border: 2px solid rgba(94, 11, 201, 0.7);
  }
  .portfolio {
    padding: 24px 20px 28px 43px;
    width: 100%;
    min-height: 215px;
    background: rgba(0, 110, 255, 0.25);
    border: 2px solid rgba(0, 110, 255, 0.7);
    color: var(--white-color);
  }

  .portfolio__head {
    font-weight: var(--font-weight-bold);
    font-size: 18px;
    line-height: 27px;
  }
  .portfolio ul {
    padding-left: 25px;
    margin: 10px 0 6px 0;
    max-width: 291px;
  }
  .portfolio ul li {
    line-height: 24px;
  }
  .portfolio__heler {
    font-size: 13px;
    line-height: 20px;
  }
  @media only screen and (max-width: 1280px) {
    .portfolio {
      padding: 20px;
    }
  }

  @media only screen and (max-width: 768px) {
    .portfolio {
      padding: 20px 24px;
      min-height: 150px;
    }
  }
  @media only screen and (max-width: 568px) {
    .portfolio ul li {
      font-size: var(--text-size-smaller);
      line-height: var(--h3-line-height);
    }
    .portfolio__heler {
      font-size: 10px;
      line-height: 15px;
    }
  }
</style>
