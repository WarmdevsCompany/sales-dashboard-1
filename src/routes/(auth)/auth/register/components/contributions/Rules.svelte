<div class="contribution__right">
  <div class="contribution__right__head">
    <h2 class="h2-sv">Our House. Our Goals.</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </p>
  </div>
  <div class="rules__list">
    <div class="rules__list__head">Our Rules:</div>
    <ol>
      <li>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </li>
      <li>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </li>
      <li>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it
        to.
      </li>
      <li>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
      </li>
    </ol>
  </div>
</div>

<style>
  .contribution__right {
    width: 100%;
    height: 100%;
  }
  .contribution__right__head {
    padding-left: 32px;
    max-width: 1000px;
    padding-right: 52px;
    margin-top: 13px;
  }
  .contribution__right__head p {
    margin-top: 14px;
  }
  .contribution__right ol,
  .rules__list__head {
    padding-left: 20px;
    font-size: var(--text-size-small);
    color: var(--white-color);
    line-height: 30px;
    max-width: 840px;
  }
  .contribution__right ol li {
    line-height: 30px;
  }
  .rules__list__head {
    font-weight: var(--font-weight-medium);
    padding: 0;
  }
  .rules__list {
    margin: 24px 132px 27px 0;
    padding: 21px 0 26px 32px;
    background: var(--color-dark-st2);
    border: 1px solid var(--main-text-color);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  @media only screen and (max-width: 991px) {
    .contribution__right__head .h2-sv {
      font-size: var(--h3-size);
      line-height: var(--h3-line-height);
    }
    .rules__list {
      background: transparent;
      border: none;
      margin: 16px 0 0 0;
      padding: 0;
    }

    .contribution__right__head {
      padding: 0;
    }
    .contribution__right {
      padding: 11px 25.17px 24px 21px;
    }
    .contribution__right ol {
      font-size: var(--text-size-smaller);
      line-height: 16px;
    }
    .contribution__right ol li {
      font-size: var(--text-size-smaller);
      line-height: 16px;
      margin-bottom: 8px;
    }
  }
  @media only screen and (max-width: 768px) {
    .contribution__right__head .h2-sv {
      line-height: 26px;
    }
    .contribution__right__head p {
      font-size: var(--text-size-smaller);
      line-height: 16px;
      margin-top: 10px;
    }
  }
  @media only screen and (max-width: 480px) {
    .contribution__right ol,
    .contribution__right ol li {
      font-size: var(--text-size-smaller);
      line-height: var(--small-text-line-height);
    }
  }
</style>
