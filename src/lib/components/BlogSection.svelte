<script lang="ts">
	import {
		Code2,
		MonitorSmartphone,
		ServerCog
	} from 'lucide-svelte';

	const blogs = [
		{
			icon: Code2,
			tag: 'Currently Learning',
			title: 'Svelte 5 & Modern UI',
			description:
				'Exploring Svelte 5 concepts through PoCs, reusable components, state management, and responsive application development.'
		},

		{
			icon:
				MonitorSmartphone,
			tag:
				'Frontend Development',
			title:
				'Responsive UI Design',
			description:
				'Learning scalable UI development using TypeScript, HTML, CSS, reusable components, and maintainable frontend architecture.'
		},

		{
			icon: ServerCog,
			tag:
				'Backend Learning',
			title:
				'Spring Boot APIs',
			description:
				'Building REST APIs with Spring Boot, MySQL, validations, exception handling, and layered architecture practices.'
		}
	];
</script>

<section
	id="blog"
	class="blog"
>
	<div class="section-header">
		<p class="subtitle">
			Continuous Learning
		</p>

		<h2>
			My Learning Journey
		</h2>

		<p class="section-description">
			Constantly learning and
			improving through practical
			projects, Proof of Concepts
			(PoCs), and modern web
			technologies.
		</p>
	</div>

	<div class="blog-grid">
		{#each blogs as blog}
			<div class="blog-card">
				<div class="icon-box">
					<blog.icon
						size={28}
					/>
				</div>

				<span class="tag">
					{blog.tag}
				</span>

				<h3>
					{blog.title}
				</h3>

				<p>
					{blog.description}
				</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.blog {
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

	.blog-grid {
		display: grid;
		grid-template-columns:
			repeat(3, 1fr);

		gap: 1.5rem;
	}

	.blog-card {
		background:
			rgba(
				255,
				255,
				255,
				0.92
			);

		border:
			1px solid
			rgba(
				229,
				231,
				235,
				0.8
			);

		border-radius: 30px;

		padding: 2rem;

		text-align: center;

		backdrop-filter:
			blur(14px);

		box-shadow:
			0 10px 30px
			rgba(
				15,
				23,
				42,
				0.06
			);

		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease,
			border-color 0.3s ease;
	}

	.blog-card:hover {
		transform:
			translateY(-8px);

		border-color:
			#c7d2fe;

		box-shadow:
			0 20px 40px
			rgba(
				67,
				56,
				202,
				0.12
			);
	}

	.icon-box {
		width: 72px;
		height: 72px;

		margin:
			0 auto 1.4rem;

		border-radius: 22px;

		display: flex;
		align-items: center;
		justify-content: center;

		background:
			rgba(
				99,
				102,
				241,
				0.08
			);

		color: #4338ca;
	}

	.tag {
		display: inline-flex;
		align-items: center;

		background:
			rgba(
				99,
				102,
				241,
				0.08
			);

		color: #4338ca;

		font-size: 0.85rem;
		font-weight: 600;

		padding:
			0.5rem 1rem;

		border-radius: 999px;

		margin-bottom: 1.2rem;
	}

	.blog-card h3 {
		font-size: 1.3rem;
		font-weight: 700;

		color: #0f172a;

		margin-bottom: 1rem;
	}

	.blog-card p {
		font-size: 0.96rem;
		line-height: 1.8;

		color: #64748b;
	}

	@media (max-width: 900px) {
		.blog-grid {
			grid-template-columns:
				1fr;
		}
	}
@media (max-width: 768px) {
	.blog {
		padding: 3rem 0.5rem;
	}

	.blog-grid {
		grid-template-columns:
			repeat(2, 1fr);

		gap: 0.8rem;
	}

	.blog-card {
		padding: 1rem;
		border-radius: 18px;
	}

	.blog-card h3 {
		font-size: 0.95rem;
	}

	.blog-card p {
		font-size: 0.8rem;
		line-height: 1.7;
		text-align: justify;
	}

	.icon-box {
		width: 48px;
		height: 48px;
	}
}

	@media (max-width: 480px) {
		.icon-box {
			width: 60px;
			height: 60px;
		}

		.tag {
			font-size: 0.78rem;
		}
	}
</style>