<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "../app.css";

    let { children } = $props();
</script>

<div class="layout">
    <Navbar />

    <main class="main-content">
        {@render children()}
    </main>

    <Footer />
</div>

<style>
    .layout {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
    }

    .main-content {
        flex: 1;
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
       padding:
		6rem 2rem 2rem;
        box-sizing: border-box;
    }
    @media (max-width: 1024px) {
        .main-content {
            padding: 2rem;
        }
    }
    @media (max-width: 768px) {
        .main-content {
            padding:5rem 1rem 1rem;
        }
    }
    @media (max-width: 480px) {
        .main-content {
            padding: 1rem;
        }
    }
</style>