export interface Project {
    id: string;
    category: string;
    title: string;
    description: string;
    year: string;
    image: string; // URL mock por enquanto
    color: string; // Cor de destaque sutil
}

export const projects: Project[] = [
    // --- UX DESIGNER (2 Projetos) ---
    {
        id: 'ux-1',
        category: 'UX Designer',
        title: 'E-Commerce Audit',
        description: 'Análise heurística completa e reestruturação do fluxo de checkout para aumentar a conversão móvel.',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop',
        color: '#E0E0E0'
    },
    {
        id: 'ux-2',
        category: 'UX Designer',
        title: 'Banking App Research',
        description: 'Mapeamento de jornada do usuário e testes de usabilidade para o novo aplicativo de investimentos.',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        color: '#D6D6D6'
    },

    // --- UI DESIGNER (1 Projeto - Spotlight) ---
    {
        id: 'ui-1',
        category: 'UI Designer',
        title: 'Neon Brand System',
        description: 'Design System completo e identidade visual para uma fintech de nova geração. Foco em micro-interações.',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
        color: '#111111' // Darker contrast
    },

    // --- AIX / IA (2 Projetos) ---
    {
        id: 'ai-1',
        category: 'AIX - Intelligence',
        title: 'Generative Dashboard',
        description: 'Interface adaptativa que muda layouts baseada no comportamento do usuário usando predição de IA.',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2664&auto=format&fit=crop',
        color: '#F0F0F0'
    },
    {
        id: 'ai-2',
        category: 'AIX - Intelligence',
        title: 'Neural Chat Bot',
        description: 'Experiência de chat imersiva com feedback em tempo real e visualização de dados gerada por voz.',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop',
        color: '#E5E5E5'
    }
];
