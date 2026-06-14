<script lang="ts">
	import { Menu, X } from 'lucide-svelte';

	let menuOpen = $state(false);
	let activeSection = $state('home');

	const navItems = [
		'home',
		'about',
		'skills',
		'projects',
		'blog',
		'achievements',
		'contact'
	];

	const closeMenu = () => {
		menuOpen = false;
	};

	$effect(() => {
	const sections =
		document.querySelectorAll(
			'section[id]'
		);

	const handleScroll =
		() => {
			const scrollPosition =
				window.scrollY + 120;

			sections.forEach(
				(section) => {
					const htmlSection =
						section as HTMLElement;

					const top =
						htmlSection.offsetTop;

					const height =
						htmlSection.offsetHeight;

					if (
						scrollPosition >=
							top &&
						scrollPosition <
							top + height
					) {
						activeSection =
							htmlSection.id;
					}
				}
			);
		};

	window.addEventListener(
		'scroll',
		handleScroll
	);
	handleScroll();

	return () => {
		window.removeEventListener(
			'scroll',
			handleScroll
		);
	};
});
</script>

<nav class="navbar">
	<div class="nav-container">
		<a href="#home" class="logo">
			Kiruthika
		</a>

		<button
			class="menu-btn"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label="Toggle Menu"
		>
			{#if menuOpen}
				<X size={28} />
			{:else}
				<Menu size={28} />
			{/if}
		</button>

		<div class="links" class:show={menuOpen}>
			{#each navItems as item}
				<a
					href={`#${item}`}
					onclick={closeMenu}
					class:active={activeSection === item}
				>
					{item.charAt(0).toUpperCase() + item.slice(1)}
				</a>
			{/each}
		</div>
	</div>
</nav>

<style>
	.navbar {
		position: fixed;
		top: 0;
		z-index: 1000;
		width: 100%;

		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(18px);

		border-bottom: 1px solid rgba(229, 231, 235, 0.8);

		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
	}

	.nav-container {
		max-width: 1400px;
		margin: 0 auto;

		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 1rem 2rem;
		position: relative;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 800;
		text-decoration: none;
		letter-spacing: 0.5px;

		background: linear-gradient(
			to right,
			#111827,
			#4338ca
		);

		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		transition: transform 0.3s ease;
	}

	.logo:hover {
		transform: scale(1.03);
	}

	.links {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.links a {
		position: relative;

		text-decoration: none;
		color: #334155;

		font-size: 0.98rem;
		font-weight: 500;

		transition: all 0.3s ease;
	}

	.links a:hover {
		color: #4338ca;
		transform: translateY(-1px);
	}

	.links a.active {
		color: #4338ca;
		font-weight: 600;
	}

.links a::after {
	content: '';

	position: absolute;
	left: 0;
	bottom: -6px;

	width: 100%;
	height: 2px;

	border-radius: 999px;
	background: #4338ca;

	transform: scaleX(0);
	transform-origin: left;

	transition:
		transform 0.3s ease;
}

.links a:hover::after,
.links a.active::after {
	transform: scaleX(1);
}

	.menu-btn {
		display: none;
		border: none;
		background: transparent;
		cursor: pointer;
		color: #111827;

		padding: 0.4rem;
		border-radius: 12px;

		transition: background 0.3s ease;
	}

	.menu-btn:hover {
		background: rgba(99, 102, 241, 0.08);
	}
	@media (max-width: 900px) {
		.nav-container {
			padding: 1rem 1.5rem;
		}

		.links {
			gap: 1.2rem;
		}
	}

	@media (max-width: 768px) {
		.nav-container {
			padding: 1rem;
		}

		.menu-btn {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.links {
			position: absolute;
			top: 78px;
			right: 1rem;

			width: min(260px, 90vw);

			display: flex;
			flex-direction: column;
			align-items: flex-start;

			gap: 1rem;

			padding: 1.4rem;

			border-radius: 24px;

			background: rgba(255, 255, 255, 0.96);

			backdrop-filter: blur(18px);

			border: 1px solid rgba(229, 231, 235, 0.8);

			box-shadow:
				0 20px 40px rgba(15, 23, 42, 0.12);

			opacity: 0;
			visibility: hidden;
			transform: translateY(-12px);

			transition:
				opacity 0.3s ease,
				transform 0.3s ease,
				visibility 0.3s;
		}

		.links.show {
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		}

		.links a {
			width: 100%;
			font-size: 1rem;
			padding: 0.6rem 0;
			border-bottom: 1px solid #f1f5f9;
		}

		.links a:last-child {
			border-bottom: none;
		}
	}
	@media (max-width: 480px) {
		.logo {
			font-size: 1.3rem;
		}

		.links {
			right: 0.7rem;
			top: 74px;
		}
	}
</style>