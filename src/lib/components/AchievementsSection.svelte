<script lang="ts">
	import {
		BadgeCheck,
		FileText,
		Microscope,
		Users,
		HeartHandshake,
		Trophy,
		CircleCheckBig
	} from 'lucide-svelte';

	const achievements = [
		{
			icon: BadgeCheck,
			title: 'Certifications',
			items: [
				'Completed NPTEL Cloud Computing with a passing score of 55%.',
				'Achieved Elite Certification in NPTEL Industrial 4.0 & Industrial IoT.'
			]
		},

		{
			icon: FileText,
			title:
				'Paper Presentations',
			items: [
				'Presented a paper on Internet of Things at Velalar College of Engineering and Technology (2022).',
				'Presented a paper on 5G Technology during a workshop at KPR Institutions (2023).'
			]
		},

		{
			icon: Microscope,
			title:
				'Workshops & Industry Exposure',
			items: [
				'Attended a workshop on PCB Designing.',
				'Visited B2B TECH EXPO (IoT Exploration) at Bengaluru.'
			]
		},

		{
			icon: Users,
			title:
				'Leadership & Organizations',
			items: [
				'CEO – Collabspace leading innovative student projects.',
				'Active CAFACE MOC member supporting events and engagement.',
				'Dedicated member of ISTE.'
			]
		},

		{
			icon:
				HeartHandshake,
			title:
				'Volunteering',
			items: [
				'Volunteered for student induction programs for juniors.',
				'Organized symposiums, guest talks, and celebrations as a CAFACE member.'
			]
		},

		{
			icon: Trophy,
			title:
				'Extra-Curricular',
			items: [
				'Won certificate in intra-college Ball Badminton competition (2022).'
			]
		}
	];
</script>

<section
	id="achievements"
	class="achievements"
>
	<div class="section-header">
		<p class="subtitle">
			Growth & Experience
		</p>

		<h2>
			Achievements &
			Leadership
		</h2>

		<p class="section-description">
			My academic, technical,
			leadership, and extracurricular
			experiences that contributed
			to my personal and
			professional growth.
		</p>
	</div>

	<div class="achievement-grid">
		{#each achievements as achievement}
			<div class="achievement-card">
				<div class="card-header">
					<div class="icon-box">
						<achievement.icon
							size={24}
						/>
					</div>

					<h3>
						{achievement.title}
					</h3>
				</div>

				<ul>
					{#each achievement.items as item}
						<li>
							<CircleCheckBig
								size={18}
							/>

							<span>
								{item}
							</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<style>
	.achievements {
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

	.achievement-grid {
		display: grid;
		grid-template-columns:
			repeat(2, 1fr);

		gap: 1.5rem;
	}

	.achievement-card {
		background:
			rgba(255, 255, 255, 0.92);

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

	.achievement-card:hover {
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
		width: 56px;
		height: 56px;

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
		font-size: 1.2rem;
		font-weight: 700;

		color: #0f172a;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		display: flex;
		align-items: flex-start;
		gap: 0.8rem;

		margin-bottom: 1rem;

		line-height: 1.8;
		color: #64748b;
	}

	@media (max-width: 900px) {
		.achievement-grid {
			grid-template-columns:
				1fr;
		}
	}

	@media (max-width: 768px) {
		.achievements {
			padding:
				4rem 0.5rem;
		}

		.section-header {
			margin-bottom:
				2.5rem;
		}

		.achievement-card {
			padding: 1.5rem;
			border-radius: 24px;
		}

		.card-header h3 {
			font-size: 1.05rem;
		}
	}

	@media (max-width: 480px) {
		.card-header {
			align-items: flex-start;
		}

		.icon-box {
			width: 50px;
			height: 50px;
		}

		li {
			font-size: 0.92rem;
		}
	}
</style>