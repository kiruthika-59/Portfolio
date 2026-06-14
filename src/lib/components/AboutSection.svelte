<script lang="ts">
	import {
		User,
		Sparkles,
		GraduationCap,
		BriefcaseBusiness,
		Calendar,
		BadgeCheck,
		MapPin,
		Cpu
	} from 'lucide-svelte';
</script>

<section id="about" class="about">
	<div class="section-header">
		<p class="subtitle">
			Get To Know Me
		</p>

		<h2>About Me</h2>
	</div>

	<div class="about-grid">
		<div class="about-card">
			<div class="card-title">
				<User size={22} />
				<h3>Who I Am</h3>
			</div>

			<p>
				I am an Electronics and
				Communication Engineering
				student from
				<strong>Neyveli</strong>
				with a strong interest in
				problem-solving, people
				collaboration, and modern
				web technologies.
			</p>

			<p>
				I enjoy building responsive
				and user-friendly web
				applications while learning
				modern frontend technologies
				such as Svelte and
				TypeScript.
			</p>

			<p>
				I am passionate about
				creating scalable and
				maintainable applications
				with clean UI and better
				user experience.
			</p>
		</div>

		<div class="about-card">
			<div class="card-title">
				<Sparkles size={22} />
				<h3>Strengths & Interests</h3>
			</div>

			<div class="strength-tags">
				<span>Communication</span>
				<span>Teamwork</span>
				<span>Creativity</span>
				<span>Problem Solving</span>
				<span>UI Development</span>
				<span>Responsive Design</span>
			</div>

			<p class="learning">
				<Cpu
					size={18}
					class="inline-icon"
				/>

				Currently learning
				<strong>Svelte 5</strong>
				through Proof of Concepts
				(PoCs) and building reusable
				UI components for modern
				web applications.
			</p>
		</div>
	</div>

	<div class="education">
		<div class="section-header">
			<p class="subtitle">
				Academic Background
			</p>

			<h2>Education</h2>
		</div>

		<div class="timeline">
			<div class="timeline-card">
				<div class="card-title">
					<GraduationCap size={22} />

					<h3>
						B.E Electronics &
						Communication
						Engineering
					</h3>
				</div>

				<span class="year">
					<Calendar size={14} />
					2021 – 2025
				</span>

				<p>
					<strong>
						K.S.Rangasamy College
						of Technology
					</strong>
				</p>

				<p>CGPA: 8.5</p>
			</div>

			<div class="timeline-card">
				<div class="card-title">
					<GraduationCap size={22} />

					<h3>
						Higher Secondary
						Education
					</h3>
				</div>

				<span class="year">
					<Calendar size={14} />
					2021
				</span>

				<p>
					St. Antony's Matric
					Higher Secondary School
				</p>

				<p>
					Computer Science – 91%
				</p>

				<p>10th Grade – 90%</p>
			</div>
		</div>
	</div>

	<div id="experience" class="experience">
		<div class="section-header">
			<p class="subtitle">
				Industry Exposure
			</p>

			<h2>Internships</h2>
		</div>

		<div class="experience-grid">
			<div class="experience-card">
				<div class="card-title">
					<BriefcaseBusiness
						size={22}
					/>

					<h3>
						NLC India Ltd.
					</h3>
				</div>

				<span class="year">
					<Calendar size={14} />
					2023
				</span>

				<p class="role">
					<BadgeCheck
						size={18}
						class="inline-icon"
					/>

					Internship –
					Telecommunication &
					Networking
				</p>

				<p>
					Gained practical
					exposure to fibre optic
					communication and
					networking systems,
					understanding their role
					in modern data
					transmission.
				</p>
			</div>

			<div class="experience-card">
				<div class="card-title">
					<BriefcaseBusiness
						size={22}
					/>

					<h3>
						CISCO Virtual
						Internship
					</h3>
				</div>

				<span class="year">
					<Calendar size={14} />
					2023
				</span>

				<p class="role">
					<BadgeCheck
						size={18}
						class="inline-icon"
					/>

					Networking &
					Campus Design
				</p>

				<p>
					Designed a college
					campus network using
					Cisco Packet Tracer and
					gained hands-on
					experience in networking
					concepts.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.about {
		max-width: 1200px;
		margin: 0 auto;
		padding: 5rem 1rem;
	}

	.section-header {
		text-align: center;
		margin-bottom: 3rem;
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
	}

	.about-grid,
	.timeline,
	.experience-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin-bottom: 5rem;
	}

    .about-card,
    .experience-card{
        text-align: justify;
    }

	.about-card,
	.timeline-card,
	.experience-card {
		background: rgba(255, 255, 255, 0.9);

		border: 1px solid
			rgba(229, 231, 235, 0.8);

		border-radius: 28px;

		padding: 2rem;

		backdrop-filter: blur(14px);

		box-shadow:
			0 10px 30px
			rgba(15, 23, 42, 0.06);

		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.about-card:hover,
	.timeline-card:hover,
	.experience-card:hover {
		transform: translateY(-8px);

		box-shadow:
			0 20px 40px
			rgba(15, 23, 42, 0.1);
	}

	.card-title {
		display: flex;
		align-items: center;
		gap: 0.8rem;

		margin-bottom: 1.3rem;
		color: #4338ca;
	}

	.card-title h3 {
		font-size: 1.25rem;
		font-weight: 700;
		color: #0f172a;
	}

	p {
		font-size: 1rem;
		line-height: 1.9;
		color: #64748b;
		margin-bottom: 1rem;
	}

	.inline-icon {
		display: inline-flex;
		vertical-align: middle;
		margin-left: 0.25rem;
		color: #4338ca;
	}

	.strength-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
		margin: 1.3rem 0;
	}

	.strength-tags span,
	.year {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;

		padding: 0.65rem 1rem;

		border-radius: 999px;

		background:
			rgba(99, 102, 241, 0.08);

		color: #4338ca;
		font-size: 0.95rem;
		font-weight: 600;
	}

	.role {
		font-weight: 600;
		color: #334155;
		margin: 1rem 0;
	}


	@media (max-width: 900px) {
		.about-grid,
		.timeline,
		.experience-grid {
			grid-template-columns: 1fr;
		}
	}


	@media (max-width: 768px) {
		.about {
			padding: 4rem 0.5rem;
		}

		.section-header {
			margin-bottom: 2rem;
		}

		.about-card,
		.timeline-card,
		.experience-card {
			padding: 1.5rem;
			border-radius: 24px;
		}

		.card-title h3 {
			font-size: 1.1rem;
		}

		p {
			font-size: 0.95rem;
			line-height: 1.8;
		}
	}


	@media (max-width: 480px) {
		.strength-tags {
			gap: 0.6rem;
		}

		.strength-tags span,
		.year {
			font-size: 0.85rem;
			padding: 0.55rem 0.9rem;
		}
	}
</style>