<script lang="ts">
	import {
		Mail,
		GitBranch,
		LinkIcon,
		MapPin
	} from 'lucide-svelte';
</script>

<section
	id="contact"
	class="contact"
>
	<div class="section-header">
		<p class="subtitle">
			Get In Touch
		</p>

		<h2>
			Let's Connect
		</h2>

		<p class="description">
			Interested in frontend
			development, collaboration,
			internships, or discussing
			new ideas? Feel free to
			connect with me.
		</p>
	</div>

	<div class="contact-container">
		<a
			href="mailto:skkeerthi059@gmail.com"
			class="contact-card"
		>
			<div class="top">
				<div class="icon-box">
					<Mail size={24} />
				</div>

				<span class="label">
					Email
				</span>
			</div>

			<h3>
				skkeerthi059@gmail.com
			</h3>

			<p>
				Send me an email anytime.
			</p>
		</a>

		<a
			href="https://github.com/kiruthika-59"
			target="_blank"
			rel="noopener noreferrer"
			class="contact-card"
		>
			<div class="top">
				<div class="icon-box">
					<GitBranch size={24} />
				</div>

				<span class="label">
					GitHub
				</span>
			</div>

			<h3>
				kiruthika-59
			</h3>

			<p>
				Explore my projects and
				repositories.
			</p>
		</a>

		<a
			href="https://www.linkedin.com/in/kiruthika059"
			target="_blank"
			rel="noopener noreferrer"
			class="contact-card"
		>
			<div class="top">
				<div class="icon-box">
					<LinkIcon size={24} />
				</div>

				<span class="label">
					LinkedIn
				</span>
			</div>

			<h3>
				kiruthika059
			</h3>

			<p>
				Connect with me
				professionally.
			</p>
		</a>

		<div class="contact-card location-card">
			<div class="top">
				<div class="icon-box">
					<MapPin size={24} />
				</div>

				<span class="label">
					Location
				</span>
			</div>

			<h3>
				Neyveli,
				Tamil Nadu
			</h3>

			<p>
				Based in India.
			</p>
		</div>
	</div>
</section>

<style>
	.contact {
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

	.description {
		max-width: 700px;
		margin: 0 auto;

		font-size: 1rem;
		line-height: 1.9;

		color: #64748b;
	}

	.contact-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.contact-card {
		background:
			rgba(255, 255, 255, 0.92);

		border:
			1px solid
			rgba(229, 231, 235, 0.8);

		border-radius: 28px;

		padding: 2rem;

		text-decoration: none;
		color: inherit;

		backdrop-filter: blur(14px);

		box-shadow:
			0 10px 30px
			rgba(15, 23, 42, 0.06);

		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease,
			border-color 0.3s ease;
	}

	.contact-card:hover {
		transform: translateY(-8px);

		border-color: #c7d2fe;

		box-shadow:
			0 20px 40px
			rgba(67, 56, 202, 0.12);
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;

		margin-bottom: 1.5rem;
	}

	.icon-box {
		width: 58px;
		height: 58px;

		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 18px;

		background:
			rgba(99, 102, 241, 0.08);

		color: #4338ca;

		flex-shrink: 0;
	}

	.label {
		font-size: 0.9rem;
		font-weight: 600;

		color: #4338ca;

		background:
			rgba(99, 102, 241, 0.08);

		padding: 0.5rem 1rem;
		border-radius: 999px;
	}

	.contact-card h3 {
		font-size: 1.2rem;
		font-weight: 700;

		color: #0f172a;

		margin-bottom: 0.7rem;

		word-break: break-word;
	}

	.contact-card p {
		font-size: 0.96rem;
		line-height: 1.7;

		color: #64748b;
	}

	@media (max-width: 900px) {
		.contact-container {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
	.contact {
		padding: 3rem 0.5rem;
	}

	.contact-container {
		grid-template-columns:
			repeat(2, 1fr);

		gap: 0.8rem;
	}

	.contact-card {
		padding: 1rem;
		border-radius: 18px;
	}

	.contact-card h3 {
		font-size: 0.9rem;
		word-break: break-word;
	}

	.contact-card p {
		font-size: 0.8rem;
		text-align: justify;
	}

	.icon-box {
		width: 44px;
		height: 44px;
	}

	.label {
		font-size: 0.72rem;
		padding: 0.35rem 0.7rem;
	}
}
	@media (max-width: 480px) {
		.top {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}

		.icon-box {
			width: 52px;
			height: 52px;
		}

		.label {
			font-size: 0.82rem;
		}
	}
</style>