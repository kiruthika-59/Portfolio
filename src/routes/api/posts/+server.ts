import { json } from "@sveltejs/kit";

export function GET() {
    const posts = [
        {
            id: 1,
            title: "Learning SvelteKit",
            content:
                "My experience learning SvelteKit and building projects."
        },
        {
            id: 2,
            title: "Why I Like Svelte",
            content:
                "Svelte makes frontend development simple and clean."
        },
        {
            id: 3,
            title: "My Web Development Journey",
            content:
                "How I started learning modern web development."
        }
    ];

    return json(posts);
}