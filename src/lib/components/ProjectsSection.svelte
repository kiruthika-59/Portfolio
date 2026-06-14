<script lang="ts">
	import { slide } from 'svelte/transition';

	let expandedProject = $state<number | null>(null);

	const toggleProject = (index: number) => {
		expandedProject =
			expandedProject === index
				? null
				: index;
	};

	const projects = [
		{
			title:
				'Community Based Food Waste Management System',

			description:
				'Developed a platform to reduce food wastage by connecting food donors with volunteers for food collection and distribution. Built responsive and user-friendly interfaces with seamless navigation and efficient data handling.',

			technologies: [
				'Angular',
				'TypeScript',
				'HTML5',
				'CSS3',
				'Spring Boot',
				'MySQL',
				'Git'
			],

			highlights: [
				'Designed responsive frontend pages using Angular and TypeScript',
				'Implemented donor registration and volunteer management modules',
				'Built food donation tracking functionality',
				'Improved UI/UX for mobile, tablet, and desktop responsiveness',
				'Implemented form validation and error handling',
				'Managed MySQL database tables'
			]
		},

		{
			title:
				'PG Accommodation Management System',

			description:
				'Developed a PG Accommodation Management System to streamline interactions between tenants and property owners.',

			technologies: [
				'Spring Boot',
				'Java',
				'MySQL',
				'Swagger',
				'Postman'
			],

			highlights: [
				'Designed RESTful APIs',
				'Implemented CRUD operations',
				'Designed database schemas',
				'Applied layered architecture',
				'Implemented validations',
				'Integrated Swagger'
			]
		},

		{
			title:
				'E-Commerce Web Application',

			description:
				'Built a responsive e-commerce web application using Svelte and TypeScript.',

			technologies: [
				'Svelte',
				'TypeScript',
				'HTML5',
				'CSS3',
				'JavaScript',
				'GitHub'
			],

			highlights: [
				'Built reusable UI components',
				'Designed responsive interfaces',
				'Implemented filtering',
				'Added cart and wishlist',
				'Created navigation',
				'Integrated APIs'
			]
		}
	];
</script>

<section
	id="projects"
	class="projects"
>
	<div class="section-header">
		<p class="subtitle">
			My Work
		</p>

		<h2>
			Featured Projects
		</h2>

		<p class="section-description">
			Projects showcasing my
			experience in frontend
			development, backend systems,
			responsive UI, and scalable
			application development.
		</p>
	</div>

	<div class="projects-grid">
		{#each projects as project, index}
			<div
				class="project-card"
				class:expanded={expandedProject === index}
			>
				<div class="project-top">
					<div class="project-content">
						<h3>
							{project.title}
						</h3>

						<p class="description">
							{project.description}
						</p>
					</div>

					<button
						class="toggle-btn"
						onclick={() =>
							toggleProject(index)}
						aria-label="Toggle project details"
					>
						{#if expandedProject === index}
							✕
						{:else}
							+
						{/if}
					</button>
				</div>

				<div class="tech-stack">
					{#each project.technologies as tech}
						<span class="tech-tag">
							{tech}
						</span>
					{/each}
				</div>

				{#if expandedProject === index}
					<div
						class="expanded-content"
						transition:slide={{
							duration: 250
						}}
					>
						<h4>
							Key Contributions
						</h4>

						<ul>
							{#each project.highlights as item}
								<li>
									{item}
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	.projects {
		max-width: 1200px;
		margin: 0 auto;
		padding: 5rem 1rem;
	}

	.section-header {
		text-align: center;
		margin-bottom: 3.5rem;
	}

	.subtitle {
		font-size: 0.95rem;
		font-weight: 600;
		color: #6366f1;

		text-transform: uppercase;
		letter-spacing: 1px;

		margin-bottom: 0.7rem;
	}

	h2 {
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 800;

		color: #0f172a;

		margin-bottom: 1rem;
	}

	.section-description {
		max-width: 720px;
		margin: 0 auto;

		font-size: 1rem;
		line-height: 1.9;

		color: #64748b;
	}

	.projects-grid {
		display: grid;
		gap: 1.5rem;
	}

	.project-card {
		background:
			rgba(255, 255, 255, 0.92);

		border:
			1px solid
			rgba(229, 231, 235, 0.8);

		border-radius: 30px;

		padding: 2rem;

		backdrop-filter: blur(14px);

		box-shadow:
			0 10px 30px
			rgba(15, 23, 42, 0.06);

		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease,
			border-color 0.3s ease;
	}

	.project-card:hover {
		transform: translateY(-8px);

		box-shadow:
			0 20px 40px
			rgba(15, 23, 42, 0.1);
	}

	.project-card.expanded {
		border-color: #c7d2fe;

		box-shadow:
			0 20px 40px
			rgba(67, 56, 202, 0.12);
	}

	.project-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
	}

	.project-content {
		flex: 1;
	}

	.project-card h3 {
		font-size: 1.45rem;
		font-weight: 700;

		color: #0f172a;
		margin-bottom: 1rem;
	}

	.description {
		font-size: 1rem;
		line-height: 1.9;
		color: #64748b;
	}

	.toggle-btn {
		width: 50px;
		height: 50px;

		flex-shrink: 0;

		border: none;
		border-radius: 16px;

		background:
			rgba(99, 102, 241, 0.08);

		color: #4338ca;

		font-size: 1.5rem;
		font-weight: 700;

		cursor: pointer;

		transition:
			transform 0.25s ease,
			background 0.25s ease,
			color 0.25s ease;
	}

	.toggle-btn:hover {
		transform: scale(1.06);

		background: #4338ca;
		color: white;
	}

	.tech-stack {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;

		margin-top: 1.5rem;
	}

	.tech-tag {
		padding: 0.7rem 1rem;

		border-radius: 999px;

		background:
			rgba(99, 102, 241, 0.08);

		color: #4338ca;

		font-size: 0.92rem;
		font-weight: 600;
	}

	.expanded-content {
		margin-top: 1.8rem;
		padding-top: 1.5rem;

		border-top:
			1px solid
			rgba(229, 231, 235, 0.8);
	}

	.expanded-content h4 {
		font-size: 1.1rem;
		font-weight: 700;

		color: #0f172a;

		margin-bottom: 1rem;
	}

	.expanded-content ul {
		padding-left: 1.2rem;
	}

	.expanded-content li {
		margin-bottom: 0.9rem;

		line-height: 1.8;
		color: #64748b;
	}
	@media (max-width: 768px) {
	.projects {
		padding: 3rem 0.5rem;
	}

	.project-card {
		padding: 1rem;
		border-radius: 20px;
	}

	.project-card h3 {
		font-size: 1rem;
	}

	.description {
		font-size: 0.85rem;
		line-height: 1.7;
		text-align: justify;
	}

	.tech-tag {
		font-size: 0.72rem;
		padding: 0.45rem 0.75rem;
	}

	.toggle-btn {
		height: 42px;
		font-size: 1.1rem;
	}
}

	@media (max-width: 480px) {
		.tech-stack {
			gap: 0.6rem;
		}

		.tech-tag {
			font-size: 0.82rem;
			padding: 0.6rem 0.85rem;
		}
	}
</style>