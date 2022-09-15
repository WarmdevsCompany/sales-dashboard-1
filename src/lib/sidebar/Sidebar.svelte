<script>
	import NotificationsTooltip from '$lib/components/NotificationsTooltip.svelte';
	import { page } from '$app/stores';
	import OverviewIcon from '$lib/components/icons/menu-icon/OverviewIcon.svelte';
	import AvatarIcon from '$lib/components/icons/AvatarIcon.svelte';
	import logo from '$lib/assets/img/logo.svg';
	import logoutIcon from '$lib/assets/img/logout.svg';
	import ManageIcon from '$lib/components/icons/menu-icon/ManageIcon.svelte';
	import ProfileIcon from '$lib/components/icons/menu-icon/ProfileIcon.svelte';
	import Notification from '$lib/components/icons/Notification.svelte';
	import ThreeDotsIcon from '$lib/components/icons/ThreeDotsIcon.svelte';
	import { fade } from 'svelte/transition';
	import MediaQuery from '$lib/components/MediaQuery.svelte';
	import MenuIcon from '$lib/components/icons/menu-icon/MenuIcon.svelte';
	import CloseMenuIcon from '$lib/components/icons/menu-icon/CloseMenuIcon.svelte';
	import clickOutside from '$lib/functions/clickOutside';
	import { logout } from '$lib/api/axios';
	import { t } from '$lib/translations/i18n.js';
	import { currentSideBarStatus, globalData } from '$lib/globalStore';
	import { onMount } from 'svelte';
	import HeaderPagesTooltip from '$lib/components/HeaderPagesTooltip.svelte';
	let openedMenu = false;

	if ($page.url.pathname.includes('/manage')) {
		$currentSideBarStatus = 'manage';
	} else if ($page.url.pathname.includes('/overview')) {
		$currentSideBarStatus = 'overview';
	} else if ($page.url.pathname.includes('/profile')) {
		$currentSideBarStatus = 'profile';
	}

	export let firstName = '',
		lastName = '';

	onMount(async () => {
		if ($globalData) {
			firstName = $globalData.data.personalInfo.firstname;
			lastName = $globalData.data.personalInfo.lastname;
		}
	});
	function handleClickOutside() {
		openedMenu = false;
	}
</script>

