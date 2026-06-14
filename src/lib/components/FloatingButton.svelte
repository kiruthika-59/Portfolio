<script lang="ts">
	import { ArrowUp } from 'lucide-svelte';
	import { fade, scale } from 'svelte/transition';

	let showButton = $state(false);

	const handleScroll = () => {
		showButton = window.scrollY > 300;
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	$effect(() => {
		handleScroll();

		window.addEventListener(
			'scroll',
			handleScroll,
			{ passive: true }
		);

		return () => {
			window.removeEventListener(
				'scroll',
				handleScroll
			);
		};
	});
</script>

{#if showButton}
	<button
		class="floating-btn"
		onclick={scrollToTop}
		aria-label="Back to top"
		in:scale={{
			duration: 180,
			start: 0.85
		}}
		out:fade={{
			duration: 150
		}}
	>
		<ArrowUp size={22} />
	</button>
{/if}

<style>
	.floating-btn {
		position: fixed;

		right: 2rem;
		bottom: 2rem;

		width: 58px;
		height: 58px;

		border: none;
		border-radius: 50%;

		display: flex;
		align-items: center;
		justify-content: center;

		cursor: pointer;
		z-index: 999;

		background:
			rgba(67, 56, 202, 0.95);

		color: white;

		backdrop-filter: blur(12px);

		box-shadow:
			0 12px 30px
			rgba(67, 56, 202, 0.28);

		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease,
			background 0.25s ease;
	}

	.floating-btn:hover {
		transform:
			translateY(-5px)
			scale(1.05);

		box-shadow:
			0 18px 38px
			rgba(67, 56, 202, 0.35);
	}

	.floating-btn:active {
		transform: scale(0.96);
	}

	@media (max-width: 768px) {
		.floating-btn {
			width: 52px;
			height: 52px;

			right: 1.25rem;
			bottom: 1.25rem;
		}
	}

	@media (max-width: 480px) {
		.floating-btn {
			width: 48px;
			height: 48px;

			right: 1rem;
			bottom: 1rem;
		}
	}
</style>