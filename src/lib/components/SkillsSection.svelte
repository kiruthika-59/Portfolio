<script lang="ts">
	import {
		MonitorSmartphone,
		ServerCog,
		Database,
		Wrench
	} from 'lucide-svelte';

	const skillCategories = [
		{
			title: 'Frontend',
			icon: MonitorSmartphone,

			skills: [
				'Svelte',
				'Angular',
				'HTML',
				'CSS',
				'JavaScript',
				'TypeScript'
			]
		},

		{
			title: 'Backend',
			icon: ServerCog,

			skills: [
				'Spring Boot',
				'Java',
				'REST APIs'
			]
		},

		{
			title: 'Database',
			icon: Database,

			skills: [
				'SQL',
				'MySQL'
			]
		},

		{
			title: 'Tools',
			icon: Wrench,

			skills: [
				'Git',
				'GitHub',
				'VS Code',
				'Postman'
			]
		}
	];
</script>

<section
	id="skills"
	class="skills"
>
	<div class="section-header">
		<p class="subtitle">
			My Technical Expertise
		</p>

		<h2>
			Skills &
			Technologies
		</h2>

		<p class="section-description">
			Technologies and tools I use for
			building responsive frontend
			interfaces, backend systems,
			and scalable web applications.
		</p>
	</div>

	<div class="skills-grid">
		{#each skillCategories as category}
			<div class="skill-card">
				<div class="card-header">
					<div class="icon-box">
						<category.icon
							size={26}
						/>
					</div>

					<h3>
						{category.title}
					</h3>
				</div>

				<div class="tags">
					{#each category.skills as skill}
						<span class="tag">
							{skill}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.skills {
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
		max-width: 700px;
		margin: 0 auto;

		font-size: 1rem;
		line-height: 1.9;

		color: #64748b;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.skill-card {
		background:
			rgba(255, 255, 255, 0.9);

		border:
			1px solid
			rgba(229, 231, 235, 0.8);

		border-radius: 28px;

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

	.skill-card:hover {
		transform: translateY(-8px);

		border-color: #c7d2fe;

		box-shadow:
			0 20px 40px
			rgba(67, 56, 202, 0.12);
	}

	.card-header {
		display: flex;
		align-items: center;
		gap: 1rem;

		margin-bottom: 1.5rem;
	}

	.icon-box {
		width: 60px;
		height: 60px;

		border-radius: 18px;

		display: flex;
		align-items: center;
		justify-content: center;

		background:
			rgba(99, 102, 241, 0.08);

		color: #4338ca;

		flex-shrink: 0;
	}

	.card-header h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: #0f172a;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
	}

	.tag {
		display: inline-flex;
		align-items: center;
		justify-content: center;

		padding: 0.75rem 1rem;

		border-radius: 999px;

		background:
			rgba(99, 102, 241, 0.08);

		color: #4338ca;

		font-size: 0.95rem;
		font-weight: 600;

		transition:
			transform 0.25s ease,
			background 0.25s ease,
			color 0.25s ease;
	}

	.tag:hover {
		transform: translateY(-3px);

		background: #4338ca;
		color: white;
	}
	@media (max-width: 900px) {
		.skills-grid {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 768px) {
		.skills {
			padding: 4rem 0.5rem;
		}

		.section-header {
			margin-bottom: 2.5rem;
		}

		.skill-card {
			padding: 1.5rem;
			border-radius: 24px;
		}

		.card-header h3 {
			font-size: 1.15rem;
		}

		.section-description {
			font-size: 0.95rem;
			line-height: 1.8;
		}
	}
	@media (max-width: 480px) {
		.tags {
			gap: 0.6rem;
		}

		.tag {
			font-size: 0.85rem;
			padding: 0.65rem 0.9rem;
		}

		.icon-box {
			width: 52px;
			height: 52px;
		}
	}
</style>