<MediaQuery query="(max-width: 991px)" let:matches>
	{#if matches}
		<div in:fade class="d-flex justify-sb align-center b-radius-8 box_shadow-medium mobile-header">
			<div class="d-flex align-center" on:click={() => (openedMenu = !openedMenu)}>
				<MenuIcon />
			</div>
			<div class="d-flex header__rigth--column">
				<div class="relative">
					<NotificationsTooltip width={300}>
						<div class="mr-1 pointer">
							<Notification bgColor="white" />
						</div>
					</NotificationsTooltip>
				</div>

				<div class="relative">
					<HeaderPagesTooltip
						><div class="pointer"><ThreeDotsIcon bgColor="white" /></div></HeaderPagesTooltip
					>
				</div>
			</div>
		</div>
	{/if}
	{#if openedMenu}
		<div class="mobile__bg" />
	{/if}
</MediaQuery>

<div
	in:fade
	use:clickOutside
	on:click_outside={handleClickOutside}
	class="sidebar b-radius-8 d-flex flex-col justify-sb box_shadow-small text-white {openedMenu
		? 'open'
		: ''}"
>
	<div>
		<div class="sidebar__top d-flex jistify-cc flex-col align-center">
			<MediaQuery query="(max-width: 991px)" let:matches>
				{#if matches}
					<div
						class="sidebar__close d-flex jistify-cc align-center"
						on:click={() => (openedMenu = !openedMenu)}
					>
						<CloseMenuIcon />
					</div>
				{/if}
			</MediaQuery>
			{#if $globalData.data.photo}
			  <AvatarIcon avatarIsSet={true} avatarImg={$globalData.data.photo} />
			  {:else}
			  <AvatarIcon avatarIsSet={false} avatarImg={false}/>
			{/if}
			
			<div class="user__name d-flex justify-cc">
				{firstName}
				{lastName}
			</div>
		</div>
		<div class="menu">
			<nav>
				<div class="menu__items">
					<ul>
						<li
							class="menu__item--wrapper {$currentSideBarStatus === 'overview' ? 'active' : ''}"
							on:click={() => ($currentSideBarStatus = 'overview')}
						>
							<div class="menu__item--main d-flex text-sm mb-1_25">
								<OverviewIcon class={''} /> <span>{$t('OVERVIEW')}</span>
							</div>
							<ul>
								<li class="text-xsm">
									<a
										class:active={$page.url.pathname === '/overview/general'}
										sveltekit:data-sveltekit-prefetch
										href="/overview/general"
										on:click={handleClickOutside}
										>{$t('GENERAL')}
									</a>
								</li>
							</ul>
						</li>
						<li
							class="menu__item--wrapper {$currentSideBarStatus === 'manage' ? 'active' : ''}"
							on:click={() => ($currentSideBarStatus = 'manage')}
						>
							<div class="menu__item--main d-flex text-sm mb-1_25">
								<ManageIcon class={''} /> <span>{$t('MANAGE')}</span>
							</div>
							<ul>
								<li class="text-xsm">
									<a
										class:active={$page.url.pathname === '/manage/contribution'}
										sveltekit:data-sveltekit-prefetch
										href="/manage/contribution"
										on:click={handleClickOutside}
										>{$t('CONTRIBUTION')}
									</a>
								</li>
								<li class="text-xsm">
									<a
										class:active={$page.url.pathname === '/manage/plan'}
										sveltekit:data-sveltekit-prefetch
										href="/manage/plan"
										on:click={handleClickOutside}
										>{$t('PLAN')}
									</a>
								</li>
								<li class="text-xsm">
									<a
										class:active={$page.url.pathname === '/manage/withdraw'}
										sveltekit:data-sveltekit-prefetch
										href="/manage/withdraw"
										on:click={handleClickOutside}
										>{$t('WITHDRAW')}
									</a>
								</li>
							</ul>
						</li>
						<li
							class="menu__item--wrapper {$currentSideBarStatus === 'profile' ? 'active' : ''}"
							on:click={() => ($currentSideBarStatus = 'profile')}
						>
							<div class="menu__item--main d-flex text-sm mb-1_25">
								<ProfileIcon class={''} /> <span>{$t('PROFILE')}</span>
							</div>
							<ul>
								<li class="text-xsm">
									<a
										class:active={$page.url.pathname === '/profile/general-info'}
										sveltekit:data-sveltekit-prefetch
										href="/profile/general-info"
										on:click={handleClickOutside}
										>{$t('PROFILE.GENERAL.TITLE')}
									</a>
								</li>
								<li class="text-xsm">
									<a
										class:active={$page.url.pathname === '/profile/security'}
										sveltekit:data-sveltekit-prefetch
										href="/profile/security"
										on:click={handleClickOutside}
										>{$t('SECURITY')}
									</a>
								</li>
								<li class="text-xsm">
									<a
										class:active={$page.url.pathname === '/profile/payment'}
										sveltekit:data-sveltekit-prefetch
										href="/profile/payment"
										on:click={handleClickOutside}
										>{$t('PAYMENT')}
									</a>
								</li>
								<li class="text-xsm">
									<a
										class:active={$page.url.pathname === '/profile/notifications'}
										sveltekit:data-sveltekit-prefetch
										href="/profile/notifications"
										on:click={handleClickOutside}
										>{$t('NOTIFICATIONS')}
									</a>
								</li>
								<li class="text-xsm">
									<a
										class:active={$page.url.pathname === '/profile/settings'}
										sveltekit:data-sveltekit-prefetch
										href="/profile/settings"
										on:click={handleClickOutside}
										>{$t('SETTINGS')}
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
	<div class="sidebar__bottom d-flex justify-sb align-center">
		<img src={logo} alt="logo" />
		<div class="logout">
			<button class="btn d-flex text-sm" style="min-width:auto;" on:click={logout}
				><img src={logoutIcon} alt="logout" />
				<span>{$t('LOGOUT')}</span></button
			>
		</div>
	</div>
</div>

<style>
	.sidebar {
		background: var(--green-dark-color);
		min-width: 237px;
	}
	.sidebar__top {
		padding: 2rem 0 5rem 0;
	}
	.user__name {
		margin-top: 0.5rem;
	}
	.menu {
		max-width: 170px;
	}
	.menu__items ul {
		list-style: none;
	}
	.menu__item--wrapper {
		cursor: pointer;
	}
	.menu__item--wrapper ul {
		padding-left: 1.5rem;
		display: none;
	}
	.menu__item--wrapper ul li a {
		display: inline-block;
		padding: 0.25rem 1.5rem 0.25rem 1.75rem;
		margin: 0 0 1.25rem 0;
		background: transparent;
		border-radius: 50px;
		position: relative;
		color: var(--white);
		transition: all ease 0.2s;
		white-space: nowrap;
	}
	.menu__item--wrapper ul li a:hover,
	.menu__item--wrapper ul li a.active {
		color: var(--secondary-color);
		background: rgba(255, 255, 255, 0.2);
	}
	.menu__item--wrapper ul li a:active {
		background: rgba(255, 255, 255, 0.15);
	}
	.menu__item--wrapper ul li a:before {
		content: '';
		position: absolute;
		top: 12px;
		left: 16px;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--secondary-color);
	}
	.menu__item--wrapper.active ul {
		display: block;
	}
	.menu__item--main {
		padding: 1.5px 1.5rem;
		transition: padding linear 0.2s;
	}
	.menu__item--wrapper.active .menu__item--main,
	.menu__item--wrapper:hover .menu__item--main {
		background: var(--white);
		color: var(--secondary-color);
		border-top-right-radius: 50px;
		border-bottom-right-radius: 50px;
		padding: 0.6rem 1.5rem;
	}
	:global(.menu__item--wrapper.active svg path) {
		fill: var(--secondary-color);
	}
	:global(.menu__item--wrapper:hover svg path) {
		fill: var(--secondary-color);
	}
	.menu__item--main span {
		margin-left: 0.5rem;
	}
	.sidebar__bottom {
		flex-wrap: wrap;
		padding: 0 1.5rem 3.5rem 1.5rem;
	}
	.sidebar__bottom > img {
		margin-right: 10px;
	}
	.logout button {
		padding: 20px 0;
		justify-content: flex-start;
		width: auto;
		appearance: none;
		background: transparent;
		border: none;
		font-weight: var(--font-weight-medium);
		font-size: var(--text-font-small);
		line-height: var(--text-line-height-small);
	}
	.logout img {
		margin-right: 0.5rem;
	}
	@media only screen and (max-width: 1200px) {
		.sidebar__bottom {
			padding: 0 1.5vw 3.5rem 1.3vw;
		}
	}
	@media only screen and (max-width: 991px) {
		.sidebar {
			width: 100%;
			margin-bottom: 1rem;
			position: fixed;
			left: 0;
			top: 0;
			min-width: 237px;
			max-width: 70%;
			border-radius: 0;
			z-index: 100;
			height: 100%;
			transition: transform 0.35s;
			transform: translateX(-100%);
		}
		.sidebar.open {
			transform: translateX(0);
		}
		.sidebar__close {
			margin-right: auto;
			margin-left: 2rem;
		}
		.sidebar__bottom {
			padding-left: 24px;
			padding-right: 2rem;
		}
		.mobile-header {
			width: 100%;
			background-color: var(--green-dark-color);
			padding: 23px 1rem;
			margin-bottom: 1rem;
		}
		.mobile__bg {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 90;
			background: rgba(0, 0, 0, 0.5);
		}
	}
</style>
