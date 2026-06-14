<footer class="footer">
    <div class="footer-content">
        <p>
            © 2026 <span>Kiruthika Sivakumar</span>.
            Built with Svelte 5.
        </p>
    </div>
</footer>

<style>
    .footer {
        width: 100%;
        margin-top: 4rem;

        border-top: 1px solid rgba(229, 231, 235, 0.8);

        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(12px);
    }

    .footer-content {
        max-width: 1400px;
        margin: 0 auto;

        padding: 2rem;

        display: flex;
        justify-content: center;
        align-items: center;

        text-align: center;
    }

    .footer p {
        margin: 0;

        color: #64748b;
        font-size: 0.95rem;
        font-weight: 400;

        line-height: 1.7;
    }

    .footer span {
        font-weight: 600;
        color: #1e293b;
    }
    @media (max-width: 768px) {
        .footer {
            margin-top: 3rem;
        }

        .footer-content {
            padding: 1.5rem;
        }

        .footer p {
            font-size: 0.9rem;
        }
    }
    @media (max-width: 480px) {
        .footer-content {
            padding: 1.2rem 1rem;
        }

        .footer p {
            font-size: 0.85rem;
            line-height: 1.6;
        }
    }
</style>