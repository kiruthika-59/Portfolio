<script lang="ts">
	import {
		GraduationCap,
		FolderGit2,
		BriefcaseBusiness,
		Trophy
	} from 'lucide-svelte';
</script>

<section id="home" class="hero">
	<div class="hero-content">
		<div class="text-section">
			<p class="greeting">Hello, I'm</p>

			<h1>Kiruthika Sivakumar</h1>

			<h2>
				ECE Student |
				<span>Aspiring Frontend Developer</span>
			</h2>

			<p class="description">
				Aspiring Frontend Developer with experience in
				responsive UI development, reusable component
				design, and modern web application development
				using Svelte, TypeScript, HTML, and CSS.
			</p>

			<p class="career-goal">
				Passionate about building scalable and responsive
				applications with clean, maintainable code while
				continuously improving frontend development
				skills.
			</p>

			<div class="buttons">
				<a
					href="/Kiruthika_S_Resume.pdf"
					download
					class="resume-btn"
				>
					Download Resume
				</a>
			</div>
		</div>
	</div>

	<div class="stats-container">
		<div class="stat-card">
			<div class="icon-wrapper">
				<GraduationCap size={26} />
			</div>

			<h3>8.5</h3>
			<p>CGPA</p>
		</div>

		<div class="stat-card">
			<div class="icon-wrapper">
				<FolderGit2 size={26} />
			</div>

			<h3>3+</h3>
			<p>Projects</p>
		</div>

		<div class="stat-card">
			<div class="icon-wrapper">
				<BriefcaseBusiness size={26} />
			</div>

			<h3>2</h3>
			<p>Internships</p>
		</div>

		<div class="stat-card">
			<div class="icon-wrapper">
				<Trophy size={26} />
			</div>

			<h3>2025</h3>
			<p>Graduate</p>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: calc(100vh - 80px);

		display: flex;
		flex-direction: column;
		justify-content: center;

		max-width: 1200px;
		margin: 0 auto;

		padding: 4rem 1rem 3rem;
	}

	.hero-content {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.text-section {
		max-width: 850px;
		text-align: center;
	}

	.greeting {
		font-size: 1.1rem;
		font-weight: 500;
		color: #6366f1;

		margin-bottom: 1rem;
		letter-spacing: 0.5px;
	}

	h1 {
		font-size: clamp(3rem, 8vw, 5.5rem);
		font-weight: 800;
		line-height: 1.05;

		margin-bottom: 1rem;

		background: linear-gradient(
			to right,
			#111827,
			#4338ca
		);

		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	h2 {
		font-size: clamp(1.2rem, 3vw, 1.7rem);
		font-weight: 600;

		color: #334155;
		line-height: 1.6;

		margin-bottom: 1.8rem;
	}

	h2 span {
		color: #4338ca;
	}

	.description,
	.career-goal {
		font-size: clamp(0.95rem, 2vw, 1.08rem);
		line-height: 1.9;
		color: #64748b;

		max-width: 720px;
		margin: 0 auto;
	}

	.career-goal {
		margin-top: 1rem;
	}

	.buttons {
		margin-top: 2.5rem;

		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.resume-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;

		padding: 1rem 2rem;

		border-radius: 16px;

		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;

		background: #4338ca;
		color: white;

		box-shadow:
			0 10px 30px
			rgba(67, 56, 202, 0.2);

		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.resume-btn:hover {
		transform: translateY(-5px);

		box-shadow:
			0 16px 35px
			rgba(67, 56, 202, 0.3);
	}

	.stats-container {
		margin-top: 5rem;

		display: grid;
		grid-template-columns: repeat(4, 1fr);

		gap: 1.2rem;
	}

	.stat-card {
		background: rgba(255, 255, 255, 0.9);

		border: 1px solid rgba(229, 231, 235, 0.8);
		border-radius: 24px;

		padding: 2rem 1.5rem;

		text-align: center;

		backdrop-filter: blur(12px);

		box-shadow:
			0 10px 30px
			rgba(15, 23, 42, 0.06);

		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.stat-card:hover {
		transform: translateY(-8px);

		box-shadow:
			0 20px 40px
			rgba(15, 23, 42, 0.12);
	}

	.icon-wrapper {
		width: 58px;
		height: 58px;

		margin: 0 auto 1rem;

		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 16px;

		background: rgba(99, 102, 241, 0.08);

		color: #4338ca;
	}

	.stat-card h3 {
		font-size: 2rem;
		font-weight: 700;

		color: #0f172a;
		margin-bottom: 0.4rem;
	}

	.stat-card p {
		font-size: 0.95rem;
		color: #64748b;
	}
@media (max-width: 900px) {
	.hero {
		padding: 3rem 1rem;
	}

	.stats-container {
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
}
@media (max-width: 768px) {
	.hero {
		min-height: auto;
		padding: 2rem 0.5rem;
	}

	.text-section {
		max-width: 100%;
	}

	.greeting {
		font-size: 0.9rem;
	}

	h1 {
		font-size: 2.3rem;
		line-height: 1.15;
	}

	h2 {
		font-size: 1rem;
		line-height: 1.5;
	}

	.description,
	.career-goal {
		font-size: 0.88rem;
		line-height: 1.75;
		text-align: justify;
	}

	.buttons {
		margin-top: 1.5rem;
	}

	.resume-btn {
		padding: 0.8rem 1.2rem;
		font-size: 0.88rem;
		border-radius: 14px;
	}
	.stats-container {
		margin-top: 2rem;

		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));

		gap: 0.8rem;
	}

	.stat-card {
		padding: 1rem 0.8rem;
		border-radius: 18px;

		min-height: 110px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		text-align: center;
	}

	.icon-wrapper {
		width: 42px;
		height: 42px;

		margin-bottom: 0.7rem;
		border-radius: 12px;
	}


	.stat-card h3 {
		font-size: 1.1rem;
		margin-bottom: 0.2rem;
	}

	.stat-card p {
		font-size: 0.78rem;
		line-height: 1.3;
	}
}
@media (max-width: 420px) {
	h1 {
		font-size: 2rem;
	}

	h2 {
		font-size: 0.95rem;
	}

	.stats-container {
		grid-template-columns: repeat(2, 1fr);
		gap: 0.7rem;
	}

	.stat-card {
		min-height: 100px;
		padding: 0.9rem;
	}
}
</style>