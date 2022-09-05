<script>
  import SearchIcon from "$lib/components/icons/SearchIcon.svelte";
  import FilterIcon from "$lib/components/icons/FilterIcon.svelte";
  import searchFilter from "$lib/functions/searchFilter";
  import FilterTooltip from "./FilterTooltip.svelte";
  import { t } from '$lib/translations/i18n.js';
</script>

<div class="filter-wrapper d-flex align-center">
  <div class="search">
    <form id="search-form" class="relative">
      <span class="search__icon absolute d-flex align-center"
        ><SearchIcon /></span
      >
      <input
        id="search"
        type="search"
        placeholder="{$t('SEARCH')}..."
        class="box_shadow-medium b-radius-10"
        on:keyup={searchFilter}
      />
    </form>
  </div>
  <div class="filters relative">
    <FilterTooltip width={220}>
      <button
        class="btn__filter box_shadow-medium b-radius-10 d-flex align-center"
      >
        <FilterIcon />
        <span>{$t('SETTINGS.FILTERS')}</span>
      </button>
    </FilterTooltip>
  </div>
</div>

<style>
  .filter-wrapper {
    margin-right: 10px;
  }
  .filter-wrapper > *:not(:last-child) {
    margin-right: 18px;
  }
  .btn__filter {
    background-color: var(--white);
    border: 1px solid var(--border-color);
    padding: 21px 24.5px;
    font-size: var(--text-font-normal);
  }
  .btn__filter span {
    margin-left: 10px;
  }
  .search__icon {
    top: 0;
    bottom: 0;
    margin: auto 0 auto 30px;
  }
  input#search {
    padding-left: 64px;
  }
  input#search::placeholder {
    color: var(--grey-color);
  }
  @media only screen and (max-width: 991px) {
    .filters button span {
      display: none;
    }
    .filter-wrapper {
      flex-wrap: wrap;
      flex-direction: column-reverse;
      align-items: flex-end;
      width: 100%;
      margin: 0;
    }
    .filter-wrapper .search {
      margin: 1rem 0;
      width: 100%;
    }
  }
</style>
